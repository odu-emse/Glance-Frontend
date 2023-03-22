import * as React from 'react'
import { SidebarItem } from './sidebar_item'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Common/Pages/Layouts/Sidebar Item',
	component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>

const Template = (args) => <SidebarItem {...args} />

export const Default: ComponentStory<typeof SidebarItem> = Template.bind({})
Default.args = {
	icon: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	value: 'TEST',
	href: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	collapsed: false,
}
