import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from './loader'

export default {
	title: 'Common/Loader/Loader',
	component: Loader,
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: 'Loader',
}
