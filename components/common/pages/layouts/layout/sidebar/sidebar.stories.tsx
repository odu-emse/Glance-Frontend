import * as React from 'react'
import { Sidebar } from './sidebar'

export default {
	title: 'Common/Pages/Layouts/Sidebar',
	component: Sidebar,
}

const Template = (args) => {
	const [open, setOpen] = React.useState(true)
	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<Sidebar {...args} handle={setOpen} open={open} />
		</div>
	)
}

export const Default = Template.bind({})


