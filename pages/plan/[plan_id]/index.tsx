import React, { useContext } from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import GlobalUserContext from '@/contexts/global_user_context'
import gql_fetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import Loader from '@/components/util/loader'
import { LearningPath } from '@/types/index'
import Link from 'next/link'
import getLPbyPlanID from '@/scripts/get_lp_by_plan_id'

function PlanOfStudyIndexPage() {
	const { data: session } = useSession()
	const { user: account } = useContext(GlobalUserContext)
	const { data, error } = useSWR(
		account !== null ? getLPbyPlanID(account.plan.id) : null,
		gql_fetcher
	) as {
		data: { learningPath: Array<LearningPath> }
		error: Error
	}

	if (error)
		return (
			<RequestFailed
				title={'An error occurred'}
				subtitle={'While retrieving your Learning Paths'}
			/>
		)

	if (!data)
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

	return (
		<section className="flex flex-col stdcontainer">
			<div className="flex flex-col mb-5">
				<h1 className="mb-3">plan of study</h1>
				<h2 className="">
					Hi, <span className="uppercase">{session.user.name}</span>!
					Check out...
				</h2>
			</div>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-7">
				<PlanOfStudyPanel title={'My Paths'}>
					<ul className="m-0 list-none divide-y">
						{data.learningPath[0].paths.map((path, index) => {
							return (
								<li
									key={index}
									className="flex justify-between items-center gap-1 my-1 sans"
								>
									<p className="">{path.course.name}</p>
									<span className="text-sm py-1 rounded-md bg-wgray font-semibold px-2">
										{path.status}
									</span>
									<time className="">
										{path.hoursSatisfies} hours
									</time>
									<Link
										href={`/plan/${session.openId}/paths/${path.id}`}
									>
										<a className="text-royalblue">View</a>
									</Link>
								</li>
							)
						})}
					</ul>
				</PlanOfStudyPanel>
				<PlanOfStudyPanel title={'Most recent modules'} />
				<PlanOfStudyPanel title={'my latest threads'} />
				<PlanOfStudyPanel title={'most recent assignments'} />
			</div>
		</section>
	)
}

const PlanOfStudyPanel = ({
	title,
	children,
}: {
	title: string
	children?: React.ReactNode[] | React.ReactNode
}) => {
	return (
		<div className="col-span-1 row-span-1 h-64 border border-wgray rounded-sm p-3">
			<h3>{title}</h3>
			<>
				{Array.isArray(children)
					? children.map((child, index) => (
							<div key={index}>{child}</div>
					  ))
					: children}
			</>
		</div>
	)
}

PlanOfStudyIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default PlanOfStudyIndexPage
