import * as React from 'react'
import  { LessonLink }  from '../components_old/FormElements/LessonLink'
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
	title: 'Atoms/Lesson Link',
	component: LessonLink,
} as ComponentMeta<typeof LessonLink>

const Template: ComponentStory<typeof LessonLink> = (args) => <LessonLink {...args}/>

export const Primary = Template.bind({})
//P.storyName = 'Primary'
Primary.args = { 
        label: "Module1",
        url:"lesonlink/module-1",
        // checked: true,
}


