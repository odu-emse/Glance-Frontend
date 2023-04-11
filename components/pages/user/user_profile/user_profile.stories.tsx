import * as React from 'react'
import { UserProfile, UserProfileProps } from './user_profile'

export default {
	title: 'Pages/User/User Profile',
	component: UserProfile,
	argTypes: {
		user: {
			control: {
				type: 'object',
			},
		},
		userOpenID: {
			control: {
				type: 'text',
			},
		},
		contextAccount: {
			control: {
				type: 'object',
			},
		},
		updateSocial: {
			control: {
				type: 'object',
			},
		},
		verifyEdit: {
			control: {
				type: 'object',
			},
		},
	},
}

const Template = (args) => <UserProfile {...args} />

export const Primary = Template.bind({})
Primary.args = {
	user: {
		firstName: 'John',
		lastName: 'Doe',
		avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
		id: '1',
		biography: 'lorem',
		openID: '1',
		phoneNumber: '1234567890',
		dob: '1990-01-01',
		email: 'fake@example.com',
		social: {
			id: '1',
			twitter: 'https://twitter.com/hashtag/lorem',
			instagram: 'https://www.instagram.com/lorem/',
			facebook: 'https://www.facebook.com/lorem',
			website: 'https://lorem.com',
			linkedin: 'https://www.linkedin.com/in/lorem',
		},
	},
	userOpenID: '1',
	contextAccount: {
		id: '1',
		firstName: 'John',
		lastName: 'Doe',
		openID: '1',
	},
	updateSocial(
		openID: string,
		accountID: string,
		socialInput: {
			github?: string | null
			linkedin?: string | null
			portfolio?: string | null
			facebook?: string | null
			twitter?: string | null
		},
		userInput: {
			id: string
			openID: string
			biography?: string | null
			phoneNumber?: string | null
		}
	): void {},
	verifyEdit(): boolean {
		return false
	},
	sessionUser: {
		id: '1',
		user: {
			email: 'fake@example.com',
			name: 'John Doe',
			image: 'https://avatars.githubusercontent.com/u/1024025?v=4',
		},
		expires: '2021-08-01T00:00:00.000Z',
		openId: '1',
		idToken: '1',
	},
} as UserProfileProps
Primary.storyName = 'User Profile - logged out'

export const Secondary = Template.bind({})
Secondary.args = {
	...Primary.args,
	verifyEdit(): boolean {
		return true
	},
}
Secondary.storyName = 'User Profile - logged in'
