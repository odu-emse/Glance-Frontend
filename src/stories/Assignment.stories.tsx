import * as React from 'react'
import { Assignment } from '../components/Assignment'

export default {
	title: 'Atoms/AssignmentCard', //providing path
	component: Assignment,
	argTypes: {},
	//argTypes: {}, giving user the control based on the Prop-types
	// i.g.
	// argTypes: {
	//    size: {control: 'select'}
	// }
}

const Template = (args) => <Assignment {...args} />
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
