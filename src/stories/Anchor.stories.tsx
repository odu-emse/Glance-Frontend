import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Anchor, { AnchorProps } from '../components/Link/Anchor'

export default {
	title: 'Components/Anchor',
	component: Anchor,
	argTypes: {
		path: {
			type: 'string',
			control: 'text',
			defaultValue: '/',
		},
	},
}

const Template = (args: AnchorProps) => (
	<BrowserRouter>
		<Anchor {...args}>Link to resource</Anchor>
	</BrowserRouter>
)

export const Primary = Template.bind({})
