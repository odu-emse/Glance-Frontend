import React, { useContext } from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import GlobalUserContext from '@/contexts/global_user_context'
import { User } from '@/types/index'
import { UserProfile } from '@/pages/user/user_profile/user_profile';
import Loader from '@/components/util/loader';

const UserProfilePage = () => {
	const router = useRouter()
	const { data: sessionUser } = useSession()
	const { user: account } = useContext(GlobalUserContext)

	const { user: userID } = router.query

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
		}
	) => {
		mutateSocial(async () => {
			await client.request(
				gql`
					mutation UpdateSocial(
						$accountID: ID!
						$socialInput: SocialInput!
						$userInput: UpdateUser!
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
					}
				`,
				{
					accountID,
					socialInput,
					userInput,
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
                }
            }
				`,
			  }
			: null,
		gqlFetcher
	)

	if(error){
		return (
			<div className="flex flex-col gap-2 justify-center items-center stdcontainer h-screen">
				<h1 className="text-2xl font-bold">Error</h1>
				<h3 className="text-lg font-semibold">Could not retrieve user information!</h3>
			</div>
		)
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	return <UserProfile
		sessionUser={sessionUser}
		user={data.user[0] as User}
		contextAccount={account}
		updateSocial={updateSocial}
		userOpenID={userID as string}
		verifyEdit={verifyEdit}
	/>
}

UserProfilePage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default UserProfilePage
