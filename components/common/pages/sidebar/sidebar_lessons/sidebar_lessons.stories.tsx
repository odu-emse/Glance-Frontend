import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SidebarLessons, SidebarLessonsProps } from './sidebar_lessons'

	
	export default {
		title: 'Common/Sidebar/Sidebar',
		component: SidebarLessons,
		argTypes: {},
	} as ComponentMeta<typeof SidebarLessons>
	
   const Template: ComponentStory<typeof SidebarLessons> = (args: SidebarLessonsProps) => (
		<SidebarLessons {...args} />
	) 

	
	export const Default = Template.bind({})
	Default.args = {
		
	}
	

