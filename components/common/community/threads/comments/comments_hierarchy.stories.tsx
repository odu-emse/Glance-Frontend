import * as React from 'react'
import { CommentsHierarchy, CommentsHierarchyProps } from './comments_hierarchy'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import useSWR from 'swr'
import gqlFetcher from '../../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'

export default {
	title: 'Common/Community/Thread/Comments Hierarchy',
	component: CommentsHierarchy,
} as ComponentMeta<typeof CommentsHierarchy>

const Template: ComponentStory<typeof CommentsHierarchy> = (
	args: CommentsHierarchyProps
) => {
	const { data, error } = useSWR(
		{
			query: gql`
				{
					thread(input: { id: "63e3f79631115da3472a72dc" }) {
						id
						title
						body
						author {
							id
						}
						comments {
							id
							body
							comments {
								id
								body
								comments {
									id
									body
								}
							}
						}
					}
				}
			`,
		},
		gqlFetcher
	)

	if (!data) return <p>Loading...</p>
	if (error) return <p>Failed to load content...</p>
	console.log(data)
	return <CommentsHierarchy {...args} thread={data.thread[0]} />
}

export const Sample = Template.bind({})
Sample.storyName = 'Default'
Sample.args = {}
