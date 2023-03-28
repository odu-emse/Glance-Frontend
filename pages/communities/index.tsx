import { Thread } from '@/components/common/community/threads/thread/thread'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import gqlFetcher from '@/utils/gql_fetcher'
import * as React from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { WatchedSidebarList } from '@/common/community/watched_threads/watched_threads'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import {
	ModuleEnrollment,
	ThreadType,
	User,
} from '../../types'
import moment from 'moment';
import WatchedThreadSidebar from '@/common/community/watched_threads_sidebar/watched_threads_sidebar';

const Index = ({}) => {
	const { data: session } = useSession()
	const [openWatchedThreads, setOpenWatchedThreads] = React.useState(true)

	const { data: userData, error: userError } = useSWR(
		session
			? {
					query: gql`{
            user(input:{
                openID: "${session?.openId}"
            }){
								plan {
									id
                }
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
			  }
			: null,
		gqlFetcher
	) as { data: { user: Array<User> }; error: Error }

	const { data, error } = useSWR(
		userData
			? {
					query: gql`
						{
							moduleEnrollment(
								input: { plan: "${userData.user[0].plan.id}" }
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
												comments {
														id
                        }
											}
										}
									}
								}
							}
                mostWatched: thread(input:{}){
                    id
                    title
                    usersWatching{
                        id
                    }
                    parentLesson{
                        collection{
                            module{
                                id
                                moduleName
                            }
                        }
                    }
                }
                mostActive: thread(input:{}){
                    id
                    title
                    updatedAt
                    comments{
                        id
                    }
                    parentLesson{
                        collection{
                            module{
                                id
                                moduleName
                            }
                        }
                    }
                }
						}
					`,
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			moduleEnrollment: Array<ModuleEnrollment>
			mostWatched: Array<ThreadType>
			mostActive: Array<ThreadType>
		}
		error: Error
	}

	if (error || userError) return <p>Failed to load content...</p>
	if (!data || !userData) return <p>Loading...</p>

	return (
		<div className="mx-8 flex">
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
						Communities
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
										return lesson.threads
											.filter((v) => v.title !== null)
											.sort(
												(a, b) =>
													new Date(
														b.updatedAt
													).valueOf() -
													new Date(
														a.updatedAt
													).valueOf()
											)
											.map((thread, threadMapIndex) => {
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
															commentCount={
																thread.comments
																	.length
															}
															viewCutOff={true}
															showAuthor={false}
														/>
													</div>
												)
											})
									})
								}
							)
						})}
				</div>
			</div>
				<WatchedThreadSidebar open={openWatchedThreads} handle={setOpenWatchedThreads}>
				<div className="mb-10">
					<WatchedSidebarList
						title={'Most Active'}
						threads={
							data.mostActive
								.filter(
									(v) =>
										!!v.title &&
										!!v.parentLesson &&
										new Date().valueOf() >=
											new Date(
												moment(v.updatedAt)
													.subtract(7, 'days')
													.toDate()
											).valueOf()
								)
								.sort(
									(a, b) =>
										b.comments.length - a.comments.length
								) || []
						}
					/>
				</div>
					<div className='border border-black w-full my-14'></div>
				<div className="mb-10">
					<WatchedSidebarList
						title={'Most Watched'}
						threads={
							data.mostWatched
								.filter((v) => !!v.title && !!v.parentLesson)
								.sort(
									(a, b) =>
										b.usersWatching.length -
										a.usersWatching.length
								) || []
						}
					/>
				</div>
				</WatchedThreadSidebar>
		</div>
	)
}

Index.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Index
