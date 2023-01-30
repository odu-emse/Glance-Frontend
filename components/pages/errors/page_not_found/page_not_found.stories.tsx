import * as React from 'react'
import { PageNotFound } from './page_not_found'
import type { PageNotFoundProps } from './page_not_found'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Pages/Errors/Page Not Found',
	component: PageNotFound,
	argTypes: {},
} as ComponentMeta<typeof PageNotFound>

const Template: ComponentStory<typeof PageNotFound> = (
	args: PageNotFoundProps
) => {
	return <PageNotFound {...args} />
}

export const Primary: ComponentStory<typeof PageNotFound> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}
