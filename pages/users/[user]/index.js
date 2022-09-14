import React, { useEffect, useState } from 'react'

export default function UserProfile(){

    const [user, setUser] = useState(null) 
    const [loading, setLoading] = useState(false) 
    const [isInstructor, setIsInstructor] = useState(true) 
	const [showInstructor, setShowInstructor] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (//loading ? (
		//loader()
	//):(
			<div className="w-11/12 lg:w-3/4 mx-4 lg:mx-auto flex flex-col md:flex-row mt-3">
				<nav className="w-full md:w-1/4 mr-8 flex flex-col border border-gray-200 shadow-sm rounded-md h-full">
					{isInstructor ? (
						<button
							onClick={ () => setShowInstructor(!showInstructor) }
						>
							<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
								Switch to Professor
							</li>
						</button>
					) : null}
					<a className="text-base" href="#user">
						<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
							User information
						</li>
					</a>
					<a className="text-base" href="#modules">
						<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
							Plan of Study
						</li>
					</a>
					<a className="text-base" href="#security">
						<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
							Security
						</li>
					</a>
					<a className="text-base" href="#notifications">
						<li className="py-1 px-3 hover:bg-gray-100 border-b border-gray-300 list-none">
							Notifications
						</li>
					</a>
					<a className="text-base" href="#kill">
						<li className="py-1 px-3 hover:bg-gray-100 border-gray-300 list-none">
							Close account
						</li>
					</a>
				</nav>
				<div className="w-full md:w-3/4">
					<h3
						id="user"
						className="text-2xl bold border-b border-gray-100 mb-3"
					>
						Profile
					</h3>
					<form>
						<div className="flex md:flex-row md:justify-between flex-col mb-3">
							<label
								htmlFor="name"
								className="block flex-1 mr-2 font-bold"
							>
								First name
								<input
									className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
									type="text"
									placeholder="First name"
									name="firstName"
                                    value = "firstName"
									/*value={user?.firstName}
									onChange={(e) =>
										setUser({
											...user,
											firstName: e.target.value,
										})
									}*/
								/>
							</label>
							<label
								htmlFor="name"
								className="block flex-1 mx-2 font-bold"
							>
								Middle name
								<input
									className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
									type="text"
									placeholder="Middle name"
									name="middleName"
									/*value={user?.middleName}
									onChange={(e) =>
										setUser({
											...user,
											middleName: e.target.value,
										})
									}*/
								/>
							</label>
							<label
								htmlFor="name"
								className="block flex-1 ml-2 font-bold"
							>
								Last name
								<input
									className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
									type="text"
									placeholder="Last name"
									name="lastName"
									/*value={user?.lastName}
									onChange={(e) =>
										setUser({
											...user,
											lastName: e.target.value,
										})
									}*/
								/>
							</label>
						</div>
						<div className="w-full mb-3">
							<label
								htmlFor=""
								className="block flex-1 font-bold"
							>
								Email
								<input
									className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
									type="email"
									placeholder="Email"
									name="email"
									/*value={user?.email}
									onChange={(e) =>
										setUser({
											...user,
											email: e.target.value,
										})
									}*/
								/>
							</label>
						</div>
						<div className="w-full mb-3">
							<label
								htmlFor=""
								className="block flex-1 font-bold"
							>
								Date of birth
								<input
									className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
									type="text"
									placeholder="YYYY/MM/DD"
									name="dob"
									/*defaultValue={user.dob || 'YYYY/MM/DD'}
									onChange={(e) =>
										setUser({
											...user,
											dob: e.target.value,
										})
									}*/
								/>
							</label>
						</div>
						{showInstructor && (
							<>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Title
										<input
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											type="text"
											placeholder="Title"
											name="title"
											/*defaultValue={
												instructor.state
													.instructorProfile.title
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Office location
										<input
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											type="text"
											placeholder="Office location"
											name="officeLocation"
											/*defaultValue={
												instructor.state
													.instructorProfile
													.officeLocation
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Office hours
										<input
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											type="text"
											placeholder="Office hours"
											name="officeHours"
											/*defaultValue={
												instructor.state
													.instructorProfile
													.officeHours
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Contact policy
										<textarea
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											placeholder="Contact policy"
											name="contactPolicy"
											/*defaultValue={
												instructor.state
													.instructorProfile
													.contactPolicy
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Phone number
										<input
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											type="text"
											placeholder="Phone number"
											name="phone"
											/*defaultValue={
												instructor.state
													.instructorProfile.phone
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Research interest
										<textarea
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											placeholder="Research interest"
											name="researchInterest"
											/*defaultValue={
												instructor.state
													.instructorProfile
													.researchInterest
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
								<div className="w-full mb-3">
									<label
										htmlFor=""
										className="block flex-1 font-bold"
									>
										Teaching philosophy
										<textarea
											className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
											placeholder="Teaching philosophy"
											name="philosophy"
											/*defaultValue={
												instructor.state
													.instructorProfile
													.philosophy
											}
											onChange={(event) =>
												handleInstructorProfileChange(
													event
												)
											}*/
										/>
									</label>
								</div>
							</>
						)}

						<button
							className="bg-blue-300 border-blue-200 rounded w-auto text black px-4 py-2 m-2"
							onClick={(e) => {
								e.preventDefault()
								setShowModal(!showModal)
							}}
						>
							Update Profile
						</button>

						<div
							className={`relative z-10 ${
								showModal ? 'visible' : 'invisible'
							}`}
							aria-labelledby="modal-title"
							role="dialog"
							aria-modal="true"
						>
							<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
							<div className="fixed z-10 inset-0 overflow-y-auto">
								<div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
									<div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full w-2/3 max-w-screen-lg">
										<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
											<div className="mt-3 text-center sm:mt-0 sm:text-left">
												<h3 className="text-lg leading-6 font-medium text-gray-900 my-2 border-b border-gray-200">
													Confirm Password
												</h3>
                                             
												<label
														htmlFor="password"
														className="block flex-1 font-bold"
													>
                                                    </label>
														<input
															className="lg:basis-1/2 bg-gray-50 border border-gray-200 rounded shadow-sm py-2 px-2 block my-4 w-full"
															type="password"
															placeholder="New Password"
															name="password"
                                                            required={true}
															/*defaultValue={
																user?.password
															}
															required={true}
															onChange={(e) =>
																setUser({
																	...user,
																	[e.target
																		.name]:
																		e.target
																			.value,
																})
															}*/
														/>
													
													<label
														htmlFor="passwordConfirmation"
														className="block flex-1 font-bold"
													>
                                                        </label>
														<input
															className="lg:basis-1/2 bg-gray-50 border border-gray-200 rounded shadow-sm py-2 px-2 block my-4 w-full"
															type="password"
															placeholder="Confirm Password"
															name="passwordConfirmation"
                                                            required={true}
															/*defaultValue={
																user?.passwordConf
															}
															required={true}
															onChange={(e) =>
																setUser({
																	...user,
																	[e.target
																		.name]:
																		e.target
																			.value,
																})
															}*/
														/>
													
													<div className="sm:flex items-center justify-end">
														<button
															type="submit"
															className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
															onClick={(e) => {
																//updateUser(e)
																setShowModal(
																	false
																)
															}}
														>
															Confirm
														</button>
														<button
															type="reset"
															className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-white text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
															onClick={() =>
																setShowModal(
																	false
																)
															}
														>
															Cancel
														</button>
                                                        
													</div>
                                                    
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
                    <h3
                        id="modules"
                        className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
                        >
                        My Plan of Study
                    </h3>
                    <div className="">
						Plan of Study component
					</div>
                    <h3
                        id="security"
                        className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
                    >
                    Security
                    </h3>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit beatae quam sint quis sapiente nobis esse! Et
                        reprehenderit a eum laudantium earum? Voluptas aliquam,
                        sit eaque in sed distinctio vitae!
                    </div>
                    <h3
                        id="notifications"
                        className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
                    >
                    Notifications
                    </h3>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Suscipit beatae quam sint quis sapiente nobis esse! Et
                        reprehenderit a eum laudantium earum? Voluptas aliquam,
                        sit eaque in sed distinctio vitae!
                    </div>
                    <h3
                        id="kill"
                        className="text-2xl bold border-b border-gray-100 text-red-500 mb-3 mt-3"
                    >
                    Danger zone
                    </h3>

                    <button
                        className="text-white border-red-400 bg-red-500 rounded w-auto px-4 py-2"
                        //onClick={() => deleteUser()}
                    >
                        Kill account
                    </button>

</div>
            </div>  
    )
                
}