import { gql } from 'graphql-request'

export const getUserByOpenID = (openID) => {
	return gql`
			{
				user(
					input: { openID: "${openID}" }
				) {
				id
				plan{
					id
					modules{
					enrolledAt
					role
					module{
						id
						moduleName
						moduleNumber
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
						parentModules {
						id
						moduleName
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
