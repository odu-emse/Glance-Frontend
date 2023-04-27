import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThreadCreation, ThreadCreationProps } from './thread_page'

export default {
	title: 'Pages/Communities/Thread/Thread Creation',
	component: ThreadCreation,
	argTypes: {},
}

const Template: ComponentStory<typeof ThreadCreation> = (
	args: ThreadCreationProps
) => <ThreadCreation {...args} />

export const Primary: ComponentStory<typeof ThreadCreation> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
