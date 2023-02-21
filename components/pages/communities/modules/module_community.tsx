import { ActiveModules } from '../../../common/pages/active_modules/active_modules'
import { Thread } from '../../../common/community/threads/thread/thread'
import { WatchedThreads } from '../../../common/community/watched_threads/watched_threads'
import { Input } from '../../../common/forms/inputs/input/input'
import * as React from 'react'
import gqlFetcher from '../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'
import useSWR from 'swr'

export type ModuleCommunityProps = {}

export const ModuleCommunity: React.FC<
	ModuleCommunityProps
> = ({}): React.ReactElement => {
	const { data, error } = useSWR(
		{
			query: gql`
				{
					module(input: { id: "620d2d2df524b2dcf02b5bbe" }) {
						id
						moduleName
						description
						members {
							role
							plan {
								student {
									firstName
									lastName
									email
									picURL
								}
							}
						}
						collections {
							lessons {
								threads {
									title
									author {
										email
										firstName
										lastName
										picURL
									}
									body

									upvotes
								}
							}
						}
					}
				}
			`,
		},
		gqlFetcher
	)

	if (error) {
		console.log(error)
		throw new Error(error)
	}
	if (!data) {
		return <div>Loading...</div>
	}

	const mod = data?.module[0]
	const teacher = mod?.members.filter(
		(member) => member.role === 'TEACHER'
	)[0]

	return (
		<div className="m-8 flex">
			<div className="m-10 grow">
				{
					<>
						<p className="text-3xl font-semibold">
							{mod.moduleName}
						</p>

						<div className="flex my-2 items-center">
							<img
								src={teacher.plan.student.picURL}
								alt="profile image"
								className="shadow-lg rounded-full max-w-full h-4 align-middle border-none"
							/>

							<small className="pl-2 font-bold">
								{teacher.plan.student.email}
							</small>

							<small>
								<span className="px-1 font-bold">&bull;</span>
								{teacher.plan.student.firstName +
									teacher.plan.student.lastName}
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
						{mod.collections.map((col) =>
							col.lessons.map((les) =>
								les.threads.map((thr, index) => (
									<div className="m-3" key={index}>
										<div className="my-4">
											<Thread
												body={thr.body}
												id="12345"
												title={thr.title}
												upvotes={thr.upvotes}
												userProfile={{
													firstName:
														thr.author.firstname,
													id: 1,
													image: thr.author.picURL,
													lastName:
														thr.author.lastName,
												}}
											/>
										</div>
										{/* <Thread
						body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas."
						id="12345"
						title="How did the United States land on the moon?"
						upvotes={10}
						userProfile={{
							firstName: 'joel',
							id: 1,
							image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
							lastName: 'desante',
						}}
					/> */}
									</div>
								))
							)
						)}
					</>
					// ))))
				}
			</div>
			<aside className="mx-10 flex-none">
				<div className="mb-10">
					<ActiveModules
						modules={[
							{
								module_id: 'moduleid1',
								module_name:
									'Is the sky purple or have I just been looking at my computer for too long?',
							},
							{
								module_id: 'moduleid2',
								module_name: 'What is the meaning of life?',
							},
							{
								module_id: 'moduleid1',
								module_name:
									'Why did the engineer cross the road?',
							},
							{
								module_id: 'moduleid6',
								module_name: 'This is a test. Test test test',
							},
						]}
					/>
				</div>
				<div className="mb-10">
					<WatchedThreads
						threads={[
							{
								module_id: 'moduleid1',
								module_name:
									'Is the sky purple or have I just been looking at my computer for too long?',
								thread_id: 'threadid1',
							},
							{
								module_id: 'moduleid2',
								module_name: 'What is the meaning of life?',
								thread_id: 'threadid4',
							},
							{
								module_id: 'moduleid1',
								module_name:
									'Why did the engineer cross the road?',
								thread_id: 'threadid2',
							},
							{
								module_id: 'moduleid6',
								module_name: 'This is a test. Test test test',
								thread_id: 'threadid1',
							},
						]}
					/>
				</div>
			</aside>
		</div>
	)
}
