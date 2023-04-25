/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useRouter } from 'next/router'
import gql_fetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import getLPbyPlanID from '@/scripts/get_lp_by_plan_id'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import { Collection, Course, LearningPath, Lesson, Module } from '@/types/index'
import GlobalUserContext from '@/contexts/global_user_context'
import { Button } from '@/common/button/button'
import LPSidebar from '@/common/learning_path/sidebar/sidebar'
import SectionCard from '@/common/learning_path/section/section_card'
import Loading from '@/common/loader/loader'

function PathIndexPage() {
	const router = useRouter()
	const { user: account } = useContext(GlobalUserContext)
	const [collapseSection, setCollapseSection] = React.useState(0)
	const [editMode, setEditMode] = React.useState(false)
	const sectionRef = React.useRef(null)
	const { path_id } = router.query
	const { data, error } = useSWR(
		getLPbyPlanID(account.plan.id, path_id as string),
		gql_fetcher
	) as {
		data: {
			learningPath: Array<LearningPath>
			module: Array<Module>
			lesson: Array<Lesson>
			collection: Array<Collection>
			course: Array<Course>
		}
		error: Error
	}

	if (error)
		return (
			<RequestFailed
				title={'An error occurred'}
				subtitle={'While retrieving your Learning Paths'}
			/>
		)

	if (!data) return <Loading />

	const LP = data.learningPath[0].paths[0]

	return (
		<section className="stdcontainer">
			<div className="flex gap-4 items-center justify-start my-4">
				<Button onClick={() => router.back()}>Back</Button>
				<h1>Path to {LP.course.name}</h1>
			</div>
			<div className="flex gap-1 items-start">
				<div className="flex-none w-2/3">
					<ul className="list-none m-0">
						{LP.course.sections.map((section, index) => (
							<SectionCard
								section={section}
								key={index}
								collapseIndex={collapseSection}
								sectionIndex={index}
								handleCollapse={setCollapseSection}
								sectionPointer={sectionRef}
								editMode={editMode}
								sectionsData={data.module}
							/>
						))}
					</ul>
				</div>
				<LPSidebar
					LP={LP}
					editMode={editMode}
					toggleEdit={setEditMode}
					triggerSave={function handle() {}}
				/>
			</div>
		</section>
	)
}

PathIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default PathIndexPage
