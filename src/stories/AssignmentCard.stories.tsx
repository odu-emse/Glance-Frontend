import * as React from 'react'
import { AssignmentCard, AssignmentProps } from '../components/Assignment'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Atoms/Assignment Card', //providing path
	component: AssignmentCard,
	argTypes: {},
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

export const Primary = Template.bind({})
Primary.args = {
	questionCount: 68,
	moduleIdentifier: 'M 137G',
	moduleName: 'Introduction to Organizational Analysis',
	assignmentName: 'Assignment 4',
}
export const Secondary = Template.bind({})
Secondary.storyName = 'Single Question'
Secondary.args = {
	questionCount: 1,
	moduleIdentifier: 'ENMA 601',
	moduleName: 'Analysis of Organizational Systems',
	assignmentName: 'Exam 2',
}

export const Tertiary = Template.bind({})
Tertiary.storyName = 'Lower Case Module Identifier'
Tertiary.args = {
	questionCount: 37,
	moduleIdentifier: 'enma 604',
	moduleName: 'Project Management',
	assignmentName: 'Assignment 2',
}
