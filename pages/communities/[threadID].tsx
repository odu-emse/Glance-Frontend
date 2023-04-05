import { Layout } from '@/common/pages/layouts/layout/layout'
import { Button } from '@/common/button/button'
import { useRouter } from 'next/router'
import { gql } from 'graphql-request'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { ThreadTextArea } from '@/common/community/threads/thread_text_area/thread_text_area'
import { CommentsHierarchy } from '@/common/community/threads/comments/comments_hierarchy'
import Loader from '@/components/util/loader'
import { useContext, useState } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import { ThreadType } from '../../types'

const ThreadID = () => {
	const router = useRouter()
	const { user } = useContext(GlobalUserContext)
	const { threadID } = router.query

	const { data: threadData, error: threadError } = useSWR(
		{
			query: gql`
			query {
				thread(input: {
					id: "${threadID}"
				}){
						id
						title
						body
						author {
							id
							firstName
							lastName
							email
            }
						usersWatching {
							id
            }
						upvotes {
							id
            }
						comments {
								updatedAt
								createdAt
								id
								body
								author {
									id
									firstName
									lastName
									email
								}
								upvotes {
									id
                }
								comments {
									id
									body
									author {
										id
										firstName
										lastName
										email
                  }
									upvotes {
										id
									}
									comments {
										id
										body
										author {
											id
											firstName
											lastName
											email
										}
											upvotes {
												id
											}
									}
                }
						}
				}
			}
		`,
		},
		gqlFetcher
	) as {
		data: {
			thread: Array<ThreadType>
		}
		error: Error
	}

	const { mutate } = useSWR({}, gqlFetcher)

	const addCommentToThread = (threadId, commentBody, author) => {
		mutate(async () => {
			await client.request(
				gql`
					mutation AddCommentToThread(
						$threadID: ID!
						$commentBody: String!
						$commentAuthor: ID!
					) {
						addCommentToThread(
							parentThreadID: $threadID
							data: { body: $commentBody, author: $commentAuthor }
						) {
							id
							body
						}
					}
				`,
				{
					threadID: threadId,
					commentBody,
					commentAuthor: author,
				}
			)
		}, false).catch((err) => {
			console.log(err)
		})
	}


	const watchThread = (threadID, userID) => {
		mutate(async () => {
			await client.request(
				gql`
					mutation AddUserAsWatcher($threadID: ID!, $userID: ID!) {
						addUserAsWatcherToThread(
							id: $threadID
							userID: $userID
						) {
							id
							title
							body
							usersWatching {
								id
							}
						}
					}
				`,
				{
					threadID,
					userID,
				}
			)
		}, false).catch((err) => {
			console.log(err)
		})
	}

	if (threadError) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<h1 className="text-2xl">Error</h1>
			</div>
		)
	}

	if (!threadData) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	const isCurrentUserWatching = threadData.thread[0].usersWatching.some(
		(acc) => acc.id === user.id
	)

	const sortedComments = threadData.thread[0].comments.sort((a, b) => new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf())

	const sortedThread = {
		...threadData.thread[0],
		comments: sortedComments,
	}

	return (
		<section className="px-8 mb-4">
			<div className="mx-3">
				<Button
					className="mt-6 ml-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => history.back()}
				>
					Back
				</Button>
				<div className="flex items-center my-3 justify-between">
					<h1>Communities</h1>
					<Button onClick={() => watchThread(threadID, user.id)}>
						<FaBell />
						{isCurrentUserWatching ? 'Unwatch' : 'Watch'}
					</Button>
				</div>
			</div>
			<div className="m-3 mt-8 h-fit">
				<h2>{threadData.thread[0].title}</h2>
				<p className="ml-4 mb-14">{threadData.thread[0].body}</p>
				<ThreadTextArea
					onSubmit={addCommentToThread}
					threadID={threadID}
					userID={user.id}
				/>
			</div>
			<div className="">
				<CommentsHierarchy thread={sortedThread} />
			</div>
		</section>
	)
}

ThreadID.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ThreadID
