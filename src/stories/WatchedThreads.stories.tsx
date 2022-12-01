import * as React from 'react'
import { WatchedThreads } from '../components/Thread'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Atoms/WatchedThreads',
	component: WatchedThreads,
	argTypes: {},
} as ComponentMeta<typeof WatchedThreads>

const Template: ComponentStory<typeof WatchedThreads> = (args: any) => (
	<WatchedThreads {...args} />
)

export const Default = Template.bind({})
Default.args = {
	threads: [
		{
			module_name:
				'Is the sky purple or have I just been looking at my computer for too long?',
			module_id: 'moduleid1',
			thread_id: 'threadid1',
		},
		{
			module_name: 'What is the meaning of life?',
			module_id: 'moduleid2',
			thread_id: 'threadid4',
		},
		{
			module_name: 'Why did the engineer cross the road?',
			module_id: 'moduleid1',
			thread_id: 'threadid2',
		},
		{
			module_name: 'This is a test. Test test test',
			module_id: 'moduleid6',
			thread_id: 'threadid1',
		},
	],
}
