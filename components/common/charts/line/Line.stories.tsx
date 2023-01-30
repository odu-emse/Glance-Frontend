import * as React from 'react'
import { LineComponent, LineProps } from './Line'

export default {
	title: 'Common/Charts/Line Chart',
	component: LineComponent,
	args: {
		width: 100,
		height: 100,
	},
	argTypes: {
		// data: { control: true },
		legendConfig: { control: false },
		legend: { control: { type: 'boolean' } },
		tooltip: { control: { type: 'boolean' } },
		outerRadius: { control: { type: 'range' } },
		innerRadius: { control: { type: 'range' } },
		paddingAngle: { control: { type: 'range' } },
		width: { control: { type: 'range' } },
		height: { control: { type: 'range' } },
		centerXCoor: { control: { type: 'range', min: 0, max: 100 } },
		centerYCoor: { control: { type: 'range', min: 0, max: 100 } },
	},
}

const Template = (args: LineProps) => (
	<div className="w-full h-96">
		<LineComponent {...args} />
	</div>
)

const data = [
	{ name: 'January', graph1: 120, graph2: 200 },
	{ name: 'February', graph1: 500, graph2: 700 },
	{ name: 'March', graph1: 600, graph2: 900 },
]

export const Simple = Template.bind({})
Simple.args = {
	data,

	legend: true,
	tooltip: true,
	outerRadius: 100,
	innerRadius: 50,
	paddingAngle: 5,
	legendConfig: {
		align: 'right',
		layout: 'vertical',
		vertical: 'middle',
		iconType: 'circle',
	},
}
