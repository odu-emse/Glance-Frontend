import * as React from 'react'
import { CommunityPage, CommunityPageProps } from '../components/CommunityPage'
import { ComponentStory, ComponentMeta } from '@storybook/react'


export default {
	title: 'Molecules/Community Page', //providing path
	component: CommunityPage,
	argTypes: {},
	//argTypes: {}, giving user the control based on the Prop-types
	// i.g.
	// argTypes: {
	//    size: {control: 'select'}
	// }
} as ComponentMeta<typeof CommunityPage>

const Template: ComponentStory<typeof CommunityPage> = (
	args: CommunityPageProps
) => <CommunityPage {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'Community Page'
Primary.args = {
	socialCardProps: {
		timestamp: 1664376815,
		content:
			'AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
		likes: 20,
		comments: 50,
	},
	userAccountProps: {
		firstName: 'Avantika',
		lastName: 'Mittapally',
		role: 'Advisor',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		title: 'Chair of Department',
		office: 'ESB 2101',
		department: 'Engineering Management & Systems Engineering',
	},
	inputProps: {
		defaultValue: '123',
		label: 'Search for anything',
		name: 'floating_search',
		onChange: onchange,
		role: 'search',
		type: 'search',
		
	}
}