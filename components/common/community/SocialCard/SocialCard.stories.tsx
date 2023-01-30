import * as React from 'react'
import { SocialCard } from './SocialCard'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Community/Social Card',
	component: SocialCard,
} as ComponentMeta<typeof SocialCard>

const Template: ComponentStory<typeof SocialCard> = (args) => (
	<SocialCard {...args} />
)
export const Primary: ComponentStory<typeof SocialCard> = Template.bind({})
Primary.args = {
	timestamp: 1664376815,
	content:
		'AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',
	likes: 20,
	comments: 50,
	user: {
		firstName: 'Avantika',
		lastName: 'Mittapally',
		role: 'Advisor',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		title: 'Chair of Department',
		office: 'ESB 2101',
		department: 'Engineering Management & Systems Engineering',
	},
}
export const Secondary: ComponentStory<typeof SocialCard> = Template.bind({})
Secondary.storyName = 'Longer Content'
Secondary.args = {
	...Primary.args,
	content:
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae error iure officiis exercitationem, commodi ab reiciendis eum ex veritatis placeat amet architecto itaque cumque blanditiis numquam repellat, necessitatibus natus nihil!',
}
export const TA = Template.bind({})
TA.storyName = 'TA user'
TA.description = 'TA user here'
TA.args = {
	...Secondary.args,
	user: {
		...Secondary.args.user,
		role: 'TA',
	},
}
export const Prof = Template.bind({})
Prof.storyName = 'Professor user'
Prof.args = {
	...Secondary.args,
	user: {
		...Secondary.args.user,
		role: 'Prof',
	},
}