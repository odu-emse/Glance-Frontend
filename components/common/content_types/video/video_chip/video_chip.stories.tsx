import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { VideoChip } from './video_chip'

export default {
	title: 'Common/Content Types/Video Chip',
	component: VideoChip,
	argTypes: {},
} as ComponentMeta<typeof VideoChip>

const Template: ComponentStory<typeof VideoChip> = (args) => (
	<VideoChip {...args} />
)

export const Sample = Template.bind({})
Sample.args = {
	text: 'Hello there',
	timestamp: 89,
}
