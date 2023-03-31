import { ActiveModules } from '@/common/pages/active_modules/active_modules'
import { Thread } from '@/common/community/threads/thread/thread'
import { WatchedThreads } from '@/common/community/watched_threads/watched_threads'
import { Input } from '@/common/forms/inputs/input/input'
import * as React from 'react'
import gqlFetcher from '../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { User } from '../../../../types'
import { Layout } from '@/common/pages/layouts/layout/layout'

export type ModuleCommunityProps = {}

export const ModuleCommunity = ({}): React.ReactElement => {
	const router = useRouter()
	const { data: session } = useSession()
	const { module } = router.query
	const { data: userData, error: userError } = useSWR(
		session
			? {
					query: gql`{
          user(input:{
              openID: "${session?.openId}"
          }){
              plan {
									id
              }
          }
      }`,
			  }
			: null,
		gqlFetcher
	) as { data: { user: Array<User> }; error: Error }
	const { data, error } = useSWR(
		userData && {
			query: gql`
				query CommunitiesPageQuery(
					$moduleID: ID
					$role: UserRole!
					$planID: ID
				) {
					roleQuery: moduleEnrollment(
						input: { module: $moduleID, role: $role }
					) {
						id
						plan {
							student {
								firstName
								lastName
								email
								picURL
							}
						}
					}
					userQuery: moduleEnrollment(
						input: { module: $moduleID, plan: $planID }
					) {
						id
						status
						role
						module {
							id
							collections {
								id
								lessons {
									id
									name
									threads {
										id
										title
										body
										updatedAt
										createdAt
										author {
											id
											email
											firstName
											lastName
											picURL
										}
										upvotes {
											id
										}
									}
								}
							}
						}
					}
				}
			`,
			variables: {
				moduleID: module,
				planID: userData.user[0].plan.id,
				role: 'TEACHER',
			},
		},
		gqlFetcher
	)

	if (error || userError) {
		console.log(error)
		throw new Error(error)
	}
	if (!data || !userData) {
		return <div>Loading...</div>
	}

	return (
		<div className="m-8 flex">
			<div className="m-10 grow">
				{
					<>
						<p className="text-3xl font-semibold">
							{data.userQuery[0].module.moduleName}
						</p>

						<div className="flex my-2 items-center">
							<img
								src={data.roleQuery[0].plan.student.picURL}
								alt="profile image"
								className="shadow-lg rounded-full max-w-full h-4 align-middle border-none"
							/>

							<small className="pl-2 font-bold">
								{data.roleQuery[0].plan.student.email}
							</small>

							<small>
								<span className="px-1 font-bold">&bull;</span>
								{data.roleQuery[0].plan.student.firstName +
									data.roleQuery[0].plan.student.lastName}
							</small>
						</div>

						<div className="flex items-center">
							<h1 className="text-lg font-semibold flex-none pr-20">
								Recent Threads
							</h1>
							<Input
								defaultValue=""
								label="Search"
								name="floating_search"
								onChange={function noRefCheck() {}}
								role="search"
								type="search"
								options={[]}
							/>
						</div>
						{data.userQuery[0].module.collections.map((col) =>
							col.lessons.map((les) =>
								les.threads
									.filter((v) => v.title)
									.sort(
										(a, b) =>
											new Date(b.updatedAt).valueOf() -
											new Date(a.updatedAt).valueOf()
									)
									.map((thr, index) => (
										<div className="m-3" key={index}>
											<div className="my-4">
												<Thread
													body={thr.body}
													id="12345"
													title={thr.title}
													upvotes={
														thr.upvotes.length || 0
													}
													userProfile={thr.author}
												/>
											</div>
										</div>
									))
							)
						)}
					</>
				}
			</div>
			<aside className="mx-10 flex-none">
				<div className="mb-10">
					<ActiveModules modules={[]} />
				</div>
				<div className="mb-10">
					<WatchedThreads threads={[]} />
				</div>
			</aside>
		</div>
	)
}

ModuleCommunity.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}
