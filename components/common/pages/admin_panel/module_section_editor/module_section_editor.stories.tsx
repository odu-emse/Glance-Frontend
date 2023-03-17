import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleSectionEditor } from './module_section_editor'

export default {
	title: 'Common/Pages/Admin Panel/Module Section Editor',
	component: ModuleSectionEditor,
	argTypes: {},
} as ComponentMeta<typeof ModuleSectionEditor>

const Template: ComponentStory<typeof ModuleSectionEditor> = (args: any) => (
	<ModuleSectionEditor {...args} />
)

export const Default = Template.bind({})
Default.args = {}
