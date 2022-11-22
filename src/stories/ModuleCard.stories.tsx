import * as React from 'react'
import { ModuleCard } from '../components/ModuleCard'
import type { ModuleProps } from '../components/ModuleCard'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Atoms/ModuleCard', //providing path
	component: ModuleCard,
} as ComponentMeta<typeof ModuleCard>

const Template: ComponentStory<typeof ModuleCard> = (args: ModuleProps) => (
	<ModuleCard {...args} />
)

export const Primary: ComponentStory<typeof ModuleCard> = Template.bind({})
Primary.storyName = 'first module card'
Primary.args = {
	completion: false,
	moduleName: 'Module 1',
	parentCourse: 'ENMA 600',
	moduleNumber: 'M 178P',
	percentageCompleted: 50,
	averageTime: 0,
	userTime: 10,
	duration: 38,
	currentTopic: 'Ethical Behavior and leadership',
	primaryLink: '178P',
	primaryLinkLabel: '/module/178P',
	secondaryLink: '178P/treeview',
	secondaryLinkLabel: '/module/178P/treeview',
}

export const Secondary: ComponentStory<typeof ModuleCard> = Template.bind({})
Secondary.storyName = 'second module card'
Secondary.args = {
	completion: false,
	moduleName: 'Module 1',
	parentCourse: 'ENMA 604',
	moduleNumber: 'M 209V',
	percentageCompleted: 25,
	averageTime: 55,
	userTime: 0,
	duration: 10,
	currentTopic: 'Simulation Modeling in Transportation Networks',
	primaryLink: '209V',
	primaryLinkLabel: '/module/209V',
	secondaryLink: '209V/treeview',
	secondaryLinkLabel: '/module/209V/treeview',
}

export const Tertiary: ComponentStory<typeof ModuleCard> = Template.bind({})
Tertiary.storyName = 'third module card'
Tertiary.args = {
	completion: true,
	moduleName: 'Module 1',
	parentCourse: 'ENMA 709',
	moduleNumber: 'M 084K',
	percentageCompleted: 100,
	averageTime: 13,
	userTime: 11,
	duration: 10,
	currentTopic: 'Risk Analysis',
	primaryLink: '084K',
	primaryLinkLabel: '/module/084K',
	secondaryLink: '084K/treeview',
	secondaryLinkLabel: '/module/084K/treeview',
}
