import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BubbleMessage } from '../components/BubbleMessage'

export default {
	title: 'Molecules/Bubble Message',
	component: BubbleMessage,
}

const Template: ComponentStory<typeof BubbleMessage>  = (args) => <BubbleMessage {...args} />

export const Primary = Template.bind({})
Primary.args = {
	/*user: {
		firstname: 'Avantika',
		lastName: 'Mittapally',
		image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
		email: 'amitt002@odu.edu',
		planOfStudy: [{
            status : 'Scheduled', 
            term:'summer 2022'
        },{
            status : 'Late', 
            term:'Fall 2022'
        },
        {
            status : 'Paid', 
            term:'Fall 2022'
        }
    ]
	},*/
    message:[{
        image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
        message:'Hi',
        timestamp:1664376815
    },{
    image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
    message:'How are you',
    timestamp:1664376815
},
{
    image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
    message:'I am fine',
    timestamp:1664376815
},
{
    image:'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
    message:'How do you do',
    timestamp:1664376815
},
],
timestamp1:1664376815
}
