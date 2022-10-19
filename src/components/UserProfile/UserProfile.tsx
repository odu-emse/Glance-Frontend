import * as React from 'react'
import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../FormElements'

export const UserProfile = ({ user, isCurrentUser }: UserProfileProps) => {
	const [showModal] = useState(false)
	const [formData, setFormData] = React.useState({
		firstname: user.firstname,
		lastName: user.lastName,
		email: user.email,
	})
	const [showProfile, setShowProfile] = useState(false)

	const [showPlanOfStudy, setShowPlanOfStudy] = useState(false)

	return (
		<div className="w-11/12 lg:w-3/4 mx-4 lg:mx-auto flex flex-col md:flex-row mt-3">
			<aside className="w-full md:w-1/4 mr-8 flex flex-col">
				<div className="relative h-48 w-48 mb-3 rounded-lg overflow-clip mx-auto group">
					<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
						<span className="cursor-pointer">Edit</span>
					</div>
					<img src={user.image} alt="..." />
					<div className="absolute bg-blue-300 opacity-50 group-hover:opacity-90 inset-0"></div>
				</div>
				<nav className="w-full md:w-1/4 mr-8 flex flex-col border border-gray-200 shadow-sm rounded-md h-full">
					<button>
						<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
							Profile Details{' '}
						</li>
					</button>

					<a className="text-base" href="#user">
						<li
							className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none"
							onClick={() => {
								setShowProfile(!showProfile),
									setShowPlanOfStudy(showPlanOfStudy)
							}}
						>
							User information
						</li>
					</a>
					<a className="text-base" href="#modules">
						<li
							className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none"
							onClick={() => {
								setShowPlanOfStudy(!showPlanOfStudy),
									setShowProfile(showProfile)
							}}
						>
							Plan of Study
						</li>
					</a>
				</nav>
			</aside>
			{showProfile && (
				<>
					<div className="w-full md:w-3/4">
						<h3
							id="user"
							className="text-2xl bold border-b border-gray-100 mb-3"
						>
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
								/>
							</div>

							<Button
								label="Update Profile"
								type="submit"
								disabled={!isCurrentUser}
								primary
							/>

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
							//onClick={() => deleteUser()}
						>
							Kill account
						</button>
					</div>
				</>
			)}
			{showPlanOfStudy && (
				<>
					<div className="w-full md:w-3/4">
						<h3
							id="user"
							className="text-2xl bold border-b border-gray-100 mb-3"
						>
							Plan of study
						</h3>
						<table className="border-separate border-spacing-2 border border-slate-400 ...">
							<thead>
								<tr>
									<th className="border border-slate-300 ...">
										Status
									</th>
									<th className="border border-slate-300 ...">
										Term
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[0].status}
									</td>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[0].term}
									</td>
								</tr>
								<tr>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[1].status}
									</td>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[1].term}
									</td>
								</tr>
								<tr>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[2].status}
									</td>
									<td className="border border-slate-300 ...">
										{user.planOfStudy[2].term}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</>
			)}
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
