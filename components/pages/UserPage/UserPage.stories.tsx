import * as React from 'react'
import { UserPage } from './UserPage'
import type { UserPageProps } from '../components/UserPage'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Pages/User Page',
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