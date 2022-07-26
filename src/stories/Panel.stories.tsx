import * as React from 'react'
import { PieComponent } from '../components/Chart'
import RadarComponent from '../components/Chart/Radar'
import Panel from '../components/Panel/Panel'

export default {
	title: 'Components/Panel',
	component: Panel,
	argTypes: {},
}

const Template = (args) => <Panel {...args}></Panel>

export const Text = Template.bind({})
Text.args = {
	title: 'Text content only',
	size: 1,
	children: (
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta
			consectetur, optio temporibus corrupti doloribus iure voluptatem
			tenetur enim, officiis debitis nemo vero vitae aspernatur!
			Distinctio, harum similique. In, excepturi.
		</p>
	),
}

export const Chart = Template.bind({})
Chart.args = {
	title: 'Charts are cool',
	size: 1,
	children: (
		<PieComponent
			data={[
				{ name: 'iphone4', value: 120, fill: '#ff7300' },
				{ name: 'iphone4s', value: 500, fill: '#e5671a' },
				{ name: 'iphone5', value: 600, fill: '#907213' },
			]}
			legend={true}
			tooltip={true}
			outerRadius={150}
			innerRadius={100}
			paddingAngle={0}
			legendConfig={{
				align: 'right',
				layout: 'vertical',
				vertical: 'middle',
				iconType: 'circle',
			}}
			width={400}
			height={'100%'}
		/>
	),
}
export const List = Template.bind({})
List.args = {
	title: 'List of things',
	children: (
		<ul>
			<li>Some</li>
			<li>Things</li>
			<li>Are</li>
			<li>Better</li>
			<li>Then</li>
			<li>Others</li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	),
}
