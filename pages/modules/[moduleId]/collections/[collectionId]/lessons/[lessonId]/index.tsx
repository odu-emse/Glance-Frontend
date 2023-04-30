import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { Button } from '@/components/common/button/button'

import { ContentLoader } from '@/components/pages/modules/module/lessons/lesson/content_type/content_loader'

import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getLessonByID } from '@/scripts/get_lesson_by_id'
import { useContext } from 'react'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { gql } from 'graphql-request'
import { SidebarLessons } from '@/components/common/pages/sidebar/sidebar_lessons/sidebar_lessons'
import { getModuleByIDForFlow } from '@/scripts/get_module_by_id'
import Loading from '@/common/loader/loader'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import { Collection, Module } from '@/types/graphql'
import GlobalUserContext from '@/contexts/global_user_context'

const ModuleSection = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	// setLoading(true)

	const router = useRouter()
	const { moduleId, lessonId, collectionId } = router.query

	const { data, error } = useSWR(
		{
			query: getModuleByIDForFlow,
			variables: { moduleID: moduleId, planID: user.plan.id },
		},
		gqlFetcher
	) as {
		data: {
			moduleFlowFromLearningPath: {
				nextModule: Module
				currentModule: Module
				previousModule: Module
				nextCollection: Collection
				currentCollection: Collection
				previousCollection: Collection
			}
		}
		error: Error
	}

	if (error) {
		setLoading(false)
		return (
			<RequestFailed
				title="Failed to load module"
				subtitle="Please try again later"
			/>
		)
	}

	if (!data) return <Loading />

	/**
	 * 1. get current collection
	 * 2. get next collection
	 * 3. get next module in the next collection
	 *
	 */

	console.log(data)

	const primaryContent =
		data.moduleFlowFromLearningPath.currentModule.content.find(
			(v) => v.primary
		)

	return (
		<section className="flex">
			<div className="SectionContent stdcontainer grow flex-col">
				<header>
					<h4 className="mb-6">
						<Link
							href={`/modules/${data.moduleFlowFromLearningPath.currentCollection.id}`}
							passHref
						>
							<a
								title={`Return to the home page of "${data.moduleFlowFromLearningPath.currentCollection.name}"`}
							>
								Collection{' '}
								{
									data.moduleFlowFromLearningPath
										.currentCollection.name
								}
							</a>
						</Link>
						&nbsp;&nbsp;<strong>//</strong>&nbsp;&nbsp;
						{data.moduleFlowFromLearningPath.currentCollection.name}
					</h4>
					<h3>
						{data.moduleFlowFromLearningPath.currentModule.name}
					</h3>
				</header>

				<div className="flex h-4/5 gap-2 my-2">
					{/* Section content  */}
					<ContentLoader
						type={primaryContent.type}
						data={
							data.moduleFlowFromLearningPath.currentModule
								.content
						}
					/>
				</div>
				{/* Previous and Next buttons */}
				<div className="w-full flex justify-between items-center">
					{data.moduleFlowFromLearningPath.previousModule !==
						null && (
						<Link
							href={`/modules/${data.moduleFlowFromLearningPath.previousModule.id}/collections/${data.moduleFlowFromLearningPath.previousCollection?.id}/lessons/${data.moduleFlowFromLearningPath.previousModule.id}`}
							passHref
						>
							<Button>Previous</Button>
						</Link>
					)}
					<div className="grow"></div>
					{data.moduleFlowFromLearningPath.nextModule !== null && (
						<Link
							href={`/modules/${data.moduleFlowFromLearningPath.nextModule.id}/collections/${data.moduleFlowFromLearningPath.nextCollection.id}/lessons/${data.moduleFlowFromLearningPath.nextModule.id}`}
							passHref
						>
							<Button>Next</Button>
						</Link>
					)}
				</div>
			</div>
			{/* Section sidebar */}
			<aside className="SectionSidebar bg-white h-full w-1/4 sticky top-0">
				{/* <ModuleNavigation data={data} selected={lessonId} /> */}
				<SidebarLessons
					open={true}
					handle={() => console.log('toggled')}
				/>
			</aside>
		</section>
	)
}

ModuleSection.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModuleSection
