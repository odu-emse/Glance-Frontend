import * as React from 'react'
import { useState } from 'react'
import { Button } from '@/common/button/button'
import Link from 'next/link'
import { Input } from '@/common/forms/inputs/input/input'
import { TextArea } from '@/common/forms/inputs/text_area/text_area'
import { User } from '@/types/index'
import { Session } from 'next-auth'
import { UserAccount } from '@/common/community/threads/thread/thread'

export const UserProfile = ({
	user,
	sessionUser,
	verifyEdit,
	updateSocial,
	userOpenID,
	contextAccount,
}: UserProfileProps) => {
	const [updatedProfile, setUpdatedProfile] = useState<User | null>(null)

	const [isEditMode, setEditMode] = useState(false)

	return (
		<div className="m-11">
			<h1 className="ml-6 mb-5">
				{user.firstName} {user.lastName}
			</h1>
			<div className="flex flex-col md:flex-row mt-3">
				<aside className="flex-none flex-col mr-8 mx-6">
					<div className="relative h-48 w-48 mb-5 rounded-full overflow-clip mx-auto group">
						<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
							<span className="cursor-pointer">Edit</span>
						</div>
						<img
							className="w-full"
							src={sessionUser.user.image}
							alt="The profile picture of the current user"
							referrerPolicy="no-referrer"
						/>
						<div className="absolute bg-gray-100 opacity-10 group-hover:opacity-70 inset-0"></div>
					</div>

					<div className="flex justify-center mb-5">
						{verifyEdit(sessionUser.openId) ? (
							!isEditMode ? (
								<Button
									onClick={() => setEditMode(!isEditMode)}
									size="large"
									className="w-full"
								>
									Edit Profile
								</Button>
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
													biography:
														updatedProfile.biography,
												}
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
											setUpdatedProfile(null)
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
						{!isEditMode ? (
							<>
								<Link
									href={`/users/${userOpenID}/settings#plan`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Plan of study
										</h4>
									</a>
								</Link>
								<Link
									href={`/users/${userOpenID}/settings#watched`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Watched Threads
										</h4>
									</a>
								</Link>
								<Link
									href={`/users/${userOpenID}/settings#feedback`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Module Reviews
										</h4>
									</a>
								</Link>
								<Link
									href={`/users/${userOpenID}/settings#connection`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Connections
										</h4>
									</a>
								</Link>
							</>
						) : (
							<>
								<Link
									href={`/users/${userOpenID}/settings#privacy`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Privacy Settings
										</h4>
									</a>
								</Link>
								<Link
									href={`/users/${userOpenID}/settings#connection`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Connection Settings
										</h4>
									</a>
								</Link>
								<Link
									href={`/users/${userOpenID}/settings#notification`}
								>
									<a>
										<h4 className="uppercase my-2 font-bold text-royalblue underline cursor-pointer">
											Notification Settings
										</h4>
									</a>
								</Link>
							</>
						)}
					</div>
				</aside>
				<div className="mx-10">
					<div className="mb-3">
						<h4 className="m-0 uppercase font-bold">
							Contact Information:
						</h4>
						{!isEditMode ? (
							<>
								<h4 className="uppercase my-1">{user.email}</h4>
								<h4 className="my-1">{user?.phoneNumber}</h4>
							</>
						) : (
							<div className="flex flex-row items-center">
								<p className=" w-1/2 m-3">
									See <Link href={'/settings'}>Settings</Link>{' '}
									to change your preferred contact
									information.Check the contact methods you’d
									prefer to be visible to others on your
									profile.
								</p>
								<span className="flex-none m-5">
									<svg
										width="65"
										height="48"
										viewBox="0 0 65 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M27.7704 19.8607C26.6812 22.4232 26.1283 25.1435 26.1283 27.9462C26.1283 30.749 26.6812 33.4692 27.7704 36.0317C28.8227 38.5052 30.3278 40.7261 32.245 42.6328C32.5424 42.9286 32.8478 43.2147 33.1604 43.4909C30.1047 44.9813 26.668 45.8178 23.0345 45.8178C20.3895 45.8178 17.8438 45.3733 15.4726 44.5545L2.75887 47.926C1.79998 48.1807 0.789095 47.7631 0.293525 46.9076C-0.197438 46.0613 -0.061864 44.995 0.621931 44.2966C0.625221 44.2927 0.631803 44.2848 0.642333 44.2731C0.672607 44.239 0.730522 44.1709 0.810813 44.0662C0.971397 43.8574 1.22083 43.5033 1.5104 42.9856C2.08627 41.954 2.82995 40.2575 3.33342 37.7538C3.51506 36.8499 3.62957 36.0547 3.6967 35.3608C1.35838 31.7753 0 27.4972 0 22.9089C0 10.2566 10.3129 0 23.0345 0C30.1054 0 36.432 3.16863 40.6572 8.15556C40.0576 8.34603 39.466 8.564 38.8822 8.80945C36.3951 9.85606 34.1621 11.353 32.245 13.2597C30.3278 15.1663 28.8227 17.3872 27.7704 19.8607Z"
											fill="black"
										/>
										<path
											fillRule="evenodd"
											clip-rule="evenodd"
											d="M64.5143 44.6474C65.048 45.1927 65.154 46.0259 64.771 46.687C64.7512 46.7204 64.7308 46.7531 64.7098 46.7852C64.688 46.8166 64.6657 46.848 64.6426 46.8775C64.6189 46.9076 64.5952 46.937 64.5696 46.9652C64.5571 46.9789 64.5446 46.9927 64.5314 47.0064C64.5189 47.0201 64.5058 47.0339 64.4919 47.047C64.1721 47.3618 63.7384 47.5399 63.2869 47.5399C63.1401 47.5399 62.9921 47.5209 62.8453 47.4823L52.9168 44.849C51.0655 45.4885 49.0779 45.8361 47.0121 45.8361C42.7862 45.8361 38.9006 44.3869 35.8305 41.9606C31.6836 38.6833 29.0241 33.6237 29.0241 27.9462C29.0241 19.6218 34.7406 12.6254 42.4828 10.6284C43.93 10.2547 45.4477 10.0563 47.0121 10.0563C56.9465 10.0563 65 18.0659 65 27.9462C65 31.5292 63.9391 34.8699 62.1128 37.6701C62.1654 38.2114 62.2549 38.8325 62.3971 39.5381C62.79 41.4939 63.3705 42.818 63.8206 43.6244C64.0464 44.0283 64.2412 44.3051 64.3662 44.4681C64.4294 44.5499 64.4748 44.6029 64.4985 44.6298C64.5064 44.6383 64.5117 44.6448 64.5143 44.6474Z"
											fill="black"
										/>
									</svg>
								</span>
							</div>
						)}
					</div>

					<div className="SocialMedia mb-3">
						<h4 className="my-1 uppercase font-bold">Socials:</h4>
						{!isEditMode ? (
							<>
								<h4 className="my-1 font-medium">
									Github: {user.social?.github}
								</h4>
								<h4 className="my-1 font-medium">
									Twitter: {user.social?.twitter}
								</h4>
								<h4 className="my-1 font-medium">
									LinkedIn: {user.social?.linkedin}
								</h4>
								<h4 className="my-1 font-medium">
									Facebook: {user.social?.facebook}
								</h4>
								<h4 className="my-1 font-medium">
									Portfolio: {user.social?.portfolio}
								</h4>
							</>
						) : (
							<div className="flex flex-col gap-2 mt-2">
								<Input
									type="url"
									placeholder="GITHUB:"
									defaultValue={user.social?.github}
									label={'GITHUB:'}
									name={'github'}
									onChange={(e: string) => {
										setUpdatedProfile((prevState) => ({
											...prevState,
											social: {
												...prevState?.social,
												github: e,
											},
										}))
									}}
									className="border-royalblue focus:border-royalblue border px-1 my-1 bg-white"
								/>
								<Input
									type="text"
									placeholder="TWITTER:"
									defaultValue={user.social?.twitter}
									label="TWITTER:"
									name={'twitter'}
									onChange={(e: string) => {
										setUpdatedProfile((prevState) => ({
											...prevState,
											social: {
												...prevState?.social,
												twitter: e,
											},
										}))
									}}
									className="border-royalblue focus:border-royalblue border px-1 my-1 bg-white"
								/>
								<Input
									type="url"
									placeholder="LINKEDIN:"
									defaultValue={user.social?.linkedin}
									label="LINKEDIN:"
									name={'linkedin'}
									onChange={(e: string) => {
										setUpdatedProfile((prevState) => ({
											...prevState,
											social: {
												...prevState?.social,
												linkedin: e,
											},
										}))
									}}
									className="border-royalblue focus:border-royalblue border px-1 my-1 bg-white"
								/>
								<Input
									type="text"
									placeholder="FACEBOOK:"
									defaultValue={user.social?.facebook}
									label="FACEBOOK:"
									name={'facebook'}
									onChange={(e: string) => {
										setUpdatedProfile((prevState) => ({
											...prevState,
											social: {
												...prevState?.social,
												facebook: e,
											},
										}))
									}}
									className="border-royalblue focus:border-royalblue border px-1 my-1 bg-white"
								/>
								<Input
									type="url"
									placeholder="PORTFOLIO:"
									defaultValue={user.social?.portfolio}
									label="PORTFOLIO:"
									name={'portfolio'}
									onChange={(e: string) => {
										setUpdatedProfile((prevState) => ({
											...prevState,
											social: {
												...prevState?.social,
												portfolio: e,
											},
										}))
									}}
									className="border-royalblue focus:border-royalblue border px-1 my-1 bg-white"
								/>
							</div>
						)}
					</div>

					<div className="mb-3">
						<h4 className="font-bold uppercase my-1">Biography</h4>
						{!isEditMode ? (
							<div>
								<h4 className="m-0 font-medium">
									{user.biography && user.biography}
								</h4>
							</div>
						) : (
							<TextArea
								defaultValue={user.biography}
								handle={(evt) => {
									setUpdatedProfile((prevState) => ({
										...prevState,
										biography: evt.target.value,
									}))
								}}
								name={'biography'}
								placeholder="Write something about yourself..."
								rows={5}
								className="border-royalblue focus:border-royalblue rounded-none font-normal"
							/>
						)}
					</div>
				</div>
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
}
