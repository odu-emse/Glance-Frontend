import * as React from 'react'
import { InformationCard, InformationProps } from './information_card'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Common/Information Card',
	component: InformationCard,
	argTypes: {},
} as ComponentMeta<typeof InformationCard>

function onHandle() {
	console.log('works')
}

const Template: ComponentStory<typeof InformationCard> = (
	args: InformationProps,
) => <InformationCard {...args} handle={onHandle} />

export const Default = Template.bind({})
Default.args = {
	percentComplete: 'Complete',
	statusMessage: 'Spend 13 or more hours in module view',
}

export const Primary = Template.bind({})
Primary.args = {
	testType: 'Assignment',
	testModule: 'Introduction to Organization Analysis',
	moduleIdentifier: 'M 137G',
	dueDate: '27 module hours',
}

export const Secondary = Template.bind({})
Secondary.args = {
	grade: 'A',
	percentage: '84',
	moduleIdentifier: 'ENMA 715',
}
