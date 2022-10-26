import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MessageInput} from '../components/MessageInput'

export default {
	title: 'Molecules/Message Input',
	component: MessageInput,
}

const Template: ComponentStory<typeof MessageInput>  = (args) => <MessageInput {...args} />

export const Primary = Template.bind({})
Primary.args = {
	message:[
        {
            messages:'dropping the course'
        },
        {
            messages:'dropping the course'
        },
        {
            messages:'dropping the course'
        },



    ]
}
