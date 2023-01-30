import { gql } from 'graphql-request'

export const getUserByOpenID = (openID) => {
	return gql`
			{
				user(id: "${openID}") {
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
								parentCourses {
									id
									course {
										name
									}
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
