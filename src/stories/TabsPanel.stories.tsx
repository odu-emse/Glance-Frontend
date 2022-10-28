import * as React from 'react'
import { TabsPanel } from '../components/TabsPanel'

export default {
	title: 'Molecules/TabsPanel',
	component: TabsPanel,
	argTypes: {
		
	},
}

const Template = (args) => {
	return (
			<TabsPanel {...args} />
	)
}

export const Course = Template.bind({})
Course.args = {
	moduleInfo: [
		{
			title: "ENMA 600",
			assignment: [
				{
					type: 'Assignment Type 1',
					average: 78	
				},
				{
					type: 'Assignment Type 2',
					average: 94
				},
				{
					type: 'Assignment Type 3',
					average: 62
				}
			]
		},
		{
			title: "ENMA 601",
			assignment: [
				{
					type: 'Assignment Type 64',
					average: 45
				},
				{
					type: 'Assignment Type 2',
					average: 67
				},
				{
					type: 'Assignment Type 3',
					average: 87
				},
			]
		},
		{
			title: "ENMA 602",
			assignment: [
				{
					type: 'Assignment Type 1',
					average: 61
				},
				{
					type: 'Assignment Type 2',
					average: 100
				},
				{
					type: 'Assignment Type 3',
					average: 45
				},
			]
		},		
		{
			title: "ENMA 603",
			assignment: [
				{
					type: 'Assignment Type 1',
					average: 76
				},
				{
					type: 'Assignment Type 2',
					average: 23
				},
				{
					type: 'Assignment Type 3',
					average: 65
				},
				{
					type: 'Assignment Type 4',
					average: 34
				}
			]
		},		
	]
}
