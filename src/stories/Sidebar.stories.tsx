import { Sidebar } from '../components/Sidebar'
import * as React from 'react'

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
	argTypes: {
		open: { type: 'boolean', control: 'boolean', defaultValue: false },
		setOpen: { type: 'func', control: 'func' },
		dropdown: { type: 'boolean', control: 'boolean', defaultValue: false },
		setDropdown: { type: 'func', control: 'func' },
		authenticated: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
		setAuthenticated: { type: 'func', control: 'func' },
	},
}

const Template = (args) => {
	return <Sidebar {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
