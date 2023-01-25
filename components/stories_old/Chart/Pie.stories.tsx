import * as React from 'react'
import { PieComponent, PieProps } from '../../components_old/Chart'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'Molecules/Chart/Pie Chart',
	component: PieComponent,
	args: {
		width: 100,
		height: 100,
	},
	argTypes: {
		data: { control: false },
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
} as ComponentMeta<typeof PieComponent>

const Template:ComponentStory<typeof PieComponent> = (args: PieProps) => (
	<div className="w-full h-96">
		<PieComponent {...args} />
	</div>
)

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
