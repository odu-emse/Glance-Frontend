import * as React from 'react'
import { ModuleProps, Modules } from './modules'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Pages/Admin Panel/Modules',
	component: Modules,
	argTypes: {},
} as ComponentMeta<typeof Modules>

const Template: ComponentStory<typeof Modules> = (args: ModuleProps) => (
	<Modules {...args} />
)

export const Default: ComponentStory<typeof Modules> = Template.bind({})
Default.args = {
	modules: [
		{
			enrolledAt: '05/19/2022',
			role: 'TEACHER',
			module: {
				id: '61560592009b2b64008696c5',
				moduleName: 'testing spread operator on module update',
				moduleNumber: 102,
				intro: 'Hello there',
				createdAt: '09/30/2021',
				description: 'Some words go here!',
				duration: 1.1,
				keywords: [
					'Apple',
					'Horse',
					'Elephant',
					'Rino',
					'Pineapple',
					'Coconut',
				],
				numSlides: 10,
				feedback: null,
				parentModules: null,
				members: null,
			},
		},
		{
			enrolledAt: '05/19/2022',
			role: 'TEACHER',
			module: {
				id: '34516gvbudnk',
				moduleName: 'bnlbmbbk',
				moduleNumber: 102,
				intro: 'Hello bhvu',
				createdAt: '09/30/2021',
				description: 'Some words go here!',
				duration: 1.1,
				keywords: [
					'Apple',
					'Horse',
					'Elephant',
					'Rino',
					'Pineapple',
					'Coconut',
				],
				numSlides: 10,
				feedback: null,
				parentModules: null,
				members: null,
			},
		},
		{
			enrolledAt: '10/11/2022',
			role: 'STUDENT',
			module: {
				id: '620d2d2df524b2dcf02b5bbe',
				moduleName: 'Testing',
				moduleNumber: 72,
				intro: 'Some intro',
				createdAt: '02/16/2022',
				description: 'Some description',
				duration: 10,
				keywords: ['Test', 'Intro', 'Create Module?'],
				numSlides: 45,
				feedback: null,
				parentModules: null,
				members: null,
			},
		},
	],
}
