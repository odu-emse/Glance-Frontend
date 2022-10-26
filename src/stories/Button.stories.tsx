import { Button } from '../components/Button'
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		label: {
			control: 'text',
			description:
				'The text to be rendered inside of the button component.',
		},
		size: {
			control: 'select',
			options: ['small', 'base', 'large'],
			description: 'The size of the button.',
		},
		primary: {
			control: 'boolean',
			description:
				'Decides whether the button is the a main call to action on the page or just a supplementary element.',
		},
		loading: {
			control: 'boolean',
			description:
				'Describes the state of the page or an element that is related to the button.',
		},
		disabled: { control: 'boolean', description: 'Disables the button' },
		type: {
			control: 'select',
			options: ['button', 'submit', 'reset'],
			defaultValue: 'button',
			description: 'The HTML type of the button to be used.',
		},
		onClick: {
			control: 'action',
			description:
				'The function to be called when the button is clicked.',
		},
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	loading: false,
	size: 'base',
	disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
	primary: false,
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	loading: false,
	disabled: false,
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	loading: false,
	disabled: false,
}
export const Loading = Template.bind({})
Loading.args = {
	primary: true,
	size: 'base',
	loading: true,
	disabled: false,
}
export const Disabled = Template.bind({})
Disabled.args = {
	primary: true,
	size: 'base',
	loading: false,
	disabled: true,
}
