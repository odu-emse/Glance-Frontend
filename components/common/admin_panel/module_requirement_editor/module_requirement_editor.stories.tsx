import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
	ModuleRequirement,
	ModuleRequirementProps,
} from './module_requirement_editor'
import useSWR from 'swr'
import gqlFetcher from '../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'

export default {
	title: 'Common/Admin Panel/Module/Requirements',
	component: ModuleRequirement,
	argTypes: {},
} as ComponentMeta<typeof ModuleRequirement>

const Template: ComponentStory<typeof ModuleRequirement> = (
	args: ModuleRequirementProps
) => {
	const { data, error } = useSWR(
		{
			query: gql`
				{
					module(input: {}) {
						id
						parentModules {
							moduleName
							id
						}
					}
				}
			`,
		},
		gqlFetcher
	)
	if (error) return <p>Failed to load content...</p>
	if (!data) return <p>Loading...</p>
	const moduleNames = []
	if (data?.module) {
		data.module.forEach((requirment) => {
			return requirment.parentModules.forEach((module) => {
				moduleNames.push(module.moduleName)
			})
		})
	}
	console.log({ moduleNames })

	return <ModuleRequirement requirements={moduleNames} {...args} />
}

export const Default: ComponentStory<typeof ModuleRequirement> = Template.bind(
	{}
)
Default.args = {}
