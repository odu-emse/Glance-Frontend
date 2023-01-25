import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BubbleMessage } from '../components_old/BubbleMessage'

export default {
	title: 'Molecules/Bubble Message',
	component: BubbleMessage,
	args: {},
} as ComponentMeta<typeof BubbleMessage>

const Template: ComponentStory<typeof BubbleMessage> = (args) => (
	<BubbleMessage {...args} />
)

export const Primary = Template.bind({})
Primary.storyName = 'Default Conversation Bubble'
Primary.args = {
	message: [
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'HiI',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 2,
				image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80',
			},
			message: 'How are you',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'I am fine',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 2,
				image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=320&amp;q=80',
			},
			message: 'How do you do',
			timestamp: 1664376815,
		},
	],
	currentUserID: 1,
}
export const Secondary = Template.bind({})
Secondary.storyName = 'One Sided Conversation Bubble'
Secondary.args = {
	message: [
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Hi!',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Hello?',
			timestamp: 1664376815,
		},
		{
			user: {
				id: 1,
				image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			},
			message: 'Is this thing on?',
			timestamp: 1664376815,
		},
	],
	currentUserID: 1,
}
