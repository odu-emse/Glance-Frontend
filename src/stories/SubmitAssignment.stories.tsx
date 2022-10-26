import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Assignment } from '../components/Assignment/SubmitAssignment'

export default {
	title: 'Molecules/Assignments',
	component: Assignment,
} as ComponentMeta<typeof Assignment>

const Template: ComponentStory<typeof Assignment> = (args) => {
	const [open, setOpen] = React.useState(true)
	return(
		<div>
			<Assignment {...args} handle={setOpen} open={open} />
		</div>
	)
}

export const Assignment1 = Template.bind({})
Assignment1.storyName = 'Default'
Assignment1.args = {
	assignmentTitle: 'Assignment-1',
	assignmentDetails: 'No additional details are provided for this assignment.',
	dueDate: 'No date added'
}

export const Assignment2 = Template.bind({})
Assignment2.storyName = 'Secondary'
Assignment2.args = {
	assignmentTitle: 'Assignment-2',
	assignmentDetails: 'No additional details are provided for this assignment.',
	dueDate: 'No date added',
	assignmentScore: 100
}