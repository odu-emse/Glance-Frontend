import { GraphQLClient } from 'graphql-request'
import { createClient } from 'graphql-ws'

const gqlFetcher = (args) => {
	const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
		headers: {
			authorization: args.token,
		},
	})

	return client.request(args.query, args.variables || {})
}

export const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
	headers: {},
})

export const wsClient =
	typeof window !== 'undefined'
		? createClient({
				url: 'ws://localhost:5000/graphql',
		  })
		: null

export default gqlFetcher
