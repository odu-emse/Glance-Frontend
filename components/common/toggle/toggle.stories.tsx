import * as React from 'react'
import { ToggleSwitch } from './toggle'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
// import { action } from '@storybook/addon-actions';

export default {
	title: 'function/toggle option',
	component: ToggleSwitch,
	argTypes: {
		checked: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof ToggleSwitch>
const Template: ComponentStory<typeof ToggleSwitch> = (args: any) => {
	const [isChecked, setIsChecked] = React.useState(false)
	return <ToggleSwitch {...args} handle={setIsChecked} checked={isChecked} />
}

export const Default: ComponentStory<typeof ToggleSwitch> = Template.bind({})
Default.args = {
	identifier: 'name',
	label: 'name',
	variant: 'primary',
	checked: false,
	size: 'base',
	status: false,
	disabled: false,
}
