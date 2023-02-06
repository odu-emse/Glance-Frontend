import * as React from 'react'
import { ModuleCard } from './module_card'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/AdminPanel/ModuleCard',
	component: ModuleCard,
	argTypes: {},
} as ComponentMeta<typeof ModuleCard>

const Template: ComponentStory<typeof ModuleCard> = (args: any) => (
	<ModuleCard {...args} />
)

export const Default: ComponentStory<typeof ModuleCard> = Template.bind({})
Default.args = {}

