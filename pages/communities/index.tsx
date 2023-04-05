import { Thread } from '@/components/common/community/threads/thread/thread'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import gqlFetcher from '@/utils/gql_fetcher'
import * as React from 'react'
import { Input } from '@/common/forms/inputs/input/input'
import { WatchedSidebarList } from '@/common/community/watched_threads/watched_threads'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import { ThreadType, User } from '../../types'
import moment from 'moment'
import WatchedThreadSidebar from '@/common/community/watched_threads_sidebar/watched_threads_sidebar'
import Loader from '@/components/util/loader'
import { Button } from '@/common/button/button'

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
								id
								plan {
									id
                }
                watchedThreads{
                    id
                    title
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
							threads: thread(input: {}) {
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
							mostWatched: thread(input: {}) {
								id
								title
								usersWatching {
									id
								}
							}
							mostActive: thread(input: {}) {
								id
								title
								updatedAt
								comments {
									id
								}
							}
						}
					`,
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			threads: Array<ThreadType>
			mostWatched: Array<ThreadType>
			mostActive: Array<ThreadType>
		}
		error: Error
	}

	if (error || userError)
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<h1 className="text-2xl font-bold">Error</h1>
			</div>
		)
	if (!data || !userData)
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

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
				<div className="flex items-center justify-between">
					<h1 className="text-lg font-semibold flex-none">
						Communities
					</h1>
					<div className="flex flex-row gap-1">
						<Input
							defaultValue=""
							label={null}
							name="floating_search"
							onChange={function noRefCheck() {}}
							role="search"
							type="search"
							placeholder="Search threads..."
							className="w-2/3 md:w-72"
						/>
						<div className="flex gap-2 w-fit">
							<Button>SORT</Button>
							<Button>FILTER</Button>
						</div>
					</div>
				</div>
				<div className="m-2">
					{data.threads
						.filter((v) => v.title !== null)
						.sort(
							(a, b) =>
								new Date(b.updatedAt).valueOf() -
								new Date(a.updatedAt).valueOf()
						)
						.map((thread, threadMapIndex) => {
							return (
								<div className="my-4" key={threadMapIndex}>
									<Thread
										body={thread.body}
										id={thread.id}
										title={thread.title}
										userProfile={thread.author}
										commentCount={thread.comments.length}
										viewCutOff={true}
										showAuthor={false}
										upvotesProp={thread.upvotes}
									/>
								</div>
							)
						})}
				</div>
			</div>
			<WatchedThreadSidebar
				open={openWatchedThreads}
				handle={setOpenWatchedThreads}
			>
				<div className="mb-10">
					<WatchedSidebarList
						title={'Most Active'}
						threads={
							data.mostActive
								.filter(
									(v) =>
										!!v.title &&
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
				<div className="border border-black w-full my-14"></div>
				<div className="mb-10">
					<WatchedSidebarList
						title={'Most Watched'}
						threads={
							data.mostWatched
								.filter((v) => !!v.title)
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
