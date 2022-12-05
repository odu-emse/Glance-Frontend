import { Button } from '../components/Button'
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { HiLightningBolt } from 'react-icons/hi'

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'base', 'large'],
			description: 'The size of the button.',
		},
		variant: {
			control: 'select',
			description: 'Decides the which variant should be rendered.',
		},
		shape: {
			control: 'select',
			options: ['regular', 'pill'],
			description: 'Decides the shape of the button.'
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

const Template: ComponentStory<typeof Button> = (args) => <Button data-testid="button" {...args} />

export const Primary = Template.bind({})
Primary.args = {
	variant: 'primary',
	loading: false,
	size: 'base',
	disabled: false,
}

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
	variant: 'primary',
	loading: false,
	size: 'base',
	disabled: false,
	children: (
		<>
			<HiLightningBolt />
			<p>Hello World</p>
		</>
	),
}

export const Secondary = Template.bind({})
Secondary.args = {
	variant: 'secondary',
}

export const Transparent = Template.bind({})
Transparent.args = {
	variant: 'transparent',
}

export const Pill = Template.bind({})
Pill.args = {
	...Primary.args,
	shape: 'pill',
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
	variant: 'primary',
	size: 'base',
	loading: true,
	disabled: false,
}
export const Disabled = Template.bind({})
Disabled.args = {
	variant: 'primary',
	size: 'base',
	loading: false,
	disabled: true,
}
