import * as React from 'react'
// import { CommunityPage, CommunityPageProps } from "../components/pages/community_page";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CommunityPage, CommunityPageProps } from './community_page'

export default {
	title: 'Organisms/Community Page', //providing path
	component: CommunityPage,
} as ComponentMeta<typeof CommunityPage>

const Template: ComponentStory<typeof CommunityPage> = (
	args: CommunityPageProps
) => <CommunityPage {...args} />

export const Primary = Template.bind({})
Primary.storyName = 'empty Page'
Primary.args = {
	socialCardProps: {
		timestamp: 1664376815,
		content:
			'AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
		likes: 20,
		comments: 50,
		user: {
			firstName: 'Dr. Andres',
			lastName: 'Sousa-Poza',
			role: 'Prof',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			title: 'Chair of Department',
			office: 'ESB 2101',
			department: 'Engineering Management & Systems Engineering',
		},
	},
	inputProps: {
		defaultValue: '',
		label: 'Search for anything',
		name: 'floating_search',
		onChange: (e) => e,
		role: 'search',
		type: 'search',
	},
}

export const Secondary = Template.bind({})
Secondary.storyName = 'default page'
Secondary.args = {
	socialCardProps: {
		timestamp: 1664376815,
		content:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil!',
		likes: 21,
		comments: 55,
		user: {
			firstName: 'Avantika',
			lastName: 'Mittapally',
			role: 'Advisor',
			image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
			title: 'Chair of Department',
			office: 'ESB 2101',
			department: 'Engineering Management & Systems Engineering',
		},
	},
	inputProps: {
		defaultValue: '',
		label: 'Search for anything',
		name: 'floating_search',
		onChange: (e) => e,
		role: 'search',
		type: 'search',
	},
	groupsProps: [
		{
			groupsProfileImage:
				'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/306849544_459084019586392_8749864614951060700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rv5KsqxDA4oAX9tAd1r&_nc_ht=scontent-iad3-2.xx&oh=00_AfDK2qSAG7KaRNJsKk0If9TtX68wRQ5gCo7S53r14uzdRQ&oe=6365A648',
			groupsName: 'Global Student Outreach',
			groupsMemberCount: 3192,
		},
		{
			groupsProfileImage:
				'https://scontent-iad3-2.xx.fbcdn.net/v/t1.6435-9/31355905_1645839505507774_7320080296362115072_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8saVkEgEd00AX8JCDQ2&_nc_ht=scontent-iad3-2.xx&oh=00_AfAb2EarsBlot7zluEi4F48uy0wh3FjslO4k1o_iCCstoQ&oe=638502B8',
			groupsName: 'Norfolk Monarchs',
			groupsMemberCount: 1916,
		},
		{
			groupsProfileImage:
				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/8467f215-dfc0-4d33-b207-7d00abc26933/d1zkdr0-6d9d8042-a9d9-41b8-88d5-a915d52f623c.jpg',
			groupsName: 'ODU Internationals',
			groupsMemberCount: 768,
		},
		{
			groupsProfileImage:
				'https://www.ilmcorp.com/wp-content/uploads/2017/01/Old-Dominion-University.jpg',
			groupsName: 'ENMA Honor Students',
			groupsMemberCount: 174,
		},
	],
	pollSurveysProps: [
		{
			pollSurveyName: 'ENMA platform usability survey',
			timestamp: 8,
		},
		{
			pollSurveyName: 'ENMA 604 opinion survey',
			timestamp: 3,
		},
		{
			pollSurveyName: 'ODU Online student engagment opinion survey',
			timestamp: 25,
		},
		{
			pollSurveyName: 'Student time management poll',
			timestamp: 25,
		},
	],
	challengesProps: [
		{
			challengesName: 'Finish a module assessment with an 85% or better',
			challengesUserCount: 42589,
		},
		{
			challengesName: 'Get a 75% or better on one of your course exams',
			challengesUserCount: 18762,
		},
		{
			challengesName: 'Complete a module of all 5 Learning types',
			challengesUserCount: 5328,
		},
		{
			challengesName: 'Get a 75% or better on one of your course finals',
			challengesUserCount: 6231,
		},
	],
	contactProps: [
		{
			contactTitle: 'Prof.',
			contactFirstName: 'John',
			contactLastName: 'Doe',
			contactProfileImage:
				'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
			contactStatus: 'Online',
		},
		{
			contactFirstName: 'Terry',
			contactLastName: 'White',
			contactProfileImage:
				'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
			contactStatus: 'Offline',
		},
		{
			contactTitle: 'Prof.',
			contactFirstName: 'Warren',
			contactLastName: 'Wong',
			contactProfileImage:
				'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
			contactStatus: 'Busy',
		},
		{
			contactTitle: 'TA.',
			contactFirstName: 'Lerry',
			contactLastName: 'Jackson',
			contactProfileImage:
				'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
			contactStatus: 'Offline',
		},
	],
}
