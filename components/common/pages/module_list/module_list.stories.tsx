import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleList, ModuleListProps } from './module_list'

export default {
	title: 'Common/Pages/Module List',
	component: ModuleList,
	argTypes: {},
} as ComponentMeta<typeof ModuleList>

const Template: ComponentStory<typeof ModuleList> = (args: ModuleListProps) => (
	<ModuleList {...args} />
)

export const Default = Template.bind({})
Default.args = {
	modules: [
		{
			module_name: 'Module 1',
            module_id: 'moduleid1',
		},
		{
			module_name: 'Module 2',
            module_id: 'moduleid2',
		},
		{
            module_name: 'Module 3',
            module_id: 'moduleid3',
		},
		{
            module_name: 'Module 4',
            module_id: 'moduleid4',
		},
	],
}
