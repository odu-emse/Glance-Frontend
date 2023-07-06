import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { GraphQLClient } from 'graphql-request'

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			wellKnown:
				'https://accounts.google.com/.well-known/openid-configuration',
			authorization: { params: { scope: 'openid email profile' } },
			idToken: true,
			checks: ['pkce', 'state'],
			profile(profile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
				}
			},
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			const client = new GraphQLClient(
				process.env.NEXT_PUBLIC_API_URL,
				{},
			)

			// Check if the user already exists
			try {
				const doesUserExist = await client.request(`
					query { 
						user(input: { openID: "${user.id}" }) {
							id
						}
					}
				`)
			} catch (e) {
				// User does not exist!!!! Create me!
				// FIXME:User lastname
				client.request(`
					mutation {
						createUser(input: {
							openID: "${user.id}"
							email: "${user.email}"
							picURL: "${user.image}"
							firstName: "${profile.given_name}"
							lastName: "${profile.family_name}"
							middleName: ""
						}) {
							id
						}
					}
				`)
			}

			return true
		},
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			console.log(account)
			if (account) {
				token.idToken = account.id_token
			}
			return token
		},
		async session({ session, token, user }) {
			session.idToken = token.idToken
			session.openId = token.sub
			return session
		},
	},
	session: {
		strategy: 'jwt',
	},
}

export default NextAuth(authOptions)
