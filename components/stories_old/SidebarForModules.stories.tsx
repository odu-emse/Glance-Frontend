import { SidebarForModules } from '../components_old/Sidebar/SidebarForModules'
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Molecules/SidebarForModules',
	component: SidebarForModules,
} as ComponentMeta<typeof SidebarForModules>

const Template: ComponentStory<typeof SidebarForModules> = (args) => (
	<SidebarForModules {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	topics: [
		{
			title: 'Topic 1',
			lessons: [
				{
					label: 'Module1',
					url: 'lesonlink/module-1',
					checked: true,
				},
				{
					label: 'Module2',
					url: 'lessonlink/module-2',
					checked: false,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
			],
		},
		{
			title: 'Topic 2',
			lessons: [
				{
					label: 'Module1',
					url: 'lesonlink/module-1',
					checked: true,
				},
				{
					label: 'Module2',
					url: 'lessonlink/module-2',
					checked: true,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
			],
		},
		{
			title: 'Topic 2',
			lessons: [
				{
					label: 'Module1',
					url: 'lesonlink/module-1',
					checked: true,
				},
				{
					label: 'Module2',
					url: 'lessonlink/module-2',
					checked: true,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
				{
					label: 'Module1',
					url: 'lesonlink/module-1',
					checked: true,
				},
				{
					label: 'Module2',
					url: 'lessonlink/module-2',
					checked: true,
				},
				{
					label: 'Module3',
					url: 'lessonlink/module-3',
					checked: false,
				},
			],
		},
	],
}
