import { gql } from 'graphql-request'

export const getModuleByID = gql`
	query InternalModuleHomePage($moduleID: ID!) {
		module(input: { id: $moduleID }) {
			id
			name
			number
			prefix
			objectives
			hours
			description
			instructor {
				id
				title
				account {
					id
					openID
					email
					firstName
					lastName
				}
			}
			moduleProgress {
				id
				status
				completed
				enrollment {
					id
				}
			}
			collections {
				id
				name
				modules {
					id
					name
					number
					prefix
				}
				section {
					id
				}
			}
		}
	}
`

export const getModuleByIDForFlow = gql`
	query ModuleFlow($planID: ID!, $moduleID: ID!) {
		moduleFlowFromLearningPath(planID: $planID, moduleID: $moduleID) {
			nextModule {
				id
				name
			}
			previousModule {
				id
				name
			}
			currentModule {
				id
				name
				number
				prefix
				content {
					id
					type
					link
					primary
				}
				objectives
				hours
				instructor {
					title
					account {
						openID
						firstName
						lastName
						email
					}
				}
			}
			currentCollection {
				id
				name
				modules {
					id
					name
				}
			}
			nextCollection {
				id
				name
				modules {
					id
					name
				}
			}
			currentSection {
				id
				sectionName
			}
		}
	}
`
