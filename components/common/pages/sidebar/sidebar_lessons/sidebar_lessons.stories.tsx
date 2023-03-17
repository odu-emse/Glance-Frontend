import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarLessons, SidebarLessonsProps } from './sidebar_lessons'

export default {
	title: 'Common/Sidebar/Sidebar',
	component: SidebarLessons,
	argTypes: {},
} as ComponentMeta<typeof SidebarLessons>

const Template: ComponentStory<typeof SidebarLessons> = (args:SidebarLessonsProps) => {
	const [open, setOpen] = React.useState(true)
	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<button onClick={() => setOpen(!open)}>
				{open ? 'Close panel' : 'Open panel'}
			</button>
			<SidebarLessons {...args} handle={setOpen} open={open} />
		</div>
	)
}

export const Default = Template.bind({})
Default.args = {}

