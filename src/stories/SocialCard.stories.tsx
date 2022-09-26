import * as React from 'react'
import  { SocialCard }  from '../components/SocialCard'

export default {
	title: 'Molecules/SocialCard',
	component: SocialCard,
}

const Template = (args) => <SocialCard {...args}/>

export const Primary = Template.bind({})
Primary.args ={
    
    name: "Advisor. Avantika Mittapally",
    image: ['https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png'],
    timestamp: "1 hour ago",
    branch: "Old Dominion University - EMSE",
    content: "AWESOME hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    likes: 20,
    comments:50,
}

