import * as React from 'react'
import { Anchor, AnchorProps } from '../components/Link'

export default {
	title: 'Atoms/Anchor',
	component: Anchor,
	argTypes: {
		path: {
			type: 'string',
			control: 'text',
			defaultValue: '/',
		},
		role: {
			type: 'string',
			control: {
				type: 'select',
			},
			options: ['tooltip-parent', 'menuitem'],
		},
	},
}

const Template = (args: AnchorProps) => (
	<Anchor
		{...args}
		onClick={() => {
			alert(
				'Your click was handled! This is an example of a custom onClick function. You can also infer the click event from the onClick prop, and access event details.'
			)
		}}
	>
		Link to resource
	</Anchor>
)

export const Primary = Template.bind({})
