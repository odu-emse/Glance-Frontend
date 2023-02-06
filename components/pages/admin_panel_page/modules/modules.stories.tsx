import * as React from 'react'
import { Modules } from './modules'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Pages/AdminPanel/Modules',
	component: Modules,
	argTypes: {},
} as ComponentMeta<typeof Modules>

const Template: ComponentStory<typeof Modules> = (args: any) => (
	<Modules {...args} />
)

export const Primary: ComponentStory<typeof Modules> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
