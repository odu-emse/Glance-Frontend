import { Thread } from '@/components/common/community/threads/thread/thread'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import gqlFetcher from '@/utils/gql_fetcher'
import * as React from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { ModuleList } from '@/common/pages/module_list/module_list'
import { WatchedThreads } from '@/common/community/watched_threads/watched_threads'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'

export type Module = {
	id: string
	moduleNumber: number
	moduleName: string
	description: string
	duration: number
	intro: string
	numSlides: number
	keywords: string[]
	objectives: string[]
	createdAt: Date
	updatedAt: Date
	members: ModuleEnrollment[]
	parentModules: Module[]
	subModules: Module[]
	collections: Collection[]
	courseIDs: string[]
}

export type User = {
	id: string
	openID: string
	email: string
	picURL: string | ''
	createdAt?: string
	firstName: string | null
	lastName: string | null
	middleName?: string | null
	isAdmin?: boolean | null
	isActive?: boolean | null
	plan?: PlanOfStudy | null
	watchedThreads?: Array<ThreadType | null> | null
	createdThreads?: Array<ThreadType | null> | null
}

export type PlanOfStudy = {
	id: string
	student?: User | null
	modules?: Array<ModuleEnrollment | null> | null
	modulesLeft?: Array<ModuleEnrollment | null> | null
}

export type ModuleEnrollment = {
	id: string
	enrolledAt: Date
	role: 'STUDENT' | 'TEACHER' | 'GRADER'
	status: 'ACTIVE' | 'INACTIVE'
	module: Module
	plan?: PlanOfStudy | null
	inactivePlan?: PlanOfStudy | null
}

export type Collection = {
	id: string
	name: string
	createdAt: Date
	updatedAt: Date
	lessons?: Nullable<Nullable<Lesson>[]>
	module: Module
	moduleID: string
	position?: Nullable<number>
}

export type ThreadType = {
	id: string
	title?: string | null
	author: User
	body: string
	comments?: Array<ThreadType | null> | null
	upvotes?: Array<User | null>
	usersWatching?: Array<User | null>
	parentLesson?: Nullable<Lesson>
	createdAt: Date
	updatedAt: Date
	parentThread?: Nullable<ThreadType>
	parentThreadID?: Nullable<string>
}

type Lesson = {
	id: string
	name: string
	threads?: Nullable<Nullable<ThreadType>[]>
	position?: Nullable<number>
}

type Nullable<T> = T | null

export type ModuleEnrollmentQueryResponse = {
	moduleEnrollment: Array<
		ModuleEnrollment & {
			module: Module & {
				collections: Array<
					Collection & {
						lessons: Array<
							Lesson & {
								threads: Array<
									ThreadType & {
										comments: Array<
											ThreadType & {
												comments: Array<
													ThreadType & {
														comments: Array<ThreadType>
													}
												>
											}
										>
									}
								>
							}
						>
					}
				>
			}
		}
	>
}

const Index = ({}) => {
	const { data: session } = useSession()
	console.log(session)
	const { data, error } = useSWR(
		{
			query: gql`
				{
					moduleEnrollment(
						input: { plan: "63da9120020a625cc55f64a6" }
					) {
						id
						status
						role
						module {
							id
							moduleName
							collections {
								lessons {
									id
									threads {
										title
										comments {
											id
											body
											comments {
												id
												body
												comments {
													id
													body
												}
											}
										}
										author {
											id
											firstName
											lastName
											email
											picURL
										}
										upvotes {
											id
										}
									}
								}
							}
						}
					}
				}
			`,
		},
		gqlFetcher
	) as { data: ModuleEnrollmentQueryResponse; error: Error }

	const { data: userData, error: userError } = useSWR(
		{
			query: gql`{
				user(input:{
						openID: "${session?.openId}"
				}){
            watchedThreads{
                id
                title
                parentLesson{
                    collection{
                        module{
                            id
                        }
                    }
                }
            }
				}
    }`,
		},
		gqlFetcher
	) as { data: User[]; error: Error }

	if (error) return <p>Failed to load content...</p>
	if (!data) return <p>Loading...</p>
	// if (!userData) return <p>Loading...</p>
	return (
		<div className="m-8 flex">
			<div className="m-10 grow">
				<div className="flex my-2 items-center">
					<img
						src={
							session?.user.image ||
							'https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg'
						}
						alt="profile image"
						className="shadow-lg rounded-full max-w-full h-4 align-middle border-none"
					/>
					<small className="pl-2 font-bold">
						{session?.user.name}
					</small>
					<small>
						<span className="px-1 font-bold">&bull;</span>
						{session?.user.email}
					</small>
				</div>
				<div className="flex items-center">
					<h1 className="text-lg font-semibold flex-none pr-20">
						Recent Threads
					</h1>
					<Input
						defaultValue=""
						label="Search"
						name="floating_search"
						onChange={function noRefCheck() {}}
						role="search"
						type="search"
						options={[]}
					/>
				</div>
				<div className="m-2">
					{data.moduleEnrollment
						.filter((v) => v.status !== 'INACTIVE')
						.map((enrollment) => {
							return enrollment.module.collections.map(
								(collection) => {
									return collection.lessons.map((lesson) => {
										return lesson.threads.map(
											(thread, threadMapIndex) => {
												console.log(thread)
												return (
													<div
														className="my-4"
														key={threadMapIndex}
													>
														<Thread
															body={thread.body}
															id={thread.id}
															title={thread.title}
															upvotes={
																thread.upvotes
																	?.length ||
																0
															}
															userProfile={
																thread.author
															}
														/>
													</div>
												)
											}
										)
									})
								}
							)
						})}
				</div>
			</div>
			<aside className="mx-10 flex-none">
				<div className="mb-10">
					<ModuleList
						modules={data.moduleEnrollment.map((v) => v.module)}
					/>
				</div>
				<div className="mb-10">
					{/*<WatchedThreads*/}
					{/*	threads={userData.map(v => v).watchedThreads || []}*/}
					{/*/>*/}
				</div>
			</aside>
		</div>
	)
}

// Index.getLayout = function getLayout(page) {
// 	return <Layout>{page}</Layout>
// }

export default Index
