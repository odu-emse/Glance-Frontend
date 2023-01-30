import * as React from 'react'
import { PagenotFound } from './PagenotFound'
import type { PagenotFoundProps } from './PagenotFound'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Pages/Errors/Page Not Found',
	component: PagenotFound,
	argTypes: {},
} as ComponentMeta<typeof PagenotFound>

const Template: ComponentStory<typeof PagenotFound> = (
	args: PagenotFoundProps
) => {
	return <PagenotFound {...args} />
}

export const Primary: ComponentStory<typeof PagenotFound> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
