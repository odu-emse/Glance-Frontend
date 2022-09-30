import * as React from 'react'
import  { Accordion }  from '../components/Accordion'

export default{
    title: 'Molecules/Accordion',
    component: Accordion,
}

const Template = (args) => <Accordion {...args}/>

export const Topic1 = Template.bind({})
Topic1.args={
    lessons : [
        {
            label: "Module1",
            url:"lesonlink/module-1",
            //checked: true
        },
        {
            label: "Module2",
            url:"lessonlink/module-2"
        },
        {
            label: "Module3",
            url:"lessonlink/module-3"
        }
    ]
}

export const Topic2 = Template.bind({})
Topic2.args={
    lessons : [
        {
            label: "Module1",
            url:"lesonlink/module-1",
            //checked: true
        },
        {
            label: "Module2",
            url:"lessonlink/module-2",
        },
        {
            label: "Module3",
            url:"lessonlink/module-3"
        }
    ]
}
export const Topic3 = Template.bind({})
Topic3.args={
    lessons : [
        {
            label: "Module1",
            url:"lesonlink/module-1",
            //checked: true
        },
        {
            label: "Module2",
            url:"lessonlink/module-2"
        },
        {
            label: "Module3",
            url:"lessonlink/module-3"
        }
    ]
}
