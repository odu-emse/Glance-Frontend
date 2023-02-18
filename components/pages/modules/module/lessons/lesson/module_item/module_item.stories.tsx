import * as React from 'react'
import { ModuleItem, ModuleItemProps } from './module_item'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Common/Module Flow/Module Item',
	component: ModuleItem,
} as ComponentMeta<typeof ModuleItem>

const Template: ComponentStory<typeof ModuleItem> = (args: ModuleItemProps) => (
	<ModuleItem {...args} />
)

export const Primary: ComponentStory<typeof ModuleItem> = Template.bind({})
Primary.storyName = 'First module item'
Primary.args = {
	data: {
		"id": "620d2d2df524b2dcf02b5bbe",
		"moduleName": "Testing",
		"moduleNumber": 72,
		"intro": "Some intro",
		"createdAt": "02/16/2022",
		"description": "Some description",
		"duration": 10,
		"keywords": [
		  "Test",
		  "Intro",
		  "Create Module?"
		],
		"numSlides": 45,
		"feedback": null,
		"parentModules": null,
		"members": null
	},
	role: "STUDENT"
}