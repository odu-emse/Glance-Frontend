import * as React from 'react'
import { Lessonpage } from '../lesson_page/lessonpage'
import type { lessonpageProps } from '../lesson_page/lessonpage'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Pages/Admin Panel/Lesson Page',
	component: Lessonpage,
	argTypes: {},
} as ComponentMeta<typeof Lessonpage>

const Template: ComponentStory<typeof Lessonpage> = (args: lessonpageProps) => (
	<Lessonpage {...args} />
)

export const Primary: ComponentStory<typeof Lessonpage> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	options: ['', 'Quiz', 'Pdf', 'Video'],
}
