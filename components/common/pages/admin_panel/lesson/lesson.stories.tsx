import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleLesson, ModuleLessonProps } from './lesson'

export default {
	title: 'Common/Pages/Admin Panel/Module Page Editor/Lesson',
	component: ModuleLesson,
	argTypes: {},
} as ComponentMeta<typeof ModuleLesson>

const Template: ComponentStory<typeof ModuleLesson> = (args: ModuleLessonProps) => (
	<ModuleLesson {...args} />
)

export const Default: ComponentStory<typeof ModuleLesson> = Template.bind({})
Default.args = {
	lessonName: "Introduction to Dynamic Web Content",
    lessonId: 1
}
