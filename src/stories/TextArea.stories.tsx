import * as React from 'react'
import { TextArea } from '../components/TextArea'
import type { TextAreaProps } from '../components/TextArea'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

export default {
	title: 'Atoms/Text Area',
	component: TextArea,
	argTypes: {
		handle: { action: 'handle' },
		value: { control: 'text' },
		id: { control: 'text' },
		role: { control: 'text' },
		name: { control: 'text' },
		rows: { control: 'range' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		maxLength: { control: 'range' },
		required: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		wrap: { control: 'text' },
		autofocus: { control: 'boolean' },
	},
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => {
	const [value, setValue] = useState('')
	const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(evt.target?.value)
	}
	return <TextArea {...args} value={value} handle={handleChange} />
}

export const Primary: ComponentStory<typeof TextArea> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	value: 'This is a default value text for the text area component.',
	id: 'text-area',
	role: 'textbox',
	name: 'text-area',
	rows: 1,
	placeholder: 'This is a placeholder text for the text area component.',
	disabled: false,
	maxLength: 1000,
	required: false,
	readOnly: false,
	wrap: 'soft',
	autofocus: false,
}

export const Disabled: ComponentStory<typeof TextArea> = Template.bind({})
Disabled.storyName = 'Disabled TextArea'

Disabled.args = {
	...Primary.args,
	disabled: true,
}

export const WithLabel: ComponentStory<typeof TextArea> = Template.bind({})
WithLabel.storyName = 'TextArea with a label on the top'

WithLabel.args = {
	...Primary.args,
	label: 'Basic Text Area',
}

export const MaxLength: ComponentStory<typeof TextArea> = Template.bind({})
MaxLength.storyName = 'Specific Max Length'
MaxLength.args = {
	...Primary.args,
	maxLength: 10,
	value: 'This is a default value text for the text area component.',
}
