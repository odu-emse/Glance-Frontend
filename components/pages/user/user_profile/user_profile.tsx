import * as React from 'react'
import { useState } from 'react'
import { InstructorProfile, User } from '@/types/index'
import { Session } from 'next-auth'
import { UserAccount } from '@/common/community/threads/thread/thread'
import AccountSidebar from '@/common/user/account_sidebar'
import StudentContent from '@/common/user/student_content'
import InstructorContent from '@/common/user/instructor_content'

export const UserProfile = ({
	user,
	sessionUser,
	verifyEdit,
	updateSocial,
	userOpenID,
	contextAccount,
	isInstructor,
	instructorDetails,
	setInstructorMode,
	instructorMode,
}: UserProfileProps) => {
	const [updatedProfile, setUpdatedProfile] = useState<
		| (User & {
				instructorProfile?: InstructorProfile
		  })
		| null
	>(user)
	const [updatedInstructorProfile, setUpdatedInstructorProfile] =
		useState<InstructorProfile | null>(instructorDetails)
	const [isEditMode, setEditMode] = useState(false)

	return (
		<div className="m-11">
			<h1 className="md:ml-6 ml-0 mb-5">
				{updatedProfile?.firstName} {updatedProfile?.lastName}
			</h1>
			<div className="flex flex-col md:flex-row mt-3">
				<AccountSidebar
					defaultUserData={user}
					verifyEdit={verifyEdit}
					sessionUser={sessionUser}
					updateSocial={updateSocial}
					userOpenID={userOpenID}
					contextAccount={contextAccount}
					isEditMode={isEditMode}
					setEditMode={setEditMode}
					updatedProfile={updatedProfile}
					setUpdatedProfile={setUpdatedProfile}
					instructorMode={instructorMode}
					setInstructorMode={setInstructorMode}
					instructorDetails={updatedInstructorProfile}
					isInstructor={!!instructorDetails}
				/>
				{!isInstructor ? (
					<StudentContent
						user={updatedProfile}
						setUpdatedProfile={setUpdatedProfile}
						isEditMode={isEditMode}
					/>
				) : (
					<InstructorContent
						user={updatedProfile}
						isEditMode={isEditMode}
						setUpdatedProfile={setUpdatedProfile}
						instructorDetails={updatedInstructorProfile}
						setUpdatedInstructorProfile={
							setUpdatedInstructorProfile
						}
						immutableInstructorDetails={instructorDetails}
					/>
				)}
			</div>
		</div>
	)
}

export type UserProfileProps = {
	/**
	 * The user account coming from the DB
	 */
	user: User
	/**
	 * The user account coming from the session
	 */
	sessionUser: Session
	/**
	 * Function to verify if the user is allowed to edit the profile
	 * @param userToEdit
	 * @returns boolean - true if the user is allowed to edit the profile
	 */
	verifyEdit: (userToEdit: string) => boolean
	/**
	 * Function to update the social media links, user biography, and phone number
	 * @param openID - the user's openID from the session
	 * @param accountID - the user's accountID from the DB
	 * @param socialInput - the social media links
	 * @param userInput - the user's biography and phone number
	 */
	updateSocial: (
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
	) => void
	/**
	 * The user's openID from the session
	 */
	userOpenID: string
	/**
	 * The user's account from context with the ID field required
	 */
	contextAccount:
		| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {
				id: string
		  })
		| null
	/**
	 * Boolean to determine if the user is an instructor
	 */
	isInstructor: boolean
	/**
	 * The instructor profile data from the DB
	 */
	instructorDetails: InstructorProfile
	/**
	 * Function to turn on and off instructor mode
	 */
	setInstructorMode: React.Dispatch<React.SetStateAction<boolean>>
	/**
	 * Boolean to determine if the user is in instructor mode or student mode
	 */
	instructorMode: boolean
}
