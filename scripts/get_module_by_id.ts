import { gql } from 'graphql-request'

export const getSectionByIDUnenrolled = gql`
	query UnEnrolledSectionHomePage($sectionID: ID!) {
		section(input: { id: $sectionID }) {
			sectionNumber
			sectionName
			id
			members {
				role
				plan {
					student {
						firstName
						lastName
					}
				}
			}
			description
			parentSections {
				id
				sectionName
				sectionNumber
			}
			objectives
			collections {
				id
				name
				modules {
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

export const getSectionByIDEnrolled = gql`
	query SectionHomePageLessonProgress($sectionID: ID!, $planID: ID!) {
		modulesBySectionEnrollment(planID: $planID, sectionID: $sectionID) {
			id
			name
			position
			__typename
			collections {
				__typename
				id
				name
				position
				section {
					__typename
					id
					sectionName
				}
			}
			moduleProgress {
				__typename
				id
				status
				completed
				updatedAt
				enrollment {
					__typename
					id
				}
			}
		}
	}
`
