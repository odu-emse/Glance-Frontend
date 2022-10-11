import { gql } from 'graphql-request';

export const getModuleByID = (courseID) => {
	return gql`
		{
			module(id: "${courseID}") {
				id
				moduleName
				moduleNumber
				description
				duration
				intro
				numSlides
				keywords
				createdAt
				updatedAt
				assignments {
					id
					name
				}
				members {
					id
					role
					plan {
						student {
							id
							lastName
							firstName
						}
					}
				}
				parentCourses {
					id
					course {
						name
					}
				}
				feedback {
					id
					rating
				}
			}
		}
	`
}