import * as React from 'react'
import { ToggleSwitch } from './toggle'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
// import { action } from '@storybook/addon-actions';

export default {
	title: 'common/Toggle Switch',
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
	// const disabled = false;
	return <ToggleSwitch {...args} />
}

export const Default: ComponentStory<typeof ToggleSwitch> = Template.bind({})
Default.args = {
	label: 'name',
	variant: 'primary',
	checked: false,
	size: 'large',
	disabled: true,
}
