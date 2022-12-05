import * as React from 'react'
import { PostButton } from '../components/Thread'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Atoms/Post Button',
	component: PostButton,
	argTypes: {},
} as ComponentMeta<typeof PostButton>

const Template: ComponentStory<typeof PostButton> = (args: any) => (
	<PostButton {...args} />
)

export const Default = Template.bind({})
