import React from 'react'
import { Thread, ThreadProps } from './thread'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mockData } from '../../../../util/thread_data'
import useSWR, { mutate } from 'swr'
import gqlFetcher from '../../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'

export default {
	title: 'Common/Community/Thread/Thread',
	component: Thread,
} as ComponentMeta<typeof Thread>

const idByStoryName = {
	'Thread without title': '63e4055f25783eaaa4f0879c',

	Default: '63e3f79631115da3472a72dc',
}

const getIdByStoryName = (storyName: string) => {
	const id = idByStoryName[storyName]
	return id || idByStoryName.Default
}

const useUpvoteThread = (moduleID, userProfileID) => {
	mutate(async () => {
		fetch('http://emse.dev.joeldesante.com:4000/graphql', {
			method: 'POST',
			body: JSON.stringify({
				query: gql`
					mutation UpvoteThread($input: ID!, $userID: ID!) {
						upvoteThread(id: $input, userID: $userID) {
							id
						}
					}
				`,
				variables: {
					input: moduleID,
					userID: userProfileID,
				},
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}, false)
}

const useThreadData = (threadId: string, usrprofileId: string | number) => {
	const { data, error } = useSWR(
		{
			query: gql`
        {
          thread(input: { id: "${threadId}" }) {
            id
            title
            body
            upvotes {
              openID
              id
            }
          }
        }
		`,
			variables: {
				id: threadId,
			},
		},
		gqlFetcher
	)
	const isUpvoted = data?.thread[0].upvotes.some(
		(upvote) => upvote.id === usrprofileId
	)

	return { data, error, isUpvoted }
}

const Template: ComponentStory<typeof Thread> = ({
	upvotes,
	title,
	storyName,
	userProfile,
	...args
}: ThreadProps & { storyName: string }) => {
	const threadId = getIdByStoryName(storyName)

	const { data, error, isUpvoted } = useThreadData(threadId, userProfile.id)
	const thread = React.useMemo(() => data?.thread?.[0], [data])

	if (!thread) return <p>Loading...</p>
	if (error) return <p>Failed to load content...</p>

	return (
		<Thread
			{...args}
			id={thread.id}
			title={title || thread.title}
			body={thread.body}
			handleUpvote={() => useUpvoteThread(thread.id, userProfile.id)}
			upvotes={upvotes || thread.upvotes.length}
			userProfile={userProfile}
			isUpvoted={isUpvoted}
		/>
	)
}

export const Sample = Template.bind({})
Sample.storyName = 'Default'
Sample.args = {
	storyName: Sample.storyName,
	userProfile: {
		id: '63e51cbd14406c6ad63f73a6',
		firstName: 'joel',
		lastName: 'desante',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	},
}

export const Comment = Template.bind({})
Comment.storyName = 'Thread without title'
Comment.args = {
	storyName: Comment.storyName,
	userProfile: {
		id: '63e51cbd14406c6ad63f73a6',
		firstName: 'joel',
		lastName: 'desante',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	},
	title: undefined,
}

// export const NoUpvote = Template.bind({})
// NoUpvote.storyName = 'Thread with no upvotes'
// NoUpvote.args = { storyName: NoUpvote.storyName, ...Sample.args, upvotes: 0 }

const SecondaryTemplate: ComponentStory<typeof Thread> = (args) => {
	return (
		<>
			{mockData.slice(0, 5).map((thread, threadIndex) => (
				<Thread key={threadIndex} {...args} {...thread} />
			))}
		</>
	)
}

export const MultipleThreads = SecondaryTemplate.bind({})
MultipleThreads.storyName = 'List of threads'
MultipleThreads.args = {
	...Sample.args,
}
