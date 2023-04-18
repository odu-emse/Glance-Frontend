import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select } from './select'
import type { dropdownProps } from './select'
import { FaBell, FaHamburger, FaTrash } from 'react-icons/fa'

export default {
	title: 'Common/Forms/Inputs/Select',
	component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args: dropdownProps) => {
	return <Select {...args} />
}

export const Primary = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	options: ['Video', 'PDF', 'Quiz', 'Audio'],
	handle: (event: React.ChangeEvent<HTMLSelectElement>) => {
		console.log(event.target.value)
	},
	label: 'Assignment Type',
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
			icon: <FaBell />,
		},
		{
			label: 'Popularity',
			value: 'popularity',
			icon: <FaHamburger />,
		},
		{
			label: 'Latest',
			value: 'latest',
			icon: <FaTrash />,
			selected: true,
		},
	],
}
