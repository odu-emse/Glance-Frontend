import * as React from 'react'
import {VideoPlayer} from '../components/Video'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'Atoms/Video',
	component: VideoPlayer,
	argTypes: {},
} as ComponentMeta<typeof VideoPlayer>

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer {...args} />

export const Sample = Template.bind({})
Sample.args = {
	source: '/friday.mp4',
	captions: '/friday.vtt',
	type: 'video/mp4'
}
