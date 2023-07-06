import { gql } from 'graphql-request'

export const getQuizById = gql`
	query getQuizById($quizID: ID!) {
		quiz(args: { id: $quizID }) {
			numQuestions
			id
			totalPoints
			dueAt
			timeLimit
			minScore
			instances {
				id
			}
			instructions
		}
	}
`
