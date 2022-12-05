import * as React from 'react'
import { UserProfile } from '../components/UserProfile'

export default {
	title: 'Organisms/User Profile',
	component: UserProfile,
}

const Template = (args) => <UserProfile {...args} />

export const Primary = Template.bind({})
Primary.args = {
	isCurrentUser: 'true',
	user: {
		firstname: 'Avantika',
		lastName: 'Mittapally',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		email: 'amitt002@odu.edu',
		planOfStudy: [
			{
				status: 'Scheduled',
				term: 'Summer 2022',
			},
			{
				status: 'Late',
				term: 'Fall 2022',
			},
			{
				status: 'Paid',
				term: 'Fall 2022',
			},
		],
	},
}
