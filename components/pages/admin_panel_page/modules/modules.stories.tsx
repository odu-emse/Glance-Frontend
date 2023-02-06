import * as React from 'react'
import { ModuleProps, Modules } from './modules'
import { ComponentMeta, ComponentStory } from '@storybook/react'


export default {
	title: 'Pages/AdminPanel/Modules',
	component: Modules,
	argTypes: {},
} as ComponentMeta<typeof Modules>

const Template: ComponentStory<typeof Modules> = (args) => (
	<Modules {...args} />
)

export const Default: ComponentStory<typeof Modules> = Template.bind({})
Default.args = {}
