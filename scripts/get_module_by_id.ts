import { gql } from 'graphql-request'

export const getModuleByIDUnenrolled = gql`
	query UnEnrolledModuleHomePage($moduleID: ID!) {
		module(input: { id: $moduleID }) {
			moduleNumber
			moduleName
			id
			members {
				role
				plan {
					student {
						openID
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
	}
`

export const getModuleByIDEnrolled = gql`
	query ModuleHomePageLessonProgress($moduleID: ID!, $planID: ID!) {
		lessonsByModuleEnrollment(planID: $planID, moduleID: $moduleID) {
			id
			name
			position
			collection {
				id
				name
				position
				module {
					id
					moduleName
				}
			}
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
