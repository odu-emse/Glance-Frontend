import * as React from 'react'
import { useState } from 'react'
import { Input, InputProps } from '../components/FormElements'

export default {
	title: 'Atoms/Input',
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
}

const Template = (args: InputProps) => {
	const [value, setValue] = useState(args.defaultValue ?? '')

	return (
		<Input
			{...args}
			onChange={(...params) => {
				args.onChange(...params)
				setValue(...params)
			}}
			defaultValue={value}
		/>
	)
}

export const Email = Template.bind({})
Email.args = {
	label: 'Email address',
	name: 'floating_email',
	role: 'email',
	type: 'email',
}

export const Descriptive = Template.bind({})
Descriptive.args = {
	label: 'Email address',
	name: 'floating_email',
	role: 'email',
	type: 'email',
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
	label: 'Email address',
	name: 'floating_email',
	role: 'email',
	type: 'email',
	disabled: true,
}

export const ErrorState = Template.bind({})
ErrorState.args = {
	label: 'Email address',
	name: 'floating_email',
	role: 'email',
	type: 'email',
	error: true,
}

export const ErrorStateWithDescription = Template.bind({})
ErrorStateWithDescription.args = {
	label: 'Email address',
	name: 'floating_email',
	role: 'email',
	type: 'email',
	error: true,
	description: (
		<p className="text-red-600 dark:text-red-500">
			The error occurred while we were processing your request. Please try
			again and contact your system administrator if this issue persists.
		</p>
	),
}

export const Search = Template.bind({})
Search.args = {
	label: 'Search',
	name: 'floating_search',
	role: 'search',
	type: 'search',
}
