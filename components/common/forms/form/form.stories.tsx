import * as React from 'react'
import { Form } from './form'
import { Input } from '../inputs/input/input'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Forms/Form',
	component: Form,
	args: {},
	argTypes: {},
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => {
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
					} }
					defaultValue={formData.firstName} options={[]}				/>
				<Input
					label="Last Name"
					name="lastName"
					type="text"
					onChange={(s) => {
						setFormData({ ...formData, lastName: s })
					} }
					defaultValue={formData.lastName} options={[]}				/>
			</div>
			<Input
				label="Email"
				name="email"
				type="email"
				onChange={(s) => {
					setFormData({ ...formData, email: s })
				} }
				defaultValue={formData.email} options={[]}			/>
			<div className="flex justify-between gap-5">
				<Input
					label="Password"
					name="password"
					type="password"
					onChange={(s) => {
						setFormData({ ...formData, password: s })
					} }
					defaultValue={formData.password} options={[]}				/>
				<Input
					label="Password Confirmation"
					name="passwordConfirmation"
					type="password"
					onChange={(s) => {
						setFormData({
							...formData,
							passwordConfirmation: s,
						})
					} }
					defaultValue={formData.passwordConfirmation} options={[]}				/>
			</div>
		</Form>
	)
}
export const Default: ComponentStory<typeof Form> = Template.bind({})
Default.args = {}
