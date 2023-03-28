import { Layout } from '@/common/pages/layouts/layout/layout'
import { Button } from '@/common/button/button'
import { Thread } from '@/common/community/threads/thread/thread'
import { useRouter } from 'next/router'
import { gql } from 'graphql-request'
import gqlFetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { ThreadTextArea } from '@/common/community/threads/thread_text_area/thread_text_area'
import { CommentsHierarchy } from '@/common/community/threads/comments/comments_hierarchy'
import Loader from '@/components/util/loader'

const ThreadID = () => {
	const router = useRouter()

	const { threadID } = router.query

	console.log(threadID)

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
						comments {
								id
								body
								author {
									id
									firstName
									lastName
									email
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
										comments {
											id
											body
											author {
												id
												firstName
												lastName
												email
                      }
                    }
                }
						}
				}
			}
		`,
		},
		gqlFetcher
	)

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

	return (
		<section className="px-8 mb-4">
			<div className="mx-3">
				<Button
					className="mt-6 ml-4 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => history.back()}
				>
					Back
				</Button>
				<div className="flex items-center my-3">
					<h1>Communities</h1>
				</div>
			</div>
			<div className="m-3 mt-8 h-fit">
				<h2>{threadData.thread[0].title}</h2>
				<p className="ml-4 mb-14">{threadData.thread[0].body}</p>
				<ThreadTextArea />
			</div>
			<div className="">
				<CommentsHierarchy thread={threadData.thread[0]} />
			</div>
		</section>
	)
}

ThreadID.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ThreadID
