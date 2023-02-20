import { gql } from 'graphql-request'

export const getModuleByID = (courseID) => {
	return gql`{
		module (
			input:{
    			id: "${courseID}"
  			}
		) {
			id,
			members {
				role
				plan {
					student {
						firstName
						lastName
					}
				}
			}
			moduleName,
			parentModules {
				id
			}
			objectives,
			collections{
				id,
				name,
				lessons{
					id,
					name,
					content {
					id,
					type,
					link
					},
				}
			}
		}
	}`
}
