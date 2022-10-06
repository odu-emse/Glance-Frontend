import * as React from 'react'
import  { LessonLink }  from '../components/FormElements/LessonLink'

export default {
	title: 'Atoms/Lesson Link',
	component: LessonLink,
}

const Template = (args) => <LessonLink {...args}/>

export const Primary = Template.bind({})
Primary.args ={
    label: "Introduction - Module1",
    url:"lesonlink/module-1",
    // checked: true,
}

