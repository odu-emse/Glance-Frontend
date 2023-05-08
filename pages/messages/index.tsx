import { BubbleMessage } from '@/components/common/chat/bubble_message/bubble_message'
import { ChatHistory } from '@/components/common/chat/chat_history/chat_history'
import Head from 'next/head'
import { Layout } from '@/common/pages/layouts/layout/layout'
import useSWR from 'swr'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'
import { useContext, useState } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import Loading from '@/common/loader/loader'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import { DirectMessageResponse } from '@/types/graphql'
import { MessageInput } from '@/common/message_input/message_input'
import { useRouter } from 'next/router';

const DirectMessageHomePage = () => {
	const { user } = useContext(GlobalUserContext)
	const router = useRouter()
	const {selected: selectedID} = router.query
	const [selected, setSelected] = useState<string>(selectedID as string ?? null)
	const [message, setMessage] = useState<string | null>(null)
	const { data, error } = useSWR(
		{
			query: gql`
				query GetSentMessages($userID: ID!) {
					sentMessages(senderID: $userID) {
						id
						body
						createdAt
						author {
							id
							firstName
							lastName
							picURL
						}
						recipient {
							id
							firstName
							lastName
							picURL
						}
					}
				}
			`,
			variables: {
				userID: user.id,
			},
		},
		gqlFetcher
	) as {
		data: {
			sentMessages: Array<DirectMessageResponse>
		}
		error: Error
	}

	const { data: conversation, error: conversationError } = useSWR(
		() =>
			selected !== null
				? {
						query: gql`
							query GetConversation(
								$senderID: ID!
								$recipientID: ID!
							) {
								directMessages(
									receiverID: $recipientID
									senderID: $senderID
								) {
									createdAt
									author {
										firstName
										lastName
										id
										picURL
									}
									recipient {
										firstName
										lastName
										id
										picURL
									}
									body
								}
							}
						`,
						variables: {
							senderID: user.id,
							recipientID: selected,
						},
				  }
				: null,
		gqlFetcher
	) as {
		data: {
			directMessages: Array<DirectMessageResponse>
		}
		error: Error
	}

	const { mutate } = useSWR({}, gqlFetcher)

	const handleSendMessage = (message: string, recipientID: string) => {
		console.log(message, recipientID)
		mutate(async () => {
			await client.request(
				gql`
					mutation SendMessage(
						$receiverID: ID!
						$message: String!
						$senderID: ID!
					) {
						createDirectMessage(
							receiverID: $receiverID
							message: $message
							senderID: $senderID
						)
					}
				`,
				{
					receiverID: recipientID,
					senderID: user.id,
					message,
				}
			)
		})
		.then(() => {
			setMessage(null)
		}).finally(
			() => router.reload()
		)
		.catch((error) => {
			console.error('Error while sending message:', error)
		})
	}

	if (error || conversationError)
		return (
			<RequestFailed
				title={'Message retrieval failed'}
				subtitle={
					'There was an error while fetching your messages. Please try again shortly!'
				}
			/>
		)

	if (!data) return <Loading />

	return (
		<>
			<Head>
				<title>Messages | GLANCE</title>
			</Head>
			<div className="flex">
				<div className=" flex w-1/4 h-[calc(100vh_-_4rem)]">
					<ChatHistory
						handle={() => null}
						messages={data.sentMessages}
						handleSelect={(id: string) => setSelected(id)}
						selected={selected}
					/>
				</div>
				<div className=" w-full flex flex-col justify-between h-[calc(100vh_-_4rem)]">
					{selected !== null && conversation ? (
						<>
						<BubbleMessage
							currentUserID={user.id}
							message={conversation.directMessages}
						/>
						<MessageInput message={null} handleSubmit={handleSendMessage} recipientID={selected} />
						</>
					) : (
						<div className="flex flex-col justify-center items-center h-full">
							<h4 className="text-2xl font-bold sans uppercase">
								Select a conversation to view
							</h4>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

DirectMessageHomePage.getLayout = (page: any) => {
	return <Layout>{page}</Layout>
}

export default DirectMessageHomePage
