import * as React from 'react'
import { AssignmentCard } from '../components/Assignment'
import type { AssignmentProps } from '../components/Assignment'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Atoms/Assignment Card', //providing path
	component: AssignmentCard,
	argTypes: {
		questionCount: {
			control: 'number',
			description:
				'The count for total of questions for this assignment card',
		},
		moduleIdentifier: {
			control: 'text',
			description: 'The module Identifier of this assignment card',
		},
		moduleName: {
			control: 'text',
			description: 'The module name of this assignment card',
		},
		assignmentName: {
			control: 'text',
			description: 'The assignment name of this assignment card',
		},
	},
	//argTypes: {}, giving user the control based on the Prop-types
	// i.g.
	// argTypes: {
	//    size: {control: 'select'}
	// }
} as ComponentMeta<typeof AssignmentCard>

const Template: ComponentStory<typeof AssignmentCard> = (
	args: AssignmentProps
) => <AssignmentCard {...args} />
//with {}, it doesn't automatically return

export const Primary: ComponentStory<typeof AssignmentCard> = Template.bind({})
Primary.args = {
	questionCount: 68,
	moduleIdentifier: 'M 137G',
	moduleName: 'Introduction to Organizational Analysis',
	assignmentName: 'Assignment 4',
}
export const Secondary: ComponentStory<typeof AssignmentCard> = Template.bind({})
Secondary.storyName = 'Single Question'
Secondary.args = {
	questionCount: 1,
	moduleIdentifier: 'ENMA 601',
	moduleName: 'Analysis of Organizational Systems',
	assignmentName: 'Exam 2',
}

export const Tertiary: ComponentStory<typeof AssignmentCard> = Template.bind({})
Tertiary.storyName = 'Lower Case Module Identifier'
Tertiary.args = {
	questionCount: 37,
	moduleIdentifier: 'enma 604',
	moduleName: 'Project Management',
	assignmentName: 'Assignment 2',
}
