import { Sidebar } from '../components/Sidebar'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'Molecules/Sidebar',
	component: Sidebar,
	argTypes: {
		authenticated: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args:any) => {
	return (
		<BrowserRouter>
			<Sidebar {...args} />
		</BrowserRouter>
	)
}

export const Primary = Template.bind({})
Primary.args = {}
