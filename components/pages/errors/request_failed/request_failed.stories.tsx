import * as React from 'react'
import RequestFailed from './request_failed'
import type { RequestFailedProps } from './request_failed'
import { Meta, StoryFn } from '@storybook/react'

export default {
	title: 'Pages/Errors/Request Failed',
	component: RequestFailed,
	argTypes: {
		title: {
			control: {
				type: 'text',
			}
		},
		subtitle: {
			control: {
				type: 'text',
			}
		}
	},
} as Meta<typeof RequestFailed>

const Template: StoryFn<typeof RequestFailed> = (
	args: RequestFailedProps
) => {
	return <RequestFailed {...args} />
}

export const Primary: StoryFn<typeof RequestFailed> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {
	title: 'Error',
	subtitle: 'Could not retrieve user information!',
}
