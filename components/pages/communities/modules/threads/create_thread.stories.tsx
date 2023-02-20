import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleThread } from './create_thread'

export default {
	title: 'Pages/Communities/Modules/Threads',
	component: ModuleThread,
	argTypes: {},
} as ComponentMeta<typeof ModuleThread>

const Template: ComponentStory<typeof ModuleThread> = (args: any) => {
	return <ModuleThread {...args} />
}

export const Primary: ComponentStory<typeof ModuleThread> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
