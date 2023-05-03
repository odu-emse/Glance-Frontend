import { gql } from 'graphql-request'

export const getQuizInstanceByID = gql`
	query getQuizInstanceByID($instanceID: ID!) {
		quizResult(args: { quizInstance: $instanceID }) {
			id
			score
			submittedAt
			student {
				id
			}
			quizInstance {
				id
				quiz {
					numQuestions
					id
					totalPoints
					dueAt
					timeLimit
					minScore
					instructions
				}
			}
		}
	}
`
