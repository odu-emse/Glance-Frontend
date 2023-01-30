
import * as React from 'react'
import { PagenotFound } from '../components/Pages'
import type { PagenotFoundProps } from '../components/Pages'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Atoms/404 Page..',
	component: PagenotFound,
	argTypes: {
	
	},
} as ComponentMeta<typeof PagenotFound>

const Template: ComponentStory<typeof PagenotFound> = (args: PagenotFoundProps) => {

	return <PagenotFound {...args} />
}

export const Primary: ComponentStory<typeof PagenotFound> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {

}


