import { GraphQLClient } from 'graphql-request'

const gqlFetcher = (args) => {
	const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
		headers: {
			authorization: args.token,
		},
	})

	return client.request(args.query)
}

export default gqlFetcher
