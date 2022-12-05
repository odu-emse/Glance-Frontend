import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as React from 'react'
import { Accordion } from '../components/Accordion'

export default {
	title: 'Molecules/Accordion',
	component: Accordion,
	argTypes: {
		title: { control: 'text' },

		lessons: { control: 'LessonLinkProps[]' },
	},
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
	<Accordion {...args} />
)

export const Topic1: ComponentStory<typeof Accordion> = Template.bind({})
Topic1.storyName = 'Default'
Topic1.args = {
	title: 'Topic 1',
	lessons: [
		{
			label: 'Module1',
			url: 'lesonlink/module-1',
			checked: true,
		},
		{
			label: 'Module2',
			url: 'lessonlink/module-2',
			checked: false,
		},
		{
			label: 'Module3',
			url: 'lessonlink/module-3',
			checked: true,
		},
	],
}

export const Topic2: ComponentStory<typeof Accordion> = Template.bind({})
Topic2.storyName = 'More elements'
Topic2.args = {
	title: 'Topic 2',
	lessons: [
		{
			label: 'Module 1',
			url: 'lesonlink/module-1',
		},
		{
			label: 'Module 2',
			url: 'lessonlink/module-2',
		},
		{
			label: 'Module 3',
			url: 'lessonlink/module-3',
		},
		{
			label: 'Module 4',
			url: 'lessonlink/module-4',
		},
		{
			label: 'Module 5',
			url: 'lessonlink/module-5',
		},
		{
			label: 'Module 6',
			url: 'lessonlink/module-6',
		},
		{
			label: 'Module 7',
			url: 'lessonlink/module-7',
		},
		{
			label: 'Module 8',
			url: 'lessonlink/module-8',
		},
	],
}
export const Topic3: ComponentStory<typeof Accordion> = Template.bind({})
Topic3.storyName = 'All completed'
Topic3.args = {
	title: 'Topic 3',
	lessons: [
		{
			label: 'Module1',
			url: 'lesonlink/module-1',
			checked: true,
		},
		{
			label: 'Module2',
			url: 'lessonlink/module-2',
			checked: true,
		},
		{
			label: 'Module3',
			url: 'lessonlink/module-3',
			checked: true,
		},
	],
}
