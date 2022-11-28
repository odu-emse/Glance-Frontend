import * as React from 'react'
import { Thread } from '../components/Thread'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { mockData } from '../util/threadData'

export default {
	title: 'Molecules/Thread',
	component: Thread,
} as ComponentMeta<typeof Thread>

const Template: ComponentStory<typeof Thread> = (args) => <Thread {...args} />

export const Sample = Template.bind({})
Sample.storyName = 'Default'
Sample.args = {
	title: 'How did the United States land on the moon?',
	body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas.',
	upvotes: 10,
	userProfile: {
		id: 1,
		firstName: 'joel',
		lastName: 'desante',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
	},
	id: '12345',
}

export const Comment = Template.bind({})
Comment.storyName = 'Thread without title'
Comment.args = {
	...Sample.args,
	title: undefined,
}

export const NoUpvote = Template.bind({})
NoUpvote.storyName = 'Thread with no upvotes'
NoUpvote.args = {
	...Sample.args,
	upvotes: 0,
}

const SecondaryTemplate: ComponentStory<typeof Thread> = (args) => {
	return (
		<>
			{mockData.map((thread, threadIndex) => (
				<Thread key={threadIndex} {...args} {...thread} />
			))}
		</>
	)
}

export const MultipleThreads = SecondaryTemplate.bind({})
MultipleThreads.storyName = 'List of threads'
MultipleThreads.args = {
	...Sample.args,
}
