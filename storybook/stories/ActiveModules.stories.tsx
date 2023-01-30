import * as React from 'react'
import { ActiveModules } from '../components/Thread/ActiveModules'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Atoms/ActiveModules',
	component: ActiveModules,
	argTypes: {},
} as ComponentMeta<typeof ActiveModules>

const Template: ComponentStory<typeof ActiveModules> = (args: any) => (
	<ActiveModules {...args} />
)

export const Default = Template.bind({})
Default.args = {
	modules: [
        {
             module_name: "This is a module.",
             module_id: "moduleid1"
        },
        {
             module_name: "This is another module.",
             module_id: "moduleid2"
        },
        {
             module_name: "I am also a module.",
             module_id: "moduleid3"
        },
        {
             module_name: "Mooooooooooooooooooo. I'm a cow.",
             module_id: "moduleid4"
        },
   ]
}