import * as React from 'react'
import { useState } from 'react'
import { Button } from '../../../button/button'
//import { Input } from '../../../forms/inputs/input/input'

import { IoIosChatbubbles } from 'react-icons/io';
import { Anchor } from '@/components/common/links/anchor/anchor';

export const UserProfile = ({ user, isCurrentUser }: UserProfileProps) => {
	const [showModal] = useState(false)
	const [formData, setFormData] = React.useState({
		firstname: user.firstname,
		lastName: user.lastName,
		email: user.email,
	})

	const [isEditMode, setEditMode] = useState(false)
	// const [showProfile, setShowProfile] = useState(false)

	// const [showPlanOfStudy, setShowPlanOfStudy] = useState(false)

	return (
		<div>
			<h1 className='text-royalblue ml-6 mb-5 '>{user.firstname} {user.lastName}</h1>
			<div className="flex flex-col md:flex-row  mt-3">
				<aside className="flex-none flex-col mr-8 mx-6">
					<div className="relative h-48 w-48 mb-5 rounded-full overflow-clip mx-auto group">
						<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
							<span className="cursor-pointer">Edit</span>
						</div>
						<img src={user.image} alt="..." />
						<div className="absolute bg-gray-100 opacity-10 group-hover:opacity-70 inset-0"></div>
					</div>

					<div className='flex justify-center'>
					<Button
					onClick={() => setEditMode(!isEditMode)}
					size="large"
					>
					<p>{isEditMode ? 'Save Changes' : 'Edit Profile'}</p>
					</Button>

					</div>
					{/* <nav className="flex flex-col  border border-gray-200 shadow-sm rounded-md">
						<button>
							<li className=" py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
								Profile Details{' '}
							</li>
						</button>

						<a className=" text-base" href="#user">
							<li
								className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none"
								// onClick={() => {
								// 	setShowProfile(!showProfile),
								// 		setShowPlanOfStudy(showPlanOfStudy)
								// }}
							>
								User information
							</li>
						</a>
						<a className="text-base" href="#modules">
							<li
								className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none"
								// onClick={() => {
								// 	setShowPlanOfStudy(!showPlanOfStudy),
								// 		setShowProfile(showProfile)
								// }}
							>
								Plan of Study
							</li>
						</a>
					</nav> */}
				</aside>
				

				<div className='mx-10'>
					<div className='contantDetails mb-10'>
					<h5 className="m-0">Contact Information:</h5>
					{!isEditMode ? (
						<>
						<p className='email m-0'>{user.email}</p>
						<p className='phone m-0'>123-4567-890</p>
						</>
					) :
					(
						<div className="flex flex-row items-center">
						<p className=" w-1/2 m-3">See <Anchor path={'/toSettings'}>Settings</Anchor> to change your preferred contact information.Check the contact methods you’d prefer to be visible to others on your profile.</p>
						<span className="flex-none"><IoIosChatbubbles size={50}/></span>
						</div>
					)}
					</div>

					<div className="bio mb-10">
						<h5>Biography</h5>
						{!isEditMode ? (
							<div>
								<p className='m-0'>Joel DeSante is a senior at Old Dominion University, studying Game Design ... </p>
							</div>
						):
						(
							<textarea
							className="
							form-control 
							block 
							w-full
							rounded
							text-base
							font-normal
							text-gray-700
							bg-white bg-clip-padding
							border border-solid border-gray-300
							transition
							ease-in-out
							m-0
							focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							placeholder="Write something about yourself..."
							></textarea>
						)}
					</div>
				
				
				{/* <div className="grow flex flex-col">
					<div id="user" className="w-full my-10">
						<h3 className="text-2xl bold border-b border-gray-200 mb-3">
							Profile
						</h3>

						<form>
							<div className="flex md:flex-row md:justify-between flex-col mb-3">
								<Input
									label="First Name"
									name="firstName"
									type="text"
									onChange={(s) => {
										setFormData({
											...formData,
											firstname: s,
										})
									}}
									defaultValue={user.firstname}
									disabled={!isCurrentUser}
									options={[]}
								/>

								<Input
									label="Last Name"
									name="lastName"
									type="text"
									onChange={(s) => {
										setFormData({
											...formData,
											lastName: s,
										})
									}}
									defaultValue={user.lastName}
									disabled={!isCurrentUser}
									options={[]}
								/>
							</div>
							<div className="w-full mb-3">
								<Input
									label="Email Id"
									name="email"
									type="text"
									onChange={(s) => {
										setFormData({ ...formData, email: s })
									}}
									defaultValue={user.email}
									disabled={!isCurrentUser}
									options={[]}
								/>
							</div>

							<Button type="submit" disabled={!isCurrentUser}>
								Update Profile
							</Button>

							<div
								className={`relative z-10 ${
									showModal ? 'visible' : 'invisible'
								}`}
								aria-labelledby="modal-title"
								role="dialog"
								aria-modal="true"
							>
								<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
							</div>
						</form>

						<button
							className="text-white border-red-400 bg-red-500 rounded w-auto px-4 py-2"
							// onClick={() => deleteUser()}
						>
							Kill account
						</button>
					</div>

					<hr className="grow bg-gray-500 h-0.5 "></hr>
					*/}

					<div id="modules" className="w-full my-10">
						<h3 className="text-2xl bold border-b border-gray-200 mb-3">
							Plan of study
						</h3>
						<table className="border-separate border-spacing-2 border border-slate-400 ...">
							<thead>
								<tr>
									<th className="p-2 border border-slate-300 ...">
										Status
									</th>
									<th className="p-2 border border-slate-300 ...">
										Term
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[0].status}
									</td>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[0].term}
									</td>
								</tr>
								<tr>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[1].status}
									</td>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[1].term}
									</td>
								</tr>
								<tr>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[2].status}
									</td>
									<td className="p-2 border border-slate-300 ...">
										{user.planOfStudy[2].term}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div> 
			</div>
		</div>
		
	)
}

type UserProfileProps = {
	user: UserAccountProps
	isCurrentUser: boolean
}
type UserAccountProps = {
	lastName: string
	firstname: string
	email: string
	image: string
	planOfStudy: planOfStudyProps
}
type planOfStudyProps = {
	status: string
	term: string
}[]
