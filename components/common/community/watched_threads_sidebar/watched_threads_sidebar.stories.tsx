import * as React from 'react'
import WatchedThreadSidebar from '@/common/community/watched_threads_sidebar/watched_threads_sidebar'
import type { Meta, StoryFn } from '@storybook/react'
import { WatchedSidebarList } from '@/common/community/watched_threads/watched_threads'

export default {
	title: 'Common/Community/WatchedThreadsSidebar',
	component: WatchedThreadSidebar,
} as Meta<typeof WatchedThreadSidebar>

const Template: StoryFn<typeof WatchedThreadSidebar> = () => {
	const [open, setOpen] = React.useState(true)
	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<WatchedThreadSidebar handle={setOpen} open={open}>
				<WatchedSidebarList
					title={'Watched threads'}
					threads={[
						{
							title: 'Is the sky purple or have I just been looking at my computer for too long?',
							id: 'moduleid1',
						},
						{
							title: 'What is the meaning of life?',
							id: 'moduleid2',
						},
						{
							title: 'Why did the engineer cross the road?',
							id: 'moduleid1',
						},
						{
							title: 'This is a test. Test test test',
							id: 'moduleid6',
						},
					]}
				/>
			</WatchedThreadSidebar>
		</div>
	)
}

export const Default: StoryFn<typeof WatchedThreadSidebar> = Template.bind({})
