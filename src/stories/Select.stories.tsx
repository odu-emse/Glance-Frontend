import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from '../components/Select'
import type { dropdownProps } from '../components/Select'

export default {
	title: 'Atoms/Select',
	component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: dropdownProps) => {
	return <Select {...args} />
}

export const Primary = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	options: ['Relevance', 'Popularity', 'Latest'],
	handle: (event: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value)
	},
	label: 'Sort by',
	multiple: false,
	size: 1,
	required: false,
	disabled: false,
	name: 'sort',
	id: 'sort-input',
	autoFocus: false,
}

export const Secondary = Template.bind({})
Secondary.storyName = 'No label'
Secondary.args = {
	options: ['Hot Posts', 'Controversial', 'Latest', 'Top All Time'],
}

export const Tertiary = Template.bind({})
Tertiary.storyName = 'With options as objects'
Tertiary.args = {
	...Primary.args,
	options: [
		{
			label: 'Relevance',
			value: 'relevance',
		},
		{
			label: 'Popularity',
			value: 'popularity',
		},
		{
			label: 'Latest',
			value: 'latest',
		},
	],
}
