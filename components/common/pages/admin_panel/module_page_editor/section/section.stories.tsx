import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleSection, ModuleSectionProps } from './section'

export default {
	title: 'Common/Pages/Admin Panel/Module Page Editor/Section',
	component: ModuleSection,
	argTypes: {},
} as ComponentMeta<typeof ModuleSection>

const Template: ComponentStory<typeof ModuleSection> = (
	args: ModuleSectionProps,
) => <ModuleSection {...args} />

export const Default: ComponentStory<typeof ModuleSection> = Template.bind({})
Default.args = {
	sectionName: 'Section 1',
	sectionId: 1,
}
