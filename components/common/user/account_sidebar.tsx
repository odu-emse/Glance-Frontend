import React from 'react'
import { Button } from '@/common/button/button'
import Link from 'next/link'
import { Session } from 'next-auth'
import { UserAccount } from '@/common/community/threads/thread/thread'
import { InstructorProfile, User } from '@/types/index'

interface AccountSidebarProps {
	verifyEdit: (openID: string) => boolean
	isEditMode: boolean
	sessionUser: Session
	setEditMode: (isEditMode: boolean) => void
	setUpdatedProfile: React.Dispatch<React.SetStateAction<User>>
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
		},
		instructorInput?: InstructorProfile
	) => void
	userOpenID: string
	contextAccount:
		| (Omit<UserAccount & { openID: string; biography?: string }, 'id'> & {
				id: string
		  })
		| null
	updatedProfile: User
	setInstructorMode: React.Dispatch<React.SetStateAction<boolean>>
	instructorMode: boolean
	isInstructor: true | false
	defaultUserData: User
	instructorDetails: InstructorProfile
}

function AccountSidebar({
	verifyEdit,
	isEditMode,
	sessionUser,
	setEditMode,
	setUpdatedProfile,
	updateSocial,
	userOpenID,
	contextAccount,
	updatedProfile,
	setInstructorMode,
	instructorMode,
	isInstructor,
	defaultUserData,
	instructorDetails,
}: AccountSidebarProps) {
	return (
		<aside className="flex-none flex-col md:mr-8 md:mx-6 mx-0">
			<div className="relative h-48 w-48 mb-5 rounded-full overflow-clip mx-auto group">
				<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
					<span className="cursor-pointer">Edit</span>
				</div>
				<img
					className="w-full"
					src={
						verifyEdit(sessionUser.openId)
							? sessionUser.user.image
							: updatedProfile.picURL
					}
					alt="The profile picture of the current user"
					referrerPolicy="no-referrer"
				/>
				<div className="absolute bg-gray-100 opacity-10 group-hover:opacity-70 inset-0"></div>
			</div>

			<div className="flex justify-center mb-5">
				{verifyEdit(sessionUser.openId) ? (
					!isEditMode ? (
						<div className="flex flex-col gap-1 w-full">
							<Button
								onClick={() => setEditMode(!isEditMode)}
								size="large"
								className="w-full"
							>
								{!instructorMode
									? 'Edit Profile'
									: 'Edit Instructor Profile'}
							</Button>
							{isInstructor && (
								<Button
									onClick={() => {
										setInstructorMode(!instructorMode)
									}}
									size="large"
									className="w-full"
									variant="secondary"
								>
									{!instructorMode
										? 'View Instructor Profile'
										: 'View Student Profile'}
								</Button>
							)}
						</div>
					) : (
						<div className="flex flex-col gap-1 w-full">
							<Button
								onClick={() => {
									console.log('Saving changes')
									updateSocial(
										userOpenID as string,
										contextAccount.id,
										updatedProfile.social || {},
										{
											id: contextAccount.id,
											openID: userOpenID as string,
											biography: updatedProfile.biography,
										},
										instructorDetails
									)
									setEditMode(!isEditMode)
								}}
								size="large"
								className="w-full"
							>
								Save Changes
							</Button>
							<Button
								onClick={() => {
									setEditMode(!isEditMode)
									setUpdatedProfile(defaultUserData)
								}}
								size="large"
								className="w-full"
								variant="secondary"
							>
								Discard Changes
							</Button>
						</div>
					)
				) : (
					<Button size="large" className="w-full">
						Message
					</Button>
				)}
			</div>

			<div className="flex flex-col items-start justify-center">
				{!instructorMode ? (
					<>
						<Link href={`/users/${userOpenID}/settings#plan`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Plan of study
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/settings#watched`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Watched Threads
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/settings#feedback`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Module Reviews
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/settings#connection`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Connections
								</h4>
							</a>
						</Link>
					</>
				) : (
					<>
						<Link href={`/users/${userOpenID}/settings#instructed`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									My Modules
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/settings#watched`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Watched Threads
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Publications
								</h4>
							</a>
						</Link>
						<Link href={`/users/${userOpenID}/settings#connection`}>
							<a>
								<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
									Connections
								</h4>
							</a>
						</Link>
					</>
				)}
			</div>
		</aside>
	)
}

export default AccountSidebar
