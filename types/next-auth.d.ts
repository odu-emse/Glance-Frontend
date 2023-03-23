import NextAuth from 'next-auth';

declare module "next-auth" {
	interface Session {
		user: {
			email: string
			image: string
			name: string
		}
		expires: string
		idToken: string
		openId: string
	}
}