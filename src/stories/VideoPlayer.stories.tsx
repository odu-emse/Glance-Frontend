import * as React from 'react'
import VideoPlayer from '../components/Video/VideoPlayer'

export default {
	title: 'Atoms/Video',
	component: VideoPlayer,
	argTypes: {},
}

const Template = (args) => <VideoPlayer {...args} />

export const Sample = Template.bind({})
Sample.args = {
	src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
}
