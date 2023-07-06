import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Button } from './button'

export default {
	title: 'Common/Buttons/Button',
	component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'Button',
	variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button',
	variant: 'secondary',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Button',
}
export const Width = Template.bind({})
Width.args = {
	label: 'Button',
}
