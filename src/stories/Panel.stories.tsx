import * as React from 'react'
import { PieComponent } from '../components/Chart'
import type { PanelProps } from '../components/Panel/Panel'
import Panel from '../components/Panel/Panel'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Molecules/Panel',
	component: Panel,
	argTypes: {
		children: {
			control: 'object',
			description:
				'Indicates the children elements in JSX.Element or React.ReactNode',
		},
		className: {
			control: 'text',
			description:
				'Indicates the className - based on selection of a property named "size", className is atlered ',
		},
		size: {
			control: 'inline-radio',
			description: 'Indicates the size - user selective option',
		},
		title: {
			control: 'text',
			description: 'Indicates the title of the panel component',
		},
	},
} as ComponentMeta<typeof Panel>

const Template: ComponentStory<typeof Panel> = (args: PanelProps) => (
	<Panel {...args} />
)
export const Text: ComponentStory<typeof Panel> = Template.bind({})
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

export const Chart: ComponentStory<typeof Panel> = Template.bind({})
Chart.args = {
	title: 'Charts are cool',
	size: 1,
	children: (
		<div className="h-64">
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
				width={100}
				height={100}
			/>
		</div>
	),
}
export const List: ComponentStory<typeof Panel> = Template.bind({})
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
