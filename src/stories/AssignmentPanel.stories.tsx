import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { AssignmentPanel } from '../components/Assignment'

export default {
	title: 'Molecules/AssignmentPanel',
	component: AssignmentPanel,
	argTypes: {
		open: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: true,
		},
	},
} as ComponentMeta<typeof AssignmentPanel>

const Template: ComponentStory<typeof AssignmentPanel> = (args) => {
	const [open, setOpen] = React.useState(true)
	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<button onClick={() => setOpen(!open)}>
				{open ? 'Close panel' : 'Open panel'}
			</button>
			<AssignmentPanel {...args} handle={setOpen} open={open} />
		</div>
	)
}

export const AssignmentPanelTemplate = Template.bind({})
AssignmentPanelTemplate.storyName = 'Assignment Panel'
AssignmentPanelTemplate.args = {
	moduleInformation: {
		connections: [
			{
				moduleTitle: 'ENMA 601 Module 400-489',
				assignmentTitle: 'Section 3',
			},
			{
				moduleTitle: 'ENMA 601 Module 400-489',
				assignmentTitle: 'Section 15',
			},
			{
				moduleTitle: 'ENMA 601 Module 400-489',
				assignmentTitle: 'Section 8',
			},
			{
				moduleTitle: 'ENMA 601 Module 400-489',
				assignmentTitle: 'Section 12',
			},
			{
				moduleTitle: 'ENMA 601 Module 400-489',
				assignmentTitle: 'Section 14',
			},
		],
		deps: ['ENMA 601 Module 400-489', 'ENMA 601 Assignment 1-3'],
		software: [
			'Adobe Acrobat / Flash enabled browser',
			'Google Chrome 61+',
		],
		moduleTitle: 'Introduction to Organizational Analysis',
		assignmentTitle: 'Assignment 4',
	},
}
