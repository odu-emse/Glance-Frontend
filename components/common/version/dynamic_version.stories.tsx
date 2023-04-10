import * as React from 'react'
import { DynamicVersion, DynamicVersionProps } from './dynamic_version'

export default {
	title: 'Common/Version/Dynamic Version',
	component: DynamicVersion,
	argTypes: {},
}

const Template = (args: DynamicVersionProps) => <DynamicVersion {...args} />

export const Default = Template.bind({})
Default.args = {
	backendVersion: '0.3.0',
	isLight: false,
}
