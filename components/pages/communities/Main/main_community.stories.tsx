import * as React from 'react'
import { MainCommunity, MainCommunityProps } from './main_community'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import useSWR from 'swr'
import gqlFetcher from '../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'

export default {
	title: 'Pages/Communities/Main/Main Community',
	component: MainCommunity,
	argTypes: {},
} as ComponentMeta<typeof MainCommunity>

const Template: ComponentStory<typeof MainCommunity> = (
	args:MainCommunityProps
) => {
	const { data, error } = useSWR(
        {
            query: gql`
                {
                    thread(input: {}){
                        
                        updatedAt
                    }
                }
            `        
        },
        gqlFetcher
    )
    if (error) return <p>Failed to load content...</p>
	if (!data) return <p>Loading...</p>

	console.log(data)

    data.thread.sort()

	return <MainCommunity threads={data.thread} {...args} />
}

export const Primary: ComponentStory<typeof MainCommunity> = Template.bind({})
Primary.storyName = 'Default'
Primary.args = {}



