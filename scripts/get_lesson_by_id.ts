import { gql } from 'graphql-request'

export const getLessonByID = (lessonID) => {
	return gql`{
		lesson(input: { id: "${lessonID}" }) {
			name
			content {
				type
				link
			}
			collection {
				id
				position
				module {
					id
					moduleName
					moduleNumber
					collections {
						id
						position
						lessons {
							id
							position
						}
					}
				}
			}
		}
	}`
}
