import * as React from 'react'
import { LessonLink } from './lesson_link'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Forms/Inputs/Lesson Link',
	component: LessonLink,
} as ComponentMeta<typeof LessonLink>

const Template: ComponentStory<typeof LessonLink> = (args) => (
	<LessonLink {...args} />
)

export const Primary = Template.bind({})
// P.storyName = 'Primary'
Primary.args = {
	label: 'Module1',
	url: 'lesonlink/module-1',
	// checked: true,
}
