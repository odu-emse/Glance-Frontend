import React, { useState } from 'react'
import Image from 'next/image'
import { Layout } from '../../common/pages/layouts/layout/Layout'
import useAuth from '../../../hooks/useAuth'
import gqlFetcher from '../../../utils/gqlFetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { useRouter } from 'next/router'

export const UserPage = () => {
	const [isInstructor] = useState(true)
	const [showInstructor, setShowInstructor] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const { jwt: token, user } = useAuth()
	const router = useRouter()

	const { data, error } = useSWR(
		{
			query: gql`
              {
                user(id: "${user?.sub}") {
                  id
                    openID
                    picURL
                  firstName
                  lastName
                  dob
                  email
                  plan{
                    id
                    modules{
                      enrolledAt
                        role
                        module{
                                id
                                moduleName
                                moduleNumber
                        }
                    }
                      assignmentResults {
                      id
                          submittedAt
                          result
                          gradedBy {
                                  firstName
                                  lastName
                                  email
                                  instructorProfile {
                              id
                                          title
                                          officeLocation
                                          officeHours
                                          contactPolicy
                                          phone
                                          background
                                          researchInterest
                          }
                      }
                          assignment {
                                  id
                                  name
                                  dueAt
                      }
                    }
                  }
                  instructorProfile{
                    id
                    title
                    officeLocation
                    officeHours
                    contactPolicy
                    phone
                    background
                    researchInterest
                  }
                }
              }
            `,
			token,
		},
		gqlFetcher
	)

	if (error) {
		console.log(error)
		// throw new Error(error);
	}
	if (!data) {
		return <div>Loading...</div>
	}

	return router.query.user !== user?.sub ? (
		<div className="w-2/3">
			Show the profile of the user with id {router.query.user}
		</div>
	) : (
		<div className="w-11/12 lg:w-3/4 mx-4 lg:mx-auto flex flex-col md:flex-row mt-3">
			<aside className="w-full md:w-1/4 mr-8 flex flex-col">
				<div className="relative h-48 w-48 mb-3 rounded-lg overflow-clip mx-auto group">
					<div className="opacity-0 group-hover:opacity-100 w-full h-full z-10 absolute left-0 transition-opacity top-0 uppercase font-black text-white text-xl tracking-wider flex justify-center items-center">
						<span className="cursor-pointer">Edit</span>
					</div>
					<Image
						src={`${
							data.user?.picURL
								? data.user.picURL
								: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
						}`}
						alt="user avatar"
						layout="fill"
					/>
					<div className="absolute bg-blue-300 opacity-50 group-hover:opacity-90 inset-0"></div>
				</div>
				<nav className="w-full mr-8 flex flex-col border border-gray-200 shadow-sm rounded-md">
					{isInstructor ? (
						<button
							onClick={() => setShowInstructor(!showInstructor)}
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
			</aside>
			<div className="w-full md:w-3/4">
				<h3
					id="user"
					className="text-2xl bold border-b border-gray-100 mb-3"
				>
					Profile
				</h3>
				<form>
					<div className="flex md:flex-row md:justify-between flex-col mb-3">
						<label htmlFor="name" className="block flex-1 mr-2 p-1">
							<strong>First Name</strong>
							<br />
							{user?.given_name}
						</label>
						<label htmlFor="name" className="block flex-1 ml-2 p-1">
							<strong>Last Name</strong>
							<br />
							{user?.family_name}
						</label>
					</div>
					<div className="w-full mb-3">
						<label htmlFor="" className="block flex-1 p-1">
							<strong>Email</strong>
							<br />
							{user?.email}
						</label>
					</div>
					{/* <div className="w-full mb-3">
						<label htmlFor="" className="block flex-1">
							Date of birth
							<input
								className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1"
								type="text"
								placeholder="YYYY/MM/DD"
								name="dob"
							/>
						</label>
					</div> */}
					{showInstructor && (
						<>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Title
									<input
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										type="text"
										placeholder="Title"
										name="title"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Office location
									<input
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										type="text"
										placeholder="Office location"
										name="officeLocation"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Office hours
									<input
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										type="text"
										placeholder="Office hours"
										name="officeHours"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Contact policy
									<textarea
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										placeholder="Contact policy"
										name="contactPolicy"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Phone number
									<input
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										type="text"
										placeholder="Phone number"
										name="phone"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Research interest
									<textarea
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										placeholder="Research interest"
										name="researchInterest"
									/>
								</label>
							</div>
							<div className="w-full mb-3">
								<label htmlFor="" className="block flex-1">
									Teaching philosophy
									<textarea
										className="bg-gray-50 border border-gray-200 rounded shadow-sm py-1 px-2 block w-full mt-1 capitalize"
										placeholder="Teaching philosophy"
										name="philosophy"
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
											></label>
											<input
												className="lg:basis-1/2 bg-gray-50 border border-gray-200 rounded shadow-sm py-2 px-2 block my-4 w-full"
												type="password"
												placeholder="New Password"
												name="password"
												required={true}
											/>

											<label
												htmlFor="passwordConfirmation"
												className="block flex-1 font-bold"
											></label>
											<input
												className="lg:basis-1/2 bg-gray-50 border border-gray-200 rounded shadow-sm py-2 px-2 block my-4 w-full"
												type="password"
												placeholder="Confirm Password"
												name="passwordConfirmation"
												required={true}
											/>

											<div className="sm:flex items-center justify-end">
												<button
													type="submit"
													className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
													onClick={() => {
														setShowModal(false)
													}}
												>
													Confirm
												</button>
												<button
													type="reset"
													className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-white text-base font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
													onClick={() =>
														setShowModal(false)
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
				{/* <h3
					id="modules"
					className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
				>
					My Plan of Study
				</h3>
				<div className="">Plan of Study component</div>
				<h3
					id="security"
					className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
				>
					Security
				</h3>
				<div className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					beatae quam sint quis sapiente nobis esse! Et reprehenderit a eum
					laudantium earum? Voluptas aliquam, sit eaque in sed distinctio vitae!
				</div>
				<h3
					id="notifications"
					className="text-2xl bold border-b border-gray-100 mb-3 mt-3"
				>
					Notifications
				</h3>
				<div className="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					beatae quam sint quis sapiente nobis esse! Et reprehenderit a eum
					laudantium earum? Voluptas aliquam, sit eaque in sed distinctio vitae!
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
				</button> */}
			</div>
		</div>
	)
}
export type UserPageProps = {}
