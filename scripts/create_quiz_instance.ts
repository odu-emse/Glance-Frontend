import { gql } from 'graphql-request'

export const createQuizInstance = gql`
	query FetchQuizInstance($id: ID!) {
		quizInstance(args: { id: $id }) {
			id
			questions {
				text
				answers {
					id
					text
					correct
				}
			}
		}
	}
`
