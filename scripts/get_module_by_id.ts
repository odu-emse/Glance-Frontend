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
			collection {
				id
				name
				position
				section {
					id
					sectionName
				}
			}
			moduleProgress {
				status
				completed
				updatedAt
				enrollment {
					id
				}
			}
		}
	}
`
