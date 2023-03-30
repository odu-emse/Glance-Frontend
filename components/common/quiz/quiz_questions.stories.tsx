import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { QuizQuestion, QuizQuestionProps } from './quiz_questions'

export default {
	title: 'Common/Quiz',
	component: QuizQuestion,
	argTypes: {},
} as ComponentMeta<typeof QuizQuestion>

const Template: ComponentStory<typeof QuizQuestion> = (
	args: QuizQuestionProps
) => <QuizQuestion {...args} />

export const Default = Template.bind({})
Default.args = {
	question:
		'How do you know whether a system is in a dynamic or static state?',
	questionNumber: 1,
	options: ['Option1', 'Option2', 'Option3', 'Option4'],
}
