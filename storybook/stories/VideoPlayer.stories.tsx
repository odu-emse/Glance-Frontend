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
	type: 'video/mp4',
	cards: [
		{
			id: "r3hqj23qe12ejqh2e",
			timestamp: 2,
			name: "How is life?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
		{
			id: "r3hqj23qe12ejqh2e2",
			timestamp: 5,
			name: "How is life again?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
		{
			id: "r3hqj23qe12ejqh2e3",
			timestamp: 2.5,
			name: "How is life?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
		{
			id: "r3hqj23qe12ejqh2e4",
			timestamp: 1.6,
			name: "How is life again?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
		{
			id: "r3hqj23qe12ejqh2e5",
			timestamp: 2.7,
			name: "How is life?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
		{
			id: "r3hqj23qe12ejqh2e6",
			timestamp: 5.05,
			name: "How is life again?",
			icon: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
		},
	]
}
