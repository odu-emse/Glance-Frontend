import * as React from 'react'
import { Sidebar } from './sidebar'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Pages/Layouts/Left Sidebar',
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => {
	const [open, setOpen] = React.useState(true)
	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<Sidebar {...args} handle={setOpen} open={open} />
		</div>
	)
}

export const Default: ComponentStory<typeof Sidebar> = Template.bind({})
Default.args = {
	icon: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
}
