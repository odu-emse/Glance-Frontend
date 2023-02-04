import * as React from 'react'
import { ModuleCommunity } from './module_community'
import type { ModuleCommunityProps } from './module_community'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'pages/communities/Module Community',
	component: ModuleCommunity,
	argTypes: {},
} as ComponentMeta<typeof ModuleCommunity>

const Template: ComponentStory<typeof ModuleCommunity> = (
	args: ModuleCommunityProps
) => {
	return <ModuleCommunity{...args} />
    //	return <PageNotFound {...args} />

}



export const Primary: ComponentStory<typeof ModuleCommunity> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
