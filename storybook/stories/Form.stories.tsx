import * as React from 'react'
import { Form, Input } from '../components/FormElements'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'Molecules/Form',
	component: Form,
	args: {},
	argTypes: {},
} as ComponentMeta<typeof Form>

const Template:ComponentStory<typeof Form> = (args) => {
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	})
	return (
		<Form {...args}>
			<div className="flex justify-between gap-5">
				<Input
					label="First Name"
					name="firstName"
					type="text"
					onChange={(s) => {
						setFormData({ ...formData, firstName: s })
					}}
					defaultValue={formData.firstName}
				/>
				<Input
					label="Last Name"
					name="lastName"
					type="text"
					onChange={(s) => {
						setFormData({ ...formData, lastName: s })
					}}
					defaultValue={formData.lastName}
				/>
			</div>
			<Input
				label="Email"
				name="email"
				type="email"
				onChange={(s) => {
					setFormData({ ...formData, email: s })
				}}
				defaultValue={formData.email}
			/>
			<div className="flex justify-between gap-5">
				<Input
					label="Password"
					name="password"
					type="password"
					onChange={(s) => {
						setFormData({ ...formData, password: s })
					}}
					defaultValue={formData.password}
				/>
				<Input
					label="Password Confirmation"
					name="passwordConfirmation"
					type="password"
					onChange={(s) => {
						setFormData({
							...formData,
							passwordConfirmation: s,
						})
					}}
					defaultValue={formData.passwordConfirmation}
				/>
			</div>
		</Form>
	)
}
export const Default:ComponentStory<typeof Form> = Template.bind({})
Default.args = {}
