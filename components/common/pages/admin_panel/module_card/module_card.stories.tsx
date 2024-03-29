import * as React from 'react'
import { ModuleCard, ModuleCardProps } from './module_card'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Pages/Admin Panel/ModuleCard',
	component: ModuleCard,
	argTypes: {},
} as ComponentMeta<typeof ModuleCard>

const Template: ComponentStory<typeof ModuleCard> = (args: ModuleCardProps) => (
	<ModuleCard {...args} />
)

export const Default: ComponentStory<typeof ModuleCard> = Template.bind({})
Default.args = {
	id: '1',
	moduleName: 'Module A',
	instructorName: 'Instructor',
	registeredUsers: 342,
}
