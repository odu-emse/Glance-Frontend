import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentArea } from './content_area'

export default {
	title: 'Common/Admin Panel/Content Area',
	component: ContentArea,
	argTypes: {},
} as ComponentMeta<typeof ContentArea>

const Template: ComponentStory<typeof ContentArea> = (args) => (
	<ContentArea {...args} />
)

export const Standard: ComponentStory<typeof ContentArea> = Template.bind({})
Standard.storyName = 'Upload'
Standard.args = {}
