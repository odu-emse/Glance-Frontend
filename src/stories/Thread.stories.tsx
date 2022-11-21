import * as React from 'react'
import { Thread } from '../components/Thread'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
	title: 'Molecules/Thread',
	component: Thread,
	argTypes: {},
} as ComponentMeta<typeof Thread>

const Template: ComponentStory<typeof Thread> = (args) => <Thread {...args} />

export const Sample = Template.bind({})
Sample.storyName = 'Default'
Sample.args = {
	title: 'How did the United States land on the moon?',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas.',
	upvotes: 10,
	userProfile: {
		firstName: 'joel',
		lastName: 'desante',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	},
}

export const Comment = Template.bind({})
Comment.storyName = 'Thread without title'
Comment.args = {
	...Sample.args,
	title: null,
}

export const NoUpvote = Template.bind({})
NoUpvote.storyName = 'Thread with no upvotes'
NoUpvote.args = {
	...Sample.args,
	upvotes: 0,
}
