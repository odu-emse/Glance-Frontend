import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ChatHistory } from '../components/ChatHistory'

export default {
	title: 'Molecules/Chat History',
	component: ChatHistory,
}

const Template: ComponentStory<typeof ChatHistory>  = (args) => <ChatHistory {...args} />

export const Primary = Template.bind({})
Primary.args = {
messages:[
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false,
    },
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false
    },
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false
    },
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false
    },
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false
    },
    {
        name:'AVantika',
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        selected:false,
        timestamp:1664376815,
        newNotification:false
    },
],
   


}