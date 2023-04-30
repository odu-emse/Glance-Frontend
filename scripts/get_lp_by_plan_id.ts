import { gql } from 'graphql-request'

export default function getLPbyPlanID(
	planID: string,
	pathID: string | null = null
) {
	let query

	if (pathID) {
		query = gql`
			query GetLPbyPathID($planID: ID!, $pathID: ID) {
				learningPath(planID: $planID, pathID: $pathID) {
					id
					paths {
						id
						createdAt
						status
						learningOutcomes
						hoursSatisfies
						course {
							id
							name
							prefix
							number
							carnegieHours
							required
							sections {
								id
								name
								keywords
								objectives
								description
								duration
								parentSections{
									id
									sectionName
								}
								subSections{
									id
									sectionName
								}
								collections {
									id
									name
									modules {
										id
										name
										number
										description
										objectives
									}
								}
							}
						}
					}
				}
				module(input: {}) {
					id
					name
					number
					description
					objectives
				}
				collection(input: {}) {
					id
					name
				}
				course(input: {}) {
					id
					name
				}
				section(input: {}) {
					id
					sectionName
				}
			}
		`
	} else {
		query = gql`
			query GetLPs($planID: ID!, $pathID: ID) {
				learningPath(planID: $planID, pathID: $pathID) {
					id
					paths {
						id
						createdAt
						status
						learningOutcomes
						hoursSatisfies
						course {
							id
							name
							carnegieHours
							required
							sections {
								id
								name
								collections {
									id
									name
									modules {
										id
										name
										number
										description
										objectives
									}
								}
							}
						}
					}
				}
			}
		`
	}
	return {
		query,
		variables: { planID, pathID },
	}
}

export const getLearningPathForResumption = gql`
	query LearningPath($planID: ID!) {
		learningPath(planID: $planID) {
			paths {
				id
				status
				course {
					id
					name
					sections {
						id
						name
						collections {
							id
							name
							modules {
								id
								name
								moduleProgress {
									status
									completed
									enrollment {
										id
										role
									}
								}
								objectives
								hours
							}
						}
					}
				}
			}
		}
	}
`

export const getListOfModulesForLearningPath = gql`
	query ModulesByLearningPath($planID: ID!) {
		modulesFromLearningPath(planID: $planID) {
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
			collections {
				id
				name
				section {
					id
					sectionName
					sectionNumber
				}
				modules {
					id
					name
					number
					prefix
				}
			}
		}
	}
`
