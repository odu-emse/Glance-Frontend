import * as React from 'react'
import moment from 'moment'

import { Input } from '../../common/forms/inputs/input/input'
import type { InputProps } from '../../common/forms/inputs/input/input'
import { SocialCard } from '../../common/community/social_card/social_card'
import type {
	SocialCardProps,
	UserAccountProps,
} from '../../common/community/social_card/social_card'
import {
	AiOutlineDown,
	AiOutlineTrophy,
	AiFillPlusSquare,
	AiOutlinePlus,
} from 'react-icons/ai'
import { BiSearch, BiMessageRoundedDetail, BiPoll } from 'react-icons/bi'
import { RiContactsBookLine } from 'react-icons/ri'
import { GrGroup } from 'react-icons/gr'
import { CgPoll } from 'react-icons/cg'
import { GoLinkExternal } from 'react-icons/go'
import { MdSend } from 'react-icons/md'
import gqlFetcher from '../../../utils/gql_fetcher'
import { gql } from 'graphql-request'
import useSWR from 'swr'

export const CommunityPage = ({
	socialCardProps,
	userAccountProps,
	inputProps,
	groupsProps,
	pollSurveysProps,
	challengesProps,
	contactProps,
}) => {
	const { data, error } = useSWR(
		{
			query: gql`
				{
					thread(input: {}) {
						id
						title
						body
						author {
							picURL
							createdAt
							firstName
							lastName
							instructorProfile {
								title
								officeLocation
							}
						}
						upvotes
						comments {
							id
							title
							author {
								picURL
								createdAt
								firstName
								lastName
								instructorProfile {
									title
									officeLocation
								}
							}
						}
						createdAt
					}
				}
			`,
		},
		gqlFetcher
	)

	if (error) {
		console.log(error)
		throw new Error(error)
	}
	if (!data) {
		return <div>Loading...</div>
	}
	console.log(data.thread.createdAt)
	console.log(data.thread)

	return (
		<div className="h-auto mx-auto relative bg-[#E7E8E9] overflow-scroll">
			<div className="flex flex-1">
				<div className="container mt-2 md:ml-10 relative md:w-7/12">
					<div className="flex flex-col h-screen">
						<div className="text-center md:text-left text-gray-400 text-6xl tracking-widest border">
							Feed
						</div>
						<div className="hidden md:relative md:flex md:my-4">
							<textarea
								className="w-full placeholder:italic rounded border-box shadow-md "
								placeholder="Go ahead, share your moments!"
							></textarea>
							<button className="items-end">
								<MdSend size={30} />
							</button>
						</div>
						<button>
							<div className="flex justify-end text-gray-400 items-center text-xs tracking-tight">
								Sort by Relevance <AiOutlineDown />
							</div>
						</button>

						<div>
							{data.thread.length > 0 &&
								data.thread.map(
									(
										{
											data1,
											author,
											createdAt,
											upvotes,
											instructorProfile,
											comments,
											body,
										},
										index
									) => (
										<>
											<SocialCard
												timestamp={moment(
													createdAt
												).unix()}
												content={body}
												likes={upvotes}
												comments={comments.length}
												user={{
													firstName: author.firstName,
													lastName: author.lastName,

													role: author
														.instructorProfile
														?.title
														? author
																.instructorProfile
																.title
														: 'advisor',
													image: author.picURL,
													title: '',
													office: author
														.instructorProfile
														?.officeLocation
														? author.officeLocation
																.title
														: 'ESB 2101',
													department: '',
												}}
												key={index}
											/>
										</>
									)
								)}
						</div>
						<div className="md:hidden flex flex-row h-full items-end justify-evenly w-full">
							<div className="">
								<button>
									<GrGroup size={30} />
								</button>
							</div>
							<div className="">
								<button>
									<CgPoll size={30} />
								</button>
							</div>
							<div className="">
								<button>
									<BiMessageRoundedDetail size={30} />
								</button>
							</div>
							<div className="">
								<button>
									<BiSearch size={30} />
								</button>
							</div>
							<div className="">
								<button>
									<AiOutlineTrophy size={30} />
								</button>
							</div>

							<div className="">
								<button>
									<RiContactsBookLine size={30} />
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="hidden md:flex md:container md:ml-36 md:relative md:w-11/12 bg-white shadow-lg h-screen overflow-y-auto">
					<div className="flex flex-col h-full w-full ">
						<div className="px-3 h-20 flex shrink-0 w-full items-center justify-center border-b border-gray-150">
							<Input
								defaultValue={inputProps.defaultValue}
								label={inputProps.label}
								name={inputProps.name}
								onChange={inputProps.onChange}
								role={inputProps.role}
								type={inputProps.type}
								options={[]}
							/>
						</div>
						<div className="mx-4">
							<p className="text-gray-700 ">Groups</p>
							<div className="flex flex-col">
								<ul className="text-xs ">
									{groupsProps
										? groupsProps.map(
												(group, groupIndex) => (
													<li
														className="pb-1/2 flex flex-row gap-x-4 items-center"
														key={groupIndex}
													>
														<img
															alt={`${group.groupsName} logo`}
															className="w-12 h-12 rounded-full p-1"
															src={
																group.groupsProfileImage
															}
														/>
														<div className="flex-grow">
															<p className="">
																{
																	group.groupsName
																}
															</p>
															<p className="text-gray-400">
																{`${group.groupsMemberCount} members`}
															</p>
														</div>
														<button>
															<AiFillPlusSquare
																size={30}
															/>
														</button>
													</li>
												)
										  )
										: null}
								</ul>
							</div>
						</div>
						<div className="mt-2 border-t border-gray-150">
							<div className="mx-4">
								<p className="text-gray-700 mb-2">
									Polls & Surveys
								</p>
								<div className="flex flex-col">
									<ul className="text-xs">
										{pollSurveysProps
											? pollSurveysProps.map(
													(poll, pollIndex) => (
														<li
															className="pb-2 flex flex-row gap-x-4 items-center"
															key={pollIndex}
														>
															<div className="flex-grow">
																<p className="">
																	{
																		poll.pollSurveyName
																	}
																</p>
																<p className="text-gray-400">
																	{`Takes about ` +
																		poll.timestamp +
																		` `}
																	{poll.timestamp ===
																	1
																		? 'minute'
																		: 'minutes'}
																</p>
															</div>
															<button>
																{poll.pollSurveyName.endsWith(
																	'poll'
																) ? (
																	<BiPoll
																		size={
																			30
																		}
																	/>
																) : (
																	<GoLinkExternal
																		size={
																			30
																		}
																	/>
																)}
															</button>
														</li>
													)
											  )
											: null}
									</ul>
								</div>
							</div>
						</div>
						<div className="border-t border-gray-150">
							<div className="mx-4">
								<p className="text-gray-700 mb-2">
									Popular challenges
								</p>
								<div className="flex flex-col">
									<ul className="text-xs">
										{challengesProps
											? challengesProps.map(
													(
														challenge,
														challengeIndex
													) => (
														<li
															className="pb-2 flex flex-row gap-x-4 items-center"
															key={challengeIndex}
														>
															<div className="flex-grow">
																<p className="">
																	{
																		challenge.challengesName
																	}
																</p>
																<p className="text-gray-400">
																	{`Added by ` +
																		challenge.challengesUserCount.toLocaleString() +
																		` `}
																	{challenge.challengesUserCount ===
																	1
																		? 'user'
																		: 'users'}
																</p>
															</div>
															<button>
																<AiOutlinePlus
																	size={30}
																/>
															</button>
														</li>
													)
											  )
											: null}
									</ul>
								</div>
							</div>
						</div>
						<div className="border-t border-gray-150">
							<div className="mx-4">
								<p className="text-gray-700 mb-2">
									Most Recent Chats
								</p>
								<div className="flex flex-col">
									<ul className="">
										{contactProps
											? contactProps.map(
													(contact, contactIndex) => (
														<li
															className="pb-2 flex flex-row gap-x-6 items-center"
															key={contactIndex}
														>
															<div className="relative">
																<img
																	alt={`${contact.contactFirstName} ${contact.contactLastName} avatar`}
																	className="w-12 h-12 rounded-full p-1"
																	src={
																		contact.contactProfileImage
																	}
																/>
																<span
																	className={`bottom-0 left-8 absolute w-3.5 h-3.5 border-2 border-white rounded-full 
                                ${
									contact.contactStatus === 'Online'
										? 'bg-green-400'
										: contact.contactStatus === 'Busy'
										? 'bg-red-500'
										: 'bg-gray-500'
								}
                              `}
																></span>
															</div>

															<div className="flex-grow">
																<p className="font-light">
																	{contact.contactTitle ===
																	undefined
																		? ''
																		: contact.contactTitle +
																		  ` `}
																	{contact.contactFirstName +
																		` ` +
																		contact.contactLastName}
																</p>
															</div>
															<button>
																<MdSend
																	size={30}
																/>
															</button>
														</li>
													)
											  )
											: null}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export type CommunityPageProps = {
	socialCardProps: SocialCardProps
	userAccountProps: UserAccountProps
	inputProps: InputProps
	groupsProps: GroupsProps[]
	pollSurveysProps: PollSurveysProps[]
	contactProps: ContactProps[]
	challengesProps: ChallengesProps[]
}

export type GroupsProps = {
	groupsProfileImage: string
	groupsName: string
	groupsMemberCount: number
}

export type ChallengesProps = {
	challengesName: string
	challengesUserCount: number
}

export type PollSurveysProps = {
	pollSurveyName: string
	timestamp: number
}

export type ContactProps = {
	contactTitle?: string
	contactFirstName: string
	contactLastName: string
	contactProfileImage: string
	contactStatus: string
}
