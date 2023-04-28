import * as React from 'react'
import { useState } from 'react'
import { Input, InputProps } from './input'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Forms/Inputs/Inputs',
	component: Input,
	argTypes: {
		onChange: {
			control: false,
		},
		role: {
			control: 'text',
		},
		description: {
			control: false,
		},
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
	const [value] = useState(args.defaultValue ?? '')
	const [options, setOptions] = useState([])

	return (
		<Input
			{...args}
			onChange={(value) => {
				const isVisable = value.length > 0

				if (isVisable) {
					setOptions((prev) => [
						'result1',
						'result2',
						'result3',
						'result4',
					])
				} else {
					setOptions((prev) => [])
				}
			}}
			options={options}
			defaultValue={value}
		/>
	)
}

export const Default = Template.bind({})
Default.args = {
	label: 'Label',
	name: 'text-input',
	type: 'text',
	ariaLabel: 'Text input field',
}
export const Email = Template.bind({})
Email.args = {
	label: 'Email address',
	name: 'email',
	role: 'input',
	type: 'email',
}

// Email.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
//
// 	const label = canvas.getByText('Email address')
// 	userEvent.type(canvas.getByRole('input'), 'email@provider.com')
// 	expect(label.classList.contains('peer-focus:text-blue-600'))
// }

export const Descriptive = Template.bind({})
Descriptive.args = {
	...Email.args,
	description: (
		<>
			For more information on how your data is stored and accessed
			throughout the application, please visit our{' '}
			<a
				href="#"
				className="font-medium text-blue-600 hover:underline dark:text-blue-500"
			>
				Privacy Policy
			</a>
			.
		</>
	),
}

export const Disabled = Template.bind({})
Disabled.args = {
	...Email.args,
	disabled: true,
}
// TODO: Rewrite this test to use cypress

// Disabled.play = async ({ canvasElement }) => {
// 	const canvas = within(canvasElement)
//
// 	const input = canvas.getByRole('input')
// 	userEvent.type(input, 'email@provider.com')
// 	expect(input.textContent).toBe('')
// 	expect(input).toBeDisabled()
// }

export const ErrorState = Template.bind({})
ErrorState.args = {
	...Email.args,
	error: true,
}

export const ErrorStateWithDescription = Template.bind({})
ErrorStateWithDescription.args = {
	...Email.args,
	error: true,
	description:
		'The error occurred while we were processing your request. Please try again and contact your system administrator if this issue persists.',
}

export const Search = Template.bind({})
Search.args = {
	label: 'Search',
	name: 'floating_search',
	role: 'search',
	type: 'search',
	// options: ['Items', 'Items1']
}
export const Radio = Template.bind({})
Radio.args = {
	type: 'radio',
	name: 'radio',
	content: 'Choice1',
}
export const Checkbox = Template.bind({})
Checkbox.args = {
	type: 'checkbox',
	name: 'checkbox',
	content: 'Choice1',
}
