import * as React from 'react'
import { PieComponent, PieProps } from '../../components/Chart'

export default {
	title: 'Components/Chart/Pie Chart',
	component: PieComponent,
	argTypes: {
		legend: { control: { type: 'boolean' } },
		tooltip: { control: { type: 'boolean' } },
		outerRadius: { control: { type: 'number' } },
		innerRadius: { control: { type: 'number' } },
		paddingAngle: { control: { type: 'number' } },
		width: { control: { type: 'number' } },
		height: { control: { type: 'number' } },
		centerXCoor: { control: { type: 'number' } },
		centerYCoor: { control: { type: 'number' } },
	},
}

const Template = (args: PieProps) => <PieComponent {...args} />

const data = [
	{ name: 'iphone4', value: 120, fill: '#ff7300' },
	{ name: 'iphone4s', value: 500, fill: '#e5671a' },
	{ name: 'iphone5', value: 600, fill: '#907213' },
]

export const Simple = Template.bind({})
Simple.args = {
	data,
	legend: true,
	tooltip: true,
	outerRadius: 200,
	innerRadius: 100,
	paddingAngle: 0,
	legendConfig: {
		align: 'right',
		layout: 'vertical',
		vertical: 'middle',
		iconType: 'circle',
	},
}
