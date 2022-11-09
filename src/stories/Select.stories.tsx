import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Select, dropdownProps } from '../components/Select'

export default {
	title: 'Molecules/Select Card',
	component: Select,
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (
	args: dropdownProps
) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
    options : ["Relevance", "Popularity","Latest"]
}