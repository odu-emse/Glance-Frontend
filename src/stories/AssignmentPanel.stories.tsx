import * as React from 'react'
import { AssignmentPanel } from '../components/Assignment'

export default {
	title: 'Molecules/AssignmentPanel',
	component: AssignmentPanel,
	argTypes: {
		open: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: true
		}
	},
}

const Template = (args) => <AssignmentPanel {...args} />

export const Panel = Template.bind({})
Panel.args = {
	
}



