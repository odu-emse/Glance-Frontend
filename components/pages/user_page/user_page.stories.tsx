import * as React from 'react'
import { UserPage } from './user_page'
import type { UserPageProps } from './user_page'

import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Pages/User Page',
	component: UserPage,
	argTypes: {},
} as ComponentMeta<typeof UserPage>

const Template: ComponentStory<typeof UserPage> = (args: UserPageProps) => {
	return <UserPage {...args} />
}

export const Primary: ComponentStory<typeof UserPage> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
