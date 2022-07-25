import { Sidebar } from '../components/Sidebar'
import { Link } from '../components/Link'
import * as React from 'react'
import { AiOutlinePartition } from 'react-icons/ai'
import {
	MdLiveHelp,
	MdOutlineExplore,
	MdSpaceDashboard,
	MdWidgets,
} from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'
import { BrowserRouter } from 'react-router-dom'

export default {
	title: 'Components/Sidebar',
	component: Sidebar,
	argTypes: {
		authenticated: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
	},
}

const Template = (args) => {
	return (
		<BrowserRouter>
			<Sidebar {...args} />
		</BrowserRouter>
	)
}

export const Primary = Template.bind({})
Primary.args = {}
