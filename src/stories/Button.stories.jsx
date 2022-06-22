import { Button } from "../components/Button"
import * as React from "react"

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		disabled: { control: "boolean", defaultValue: false },
	},
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: "Click here!",
	loading: false,
	size: "base",
	disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: "Click here!",
	loading: false,
	size: "base",
	disabled: false
}

export const Large = Template.bind({})
Large.args = {
	size: "large",
	label: "Click here!",
	loading: false,
	disabled: false
}

export const Small = Template.bind({})
Small.args = {
	size: "small",
	label: "Click here!",
	loading: false,
	disabled: false
}