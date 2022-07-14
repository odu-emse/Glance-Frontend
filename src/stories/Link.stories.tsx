import * as React from 'react'
import { Link } from '../components/Link'

export default {
	title: 'Components/Link',
	component: Link,
	argTypes: {},
}

const Template = (args) => <Link {...args} />

export const Primary = Template.bind({})
