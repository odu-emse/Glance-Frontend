import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ChatHistory } from '../components/ChatHistory'

export default {
	title: 'Molecules/Chat History',
	component: ChatHistory,
} as ComponentMeta<typeof ChatHistory>

const onHandle = () => {
	console.log('it works!')
}

const Template: ComponentStory<typeof ChatHistory> = (args) => (
	<div className="w-1/4">
		<ChatHistory {...args} handle={onHandle} />
	</div>
)

export const Primary = Template.bind({})
Primary.args = {
	messages: [
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1664376815,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: true,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1231211842,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1748347589,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1341465382,
			newNotification: false,
		},
		{
			name: 'AVantika',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			selected: false,
			timestamp: 1034500193,
			newNotification: false,
		},
	],
}
