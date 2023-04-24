import { gql } from 'graphql-request'

export default function getLPbyPlanID(planID: string, pathID: string | null = null) {
    let query

    if (pathID) {
        query = gql`
            query GetLPbyPathID($planID: ID!, $pathID: ID) {
                learningPath(planID: $planID, pathID: $pathID) {
                    id
                    paths{
                        id
                        createdAt
                        status
                        learningOutcomes
                        hoursSatisfies
                        course{
                            id
                            name
                            carnegieHours
                            required
                            sections{
                                id
                                name
                                collections{
                                    id
                                    name
                                    modules{
                                        id
                                        moduleName
                                        moduleNumber
                                        description
                                        intro
                                        keywords
                                        objectives
                                        parentModules{
                                            id
                                            moduleName
                                            moduleNumber
                                        }
                                        subModules{
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
    else {
        query = gql`
            query GetLPs($planID: ID!, $pathID: ID) {
                learningPath(planID: $planID, pathID: $pathID) {
                    id
                    paths{
                        id
                        createdAt
                        status
                        learningOutcomes
                        hoursSatisfies
                        course{
                            id
                            name
                            carnegieHours
                            required
                            sections{
                                id
                                name
                                collections{
                                    id
                                    name
                                    modules{
                                        id
                                        moduleName
                                        moduleNumber
                                        description
                                        intro
                                        keywords
                                        objectives
                                        parentModules{
                                            id
                                            moduleName
                                            moduleNumber
                                        }
                                        subModules{
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
      variables: { planID, pathID }
  }
}
