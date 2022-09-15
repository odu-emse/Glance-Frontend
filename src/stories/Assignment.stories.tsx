import * as React from 'react'
import {Assignment} from "../components/Assignment"

export default {
    title: "Components/Assignment", //providing path
    component: Assignment,
    argTypes: {
        questionCount: {
            control: 'number',
            description:
                'The count for total of questions for this assignment card.',
        },
        moduleIdentifier: {
            control: 'text',
            description:
            'The module Identifier of this assignemnt card',
        },
        moduleName: {
            control: 'text',
            description:
            'The module name of this assignemnt card',
        }

    },
    
    //argTypes: {}, giving user the control based on the Protypes
                  // i.g.
                  // argTypes: {
                  //    size: {control: 'select'}
                  // }
}

const Template = (args) => (<Assignment {...args} />) 
    //with {}, it doesn't automatically return

export const Primary = Template.bind({})
Primary.args = {
    questionCount: 68,
    moduleIdentifier: "M 137G",
    moduleName: "Introduction to Organizational Analysis - Assignment 4"
}
export const Secondary = Template.bind({})
Secondary.args = {
    questionCount: 13,
    moduleIdentifier: "ENMA 601",
    moduleName: "Analysis of Organizational Systems - Exam 2"
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    questionCount: 37,
    moduleIdentifier: "ENMA 604",
    moduleName: "Project Management - Assignment 2"
}