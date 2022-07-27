import * as React from 'react'
import { RadarComponent, RadarProps } from '../../components/Chart'

export default {
	title: 'Components/Chart/Matrix',
	component: RadarComponent,
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
	},
}

const Template = (args: RadarProps) => {
	return (
		<div className="mx-auto container relative">
			<RadarComponent {...args} />
		</div>
	)
}

export const Primary = Template.bind({})
Primary.args = {
	aspectLock: true,
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
}
