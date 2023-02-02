import * as React from 'react'
import { Login }from './login'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Login',
	component: Login,
	argTypes: {
	
	},
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args: any) => (
	<Login />
)

export const Primary: ComponentStory<typeof Login> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {

}


