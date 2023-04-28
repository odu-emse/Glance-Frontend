import * as React from 'react'
import { useState } from 'react'
import { Button } from '../../../button/button'
import Link from 'next/link'
//import { Input } from '../../../forms/inputs/input/input'
//import Chat_Bubble from 'public/SVGs'

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
			<h1 className="font-microgramma text-royalblue ml-6 mb-5">
				{user.firstname} {user.lastName}
			</h1>
			<div className="flex flex-col md:flex-row mt-3">
				<aside className="flex-none flex-col mr-8 mx-6">
					<div className="relative h-48 w-48 mb-5 rounded-full overflow-clip mx-auto group">
						<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
							<span className="cursor-pointer">Edit</span>
						</div>
						<img src={user.image} alt="..." />
						<div className="absolute bg-gray-100 opacity-10 group-hover:opacity-70 inset-0"></div>
					</div>

					<div className="flex justify-center mb-5">
						<Button
							onClick={() => setEditMode(!isEditMode)}
							size="large"
						>
							<p>
								{isEditMode ? 'Save Changes' : 'Edit Profile'}
							</p>
						</Button>
					</div>

					<div className="flex flex-col items-start ml-8 justify-center">
						{!isEditMode ? (
							<>
								<Link
									href={''}
									className="uppercase m-2 font-bold font-montesrrat"
								>
									{' '}
									Plan of study
								</Link>
								<Link
									href={''}
									className="uppercase m-2 font-bold font-montesrrat"
								>
									Watched Threads
								</Link>
								<Link
									href={''}
									className="uppercase m-2 font-bold font-montesrrat"
								>
									Module Reviews
								</Link>
								<Link
									href={''}
									className="uppercase m-2 font-bold font-montesrrat"
								>
									Connections
								</Link>
							</>
						) : (
							<>
								<Link
									href={''}
									className="uppercase m-2 font-bold"
								>
									Privacy Settings
								</Link>
								<Link
									href={''}
									className="uppercase m-2 font-bold"
								>
									Connection Settings
								</Link>
								<Link
									href={''}
									className="uppercase m-2 font-bold"
								>
									Notification Settings
								</Link>
							</>
						)}
					</div>
				</aside>
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

				<div className="mx-10">
					<div className="contantDetails mb-3">
						<h5 className="m-0">Contact Information:</h5>
						{!isEditMode ? (
							<>
								<p className="email m-0">{user.email}</p>
								<p className="phone m-0">123-4567-890</p>
							</>
						) : (
							<div className="flex flex-row items-center">
								<p className=" w-1/2 m-3">
									See{' '}
									<Link href={'/toSettings'}>Settings</Link>{' '}
									to change your preferred contact
									information.Check the contact methods you’d
									prefer to be visible to others on your
									profile.
								</p>
								{/* <img src={ Chat_Bubble } alt="chat bubble" /> */}
								<span className="flex-none m-5">
									<svg
										width="65"
										height="48"
										viewBox="0 0 65 48"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M27.7704 19.8607C26.6812 22.4232 26.1283 25.1435 26.1283 27.9462C26.1283 30.749 26.6812 33.4692 27.7704 36.0317C28.8227 38.5052 30.3278 40.7261 32.245 42.6328C32.5424 42.9286 32.8478 43.2147 33.1604 43.4909C30.1047 44.9813 26.668 45.8178 23.0345 45.8178C20.3895 45.8178 17.8438 45.3733 15.4726 44.5545L2.75887 47.926C1.79998 48.1807 0.789095 47.7631 0.293525 46.9076C-0.197438 46.0613 -0.061864 44.995 0.621931 44.2966C0.625221 44.2927 0.631803 44.2848 0.642333 44.2731C0.672607 44.239 0.730522 44.1709 0.810813 44.0662C0.971397 43.8574 1.22083 43.5033 1.5104 42.9856C2.08627 41.954 2.82995 40.2575 3.33342 37.7538C3.51506 36.8499 3.62957 36.0547 3.6967 35.3608C1.35838 31.7753 0 27.4972 0 22.9089C0 10.2566 10.3129 0 23.0345 0C30.1054 0 36.432 3.16863 40.6572 8.15556C40.0576 8.34603 39.466 8.564 38.8822 8.80945C36.3951 9.85606 34.1621 11.353 32.245 13.2597C30.3278 15.1663 28.8227 17.3872 27.7704 19.8607Z"
											fill="black"
										/>
										<path
											fill-rule="evenodd"
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
						<h5 className="m-0">Socials:</h5>
						{!isEditMode ? (
							<>
								<p className="m-0 font-lora">Github:</p>
								<p className="m-0 font-lora">Twitter:</p>
								<p className="m-0 font-lora">LinkedIn:</p>
								<p className="m-0 font-lora">Facebook:</p>
								<p className="m-0 font-lora">Portfolio:</p>
							</>
						) : (
							<>
								<input
									type="text"
									placeholder="GITHUB:"
									className="w-full m-1"
								/>
								<input
									type="text"
									placeholder="TWITTER:"
									className="w-full m-1"
								/>
								<input
									type="text"
									placeholder="LINKEDIN:"
									className="w-full m-1"
								/>
								<input
									type="text"
									placeholder="FACEBOOK:"
									className="w-full m-1"
								/>
								<input
									type="text"
									placeholder="PORTFOLIO:"
									className="w-full m-1"
								/>
							</>
						)}
					</div>

					<div className="bio mb-3">
						<h5>Biography</h5>
						{!isEditMode ? (
							<div>
								<p className="m-0 font-lora">
									Joel DeSante is a senior at Old Dominion
									University, studying Game Design ...{' '}
								</p>
							</div>
						) : (
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
					*/}
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