import * as React from 'react'
import { Login } from './login'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SessionProvider } from 'next-auth/react'

export default {
	title: 'Pages/Login/Login',
	component: Login,
	argTypes: {},
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args: any) => (
	<SessionProvider>
		<Login />
	</SessionProvider>
)

export const Primary: ComponentStory<typeof Login> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
