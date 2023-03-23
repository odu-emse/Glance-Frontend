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
import {
	Collection,
	Lesson,
	Module,
	ModuleEnrollment,
	ThreadType,
	User,
} from '../../types'

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
										id
										title
										body
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
										updatedAt
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
						openID: "${session.openId}"
				}){
            watchedThreads{
                id
                title
                parentLesson{
                    collection{
                        module{
														moduleName
                            id
                        }
                    }
                }
            }
				}
    }`,
		},
		gqlFetcher
	) as { data: { user: Array<User> }; error: Error }

	if (error || userError) return <p>Failed to load content...</p>
	if (!data || !userData) return <p>Loading...</p>

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
										return lesson.threads.sort((a, b) => new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf() ).map(
											(thread, threadMapIndex) => {
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
					<WatchedThreads
						threads={userData?.user[0].watchedThreads.filter(v => v.parentLesson) || []}
					/>
				</div>
			</aside>
		</div>
	)
}

Index.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Index
