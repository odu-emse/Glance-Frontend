import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ModuleUpdate } from './module_update_page'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import gqlFetcher from '@/utils/gql_fetcher'

export default {
	title: 'Pages/Admin Panel/Modules/Module Update',
	component: ModuleUpdate,
	argTypes: {},
} as ComponentMeta<typeof ModuleUpdate>

const Template: ComponentStory<typeof ModuleUpdate> = (args: any) => {
	const { data, error } = useSWR(
		{
			query: gql`
				{
					module(input: { id: "63ee7ce78af7187e17cf3552" }) {
						id
						moduleName
						moduleNumber
						description
						objectives
					}
				}
			`,
		},
		gqlFetcher
	)
	if (error) return <p>Failed to load content...</p>
	if (!data) return <p>Loading...</p>

	console.log(data.module)

	return <ModuleUpdate moduleDetails={data.module} {...args} />
}

export const Default = Template.bind({})
Default.args = {}
