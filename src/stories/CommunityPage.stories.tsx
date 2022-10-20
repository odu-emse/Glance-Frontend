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
Primary.storyName = 'default Page'
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
		defaultValue: '',
		label: 'Search for anything',
		name: 'floating_search',
		onChange: onchange,
		role: 'search',
		type: 'search',

	}
}

export const Secondary = Template.bind({})
Secondary.storyName = 'social post'
Secondary.args = {
	socialCardProps: {
		timestamp: 1664376815,
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil!',
		likes: 21,
		comments: 55,
	},
	userAccountProps: {
		firstName: 'Avantika',
		lastName: 'Mittapally',
		role: 'TA',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		title: 'Chair of Department',
		office: 'ESB 2101',
		department: 'Engineering Management & Systems Engineering',
	},
	inputProps: {
		defaultValue: '',
		label: 'Search for anything',
		name: 'floating_search',
		onChange: onchange,
		role: 'search',
		type: 'search',

	}
}