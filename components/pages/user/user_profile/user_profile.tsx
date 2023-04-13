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
}: UserProfileProps) => {
	const [updatedProfile, setUpdatedProfile] = useState<User | null>(null)

	const [isEditMode, setEditMode] = useState(false)

	return (
		<div className="m-11">
			<h1 className="ml-6 mb-5">
				{user.firstName} {user.lastName}
			</h1>
			<div className="flex flex-col md:flex-row mt-3">
				<AccountSidebar
					verifyEdit={verifyEdit}
					isEditMode={isEditMode}
					sessionUser={sessionUser}
					setEditMode={setEditMode}
					setUpdatedProfile={setUpdatedProfile}
					updateSocial={updateSocial}
					userOpenID={userOpenID}
					contextAccount={contextAccount}
					updatedProfile={updatedProfile}
				/>
				{!isInstructor ? (
					<StudentContent
						user={user}
						setUpdatedProfile={setUpdatedProfile}
						isEditMode={isEditMode}
					/>
				) : (
					<InstructorContent
						user={user}
						isEditMode={isEditMode}
						setUpdatedProfile={setUpdatedProfile}
						instructorDetails={instructorDetails}
					/>
				)}
			</div>
		</div>
	)
}

export type UserProfileProps = {
	user: User
	sessionUser: Session
	verifyEdit: (userToEdit: string) => boolean
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
	userOpenID: string
	contextAccount:
		| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {
				id: string
		  })
		| null
	isInstructor: boolean
	instructorDetails: InstructorProfile
}
