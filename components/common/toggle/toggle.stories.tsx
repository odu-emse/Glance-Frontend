import * as React from 'react'
import { ToggleSwitch } from './toggle'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
// import { action } from '@storybook/addon-actions';

export default {
	title: 'function/toggle option',
	component: ToggleSwitch,
	argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>
const Template: ComponentStory<typeof ToggleSwitch> = (args: any) => (
	<ToggleSwitch {...args} />
)
export const Default: ComponentStory<typeof ToggleSwitch> = Template.bind({})
Default.args = {
	identifier: 'name',
	label: 'name',
	variant: 'primary',
	status: false,
	size: 'base',
	disabled: false,
	onChange: false,
}