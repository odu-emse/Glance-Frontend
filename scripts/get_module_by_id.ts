import { gql } from 'graphql-request'

export const getModuleByID = gql`
	query ModuleHomePage($moduleID: ID!, $planID: ID!) {
		module(input: { id: $moduleID }) {
			moduleNumber
			moduleName
			id
			members {
				role
				plan {
					student {
						firstName
						lastName
					}
				}
			}
			description
			parentModules {
				id
				moduleName
				moduleNumber
			}
			objectives
			collections {
				id
				name
				lessons {
					id
					name
					content {
						id
						type
						link
					}
				}
			}
		}
		lessonsByModuleEnrollment(planID: $planID, moduleID: $moduleID) {
			id
			name
			position
			lessonProgress {
				status
				completed
				updatedAt
				enrollment {
					id
				}
			}
		}
	}
`
