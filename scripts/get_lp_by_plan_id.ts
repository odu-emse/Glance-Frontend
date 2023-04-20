import { gql } from 'graphql-request'

export default function getLPbyPlanID(planID) {
	return gql`
      query GetLPs {
          learningPath(planID: "${planID}") {
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
