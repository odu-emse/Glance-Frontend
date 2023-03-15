import * as React from 'react'
import { CommentsHierarchy } from './comments_hierarchy'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Community/Thread/Comments Hierarchy',
	component: CommentsHierarchy,
} as ComponentMeta<typeof CommentsHierarchy>

const Template: ComponentStory<typeof CommentsHierarchy> = (args) => (
	<CommentsHierarchy {...args} />
)

export const Sample = Template.bind({})
Sample.storyName = 'Default'
Sample.args = {
	thread: {
		id: '63e3f79631115da3472a72dc',
		title: 'this is testing',
		body: 'testin ALMP-555',
		author: {
			id: '63dabf67020a625cc55f64ff',
		},
		comments: [
			{
				id: '63e3fe58020f05bcaf82604e',
				body: 'working?',
				comments: [],
			},
			{
				id: '63e4055f25783eaaa4f0879c',
				body: 'interactions?',
				comments: [
					{
						id: '640f6bcf75b936d7dc006497',
						body: 'I like chicken fried.',
						comments: [
							{
								id: '640f78aff23a653956655861',
								body: 'Yea, and cold beers on a friday night.',
							},
							{
								id: '640f78b7f23a653956655862',
								body: 'And your mom.',
							},
							{
								id: '640f78c3f23a653956655863',
								body: 'Jesus and trucks. Cause yee haw.',
							},
						],
					},
				],
			},
			{
				id: '63e4064f37431a4ffe1453aa',
				body: 'im so silly',
				comments: [],
			},
			{
				id: '63e406a5821b672ca65b3ebb',
				body: 'now im really making sure its working',
				comments: [],
			},
			{
				id: '63e40873821b672ca65b3ebc',
				body: 'this wouldnt work would it?',
				comments: [],
			},
		],
	},
}
