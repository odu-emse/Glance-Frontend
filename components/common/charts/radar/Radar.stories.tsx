import * as React from 'react'
import { Radar } from 'recharts'
import { RadarComponent, RadarProps } from './Radar'
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
	title: 'Common/Charts/Radar Chart',
	component: RadarComponent,
	args: {
		legend: true,
		width: 600,
		height: 350,
		aspectLock: false,
	},
	argTypes: {
		width: {
			control: {
				type: 'range',
				min: 250,
				max: 1135,
			},
		},
		height: {
			control: {
				type: 'range',
				min: 250,
				max: 1135,
			},
		},
		fillColor: {
			control: {
				type: 'color',
				defaultValue: '#e74d3c',
			},
		},
		strokeColor: {
			control: {
				type: 'color',
				defaultValue: '#e74d3c',
			},
		},
		fillOpacity: {
			control: {
				type: 'range',
				min: 0,
				max: 1,
				step: 0.1,
			},
		},
		children: {
			control: false,
		},
		data: {
			control: false,
		},
	},
} as ComponentMeta<typeof RadarComponent>

const Template: ComponentStory<typeof RadarComponent> = (args: RadarProps) => {
	return (
		<div className="mx-auto container relative">
			<RadarComponent {...args} />
		</div>
	)
}

export const SingleChildrenRadar = Template.bind({})
SingleChildrenRadar.args = {
	dataKey: 'subject',
	fillOpacity: 0.5,
	data: [
		{
			subject: 'ENMA 600',
			A: 50,
		},
		{
			subject: 'ENMA 601',
			A: 48,
		},
		{
			subject: 'ENMA 603',
			A: 52,
		},
		{
			subject: 'ENMA 604',
			A: 99,
		},
		{
			subject: 'ENMA 614',
			A: 62,
		},
		{
			subject: 'ENMA 715',
			A: 25,
		},
	],
	fillColor: '#e74d3c',
	strokeColor: '#e74d3c',
	children: <Radar dataKey="A" name={'Current Semester'} />,
}
export const MultipleChildrenRadar = Template.bind({})
/**
 * This idiom has multiple children
 */
MultipleChildrenRadar.args = {
	...SingleChildrenRadar.args,
	data: [
		{
			subject: 'ENMA 600',
			A: 50,
			B: 98,
			C: 150,
			fullMark: 150,
		},
		{
			subject: 'ENMA 601',
			A: 48,
			B: 87,
			C: 130,
			fullMark: 150,
		},
		{
			subject: 'ENMA 603',
			A: 52,
			B: 71,
			C: 120,
			fullMark: 150,
		},
		{
			subject: 'ENMA 604',
			A: 99,
			B: 120,
			C: 150,
			fullMark: 150,
		},
		{
			subject: 'ENMA 614',
			A: 62,
			B: 70,
			C: 120,
			fullMark: 150,
		},
		{
			subject: 'ENMA 715',
			A: 25,
			B: 55,
			C: 130,
			fullMark: 150,
		},
	],
	children: (
		<>
			<Radar dataKey="A" name={'Your Performance'} />
			<Radar dataKey="B" name={'Your Suggested Performance'} />
			<Radar dataKey="C" name={'Average Students Performance'} />
		</>
	),
}
