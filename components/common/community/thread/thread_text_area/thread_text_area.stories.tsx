import * as React from 'react'
import { ThreadTextArea } from './thread_text_area'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Common/Community/Thread/Thread Text Area',
	component: ThreadTextArea,
	argTypes: {},
} as ComponentMeta<typeof ThreadTextArea>

const Template: ComponentStory<typeof ThreadTextArea> = (args: any) => (
	<ThreadTextArea {...args} />
)

export const Default = Template.bind({})
