import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MessageInput } from '../components_old/MessageInput'

export default {
	title: 'Molecules/Message Input',
	component: MessageInput,
} as ComponentMeta<typeof MessageInput>

const Template: ComponentStory<typeof MessageInput> = (args) => (
	<MessageInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	message: [
		{
			messages: 'Dropping a module',
		},
		{
			messages: 'Enroll in a module',
		},
		{
			messages: 'Schedule a meeting with an advisor',
		},
		{
			messages: 'Change my desired degree',
		},
	],
}
