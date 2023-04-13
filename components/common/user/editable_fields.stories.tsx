import * as React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import EditableField from '@/common/user/editable_field';

export default {
	title: 'common/Editable Field',
	component: EditableField,
} as Meta<typeof EditableField>
const Template: StoryFn<typeof EditableField> = (args) => {
	return <EditableField {...args} />
}

export const Default: StoryFn<typeof EditableField> = Template.bind({})
Default.args = {
	type: 'text',
	isEditing: false,
	inputDetails: {
		type: 'text',
		placeholder: 'placeholder',
		defaultValue: 'defaultValue',
		label: 'label',
		name: 'name',
		onChange: (e: string) => {
			console.log(e)
		},
		className: 'border-royalblue focus:border-royalblue border px-1 my-1 bg-white'
	}
}
