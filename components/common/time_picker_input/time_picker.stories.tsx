import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TimePickerInput } from './time_picker'


export default {
	title: 'Common/TimePicker Input',
	component: TimePickerInput,
} as ComponentMeta<typeof TimePickerInput>

const Template: ComponentStory<typeof TimePickerInput> = (args) => (
	<TimePickerInput {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	
}
