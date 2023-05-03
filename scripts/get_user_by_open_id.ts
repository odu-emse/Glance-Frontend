import { gql } from 'graphql-request'

export const getUserByOpenID = (openID) => {
	return gql`
    {
      user(input: { openID: "${openID}" }) {
        id
        plan{
          id
          sections{
            enrolledAt
            role
            section{
              id
              sectionName
              sectionNumber
              intro
              createdAt
              description
              duration
              keywords
              numSlides
              feedback {
                id
                rating
              }
              parentSections {
                id
                sectionName
              }
              members {
                id
                role
              }
            }
          }
        }
      }
    }
  `
}
