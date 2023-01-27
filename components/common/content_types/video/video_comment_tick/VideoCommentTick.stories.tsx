import * as React from 'react'
import {ComponentMeta, ComponentStory} from "@storybook/react";
import { VideoCommentTick } from './VideoCommentTick';

export default {
	title: 'Common/Content Types/Video Comment Tick',
	component: VideoCommentTick,
	argTypes: {},
} as ComponentMeta<typeof VideoCommentTick>

const Template: ComponentStory<typeof VideoCommentTick> = (args) => <VideoCommentTick {...args} />

export const Sample = Template.bind({})
Sample.args = {
	icon: 'a',
}
