import * as React from 'react'
import { TextArea } from '../components/TextArea'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Molecules/Text Area',
	component: TextArea,
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => (
	<TextArea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	
}


