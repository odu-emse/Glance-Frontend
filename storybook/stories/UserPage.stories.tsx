import * as React from 'react'
import { UserPage } from '../components/UserPage'
import type { UserPageProps } from '../components/UserPage'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Atoms/UserPage',
	component: UserPage,
	argTypes: {
	
	},
} as ComponentMeta<typeof UserPage>

const Template: ComponentStory<typeof UserPage> = (args: UserPageProps) => {

	return <UserPage {...args} />
}

export const Primary: ComponentStory<typeof UserPage> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {

}