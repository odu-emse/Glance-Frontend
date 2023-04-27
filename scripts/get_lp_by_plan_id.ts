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
										moduleName
										moduleNumber
										description
										intro
										keywords
										objectives
										parentModules {
											id
											moduleName
											moduleNumber
										}
										subModules {
											id
											moduleName
											moduleNumber
										}
									}
								}
							}
						}
					}
				}
				module(input: {}) {
					id
					moduleName
					moduleNumber
					description
					intro
					keywords
					objectives
					parentModules {
						id
						moduleName
						moduleNumber
					}
					subModules {
						id
						moduleName
						moduleNumber
					}
				}
				collection(input: {}) {
					id
					name
				}
				lesson(input: {}) {
					id
					name
				}
				course(input: {}) {
					id
					name
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
										moduleName
										moduleNumber
										description
										intro
										keywords
										objectives
										parentModules {
											id
											moduleName
											moduleNumber
										}
										subModules {
											id
											moduleName
											moduleNumber
										}
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
