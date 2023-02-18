import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

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
