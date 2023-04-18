import React, { useContext, useState } from 'react';
import { Layout } from '@/common/pages/layouts/layout/layout'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import GlobalUserContext from '@/contexts/global_user_context'
import { InstructorProfile, User } from '@/types/index'
import { UserProfile } from '@/pages/user/user_profile/user_profile'
import Loader from '@/components/util/loader'
import RequestFailed from '@/pages/errors/request_failed/request_failed'

const UserProfilePage = () => {
	const router = useRouter()
	const { user: userID, instructor: isInstructor } = router.query
	const { data: sessionUser } = useSession()
	const { user: account } = useContext(GlobalUserContext)
	const [instructorMode, setInstructorMode] = useState(
		isInstructor === 'true'
	)

	const verifyEdit = (userToEdit: string): boolean => {
		return userID === userToEdit
	}

	const { mutate: mutateSocial } = useSWR({}, gqlFetcher)

	const updateSocial = (
		openID: string,
		accountID: string,
		socialInput: {
			github?: string | null
			linkedin?: string | null
			portfolio?: string | null
			facebook?: string | null
			twitter?: string | null
		},
		userInput: {
			id: string
			openID: string
			biography?: string | null
			phoneNumber?: string | null
		},
		instructorInput?: InstructorProfile
	) => {
		// we need to remove this field since the API knows users aren't allowed to edit this field,
		// but we need to track it in the state
		delete instructorInput.id
		mutateSocial(async () => {
			await client.request(
				gql`
					mutation UpdateUserProfile(
						$accountID: ID!
						$socialInput: SocialInput!
						$userInput: UpdateUser!
						$instructorInput: InstructorProfileInput!
					) {
						updateUserSocial(
							userId: $accountID
							input: $socialInput
						) {
							id
							github
							linkedin
							portfolio
							facebook
							twitter
						}
						updateUser(input: $userInput) {
							id
							biography
						}
						updateInstructorProfile(
							id: $accountID
							input: $instructorInput
						) {
							title
							officeHours
							officeLocation
							contactPolicy
							phone
							background
							researchInterest
							selectedPapersAndPublications
						}
					}
				`,
				{
					accountID,
					socialInput,
					userInput,
					instructorInput,
				}
			)
		}).catch((err) => {
			console.log(err)
		})
	}

	const { data, error } = useSWR(
		userID
			? {
					query: gql`
            {
                user(input: { openID: "${userID}" }) {
                    id
                    openID
                    picURL
                    firstName
                    lastName
                    dob
                    biography
                    phoneNumber
                    email
                    social {
                        github
                        linkedin
                        portfolio
                        facebook
                        twitter
                    }
										instructorProfile {
											id
											title
											background
											contactPolicy
											officeHours
											officeLocation
											researchInterest
											selectedPapersAndPublications
                    }
                }
            }
				`,
			  }
			: null,
		gqlFetcher
	)

	if (error) {
		return (
			<RequestFailed
				title="Error"
				subtitle="Could not retrieve user information!"
			/>
		)
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	return (
		<UserProfile
			sessionUser={sessionUser}
			user={data.user[0] as User}
			contextAccount={account}
			updateSocial={updateSocial}
			userOpenID={userID as string}
			verifyEdit={verifyEdit}
			isInstructor={instructorMode}
			instructorDetails={
				data.user[0]?.instructorProfile as InstructorProfile
			}
			setInstructorMode={setInstructorMode}
			instructorMode={instructorMode}
		/>
	)
}

UserProfilePage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default UserProfilePage
