import { useRouter } from 'next/router'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getModuleByIDUnenrolled } from '@/scripts/get_module_by_id'
import { Button } from '@/components/common/button/button'
import Link from 'next/link'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { useContext } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import { Module as ModuleType } from '../../../types'
import { useProgress } from '@/hooks/use_progress'
import Loader from '@/components/util/loader'
import * as React from 'react'
import modulesStories from '@/components/pages/admin_panel_page/modules/modules.stories'

const Module = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	const { data: session, status } = useSession()
	setLoading(true)

	const router = useRouter()
	const { moduleId } = router.query

	const { data: moduleData, error: moduleError } = useSWR(
		status !== 'loading'
			? {
					query: getModuleByIDUnenrolled,
					token: session.idToken,
					variables: {
						moduleID: moduleId as string,
					},
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			module: ModuleType[]
		}
		error: Error
	}

	const [{ collectionID, lessonID }, loading, progressError, self] =
		useProgress({
			moduleID: moduleId as string,
			planID: user.plan.id,
		})

	if (status === 'loading')
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

	if (moduleError) {
		setLoading(false)
		return (
			<h3>
				There was an issue loading this page. Please check your internet
				connection and try again...
			</h3>
		)
	}

	if (!moduleData) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	if (progressError) {
		console.error(progressError)
	}

	const mod = moduleData.module[0]
	const instructors = mod.members?.filter(
		(member) => member.role === 'TEACHER'
	)

	setLoading(false)

	const isStarted = !self
		? false
		: self
				.map((lesson) => lesson)
				.some((lesson) =>
					lesson.lessonProgress
						.map((progress) => progress)
						.some((progress) => progress.status !== 0)
				)

	return (
		<section className="stdcontainer">
			<header>
				<h1>{mod.moduleName}</h1>
				<div className="flex flex-row gap-2">
					<figcaption>MODULE {mod.moduleNumber}</figcaption>
					<figcaption>/</figcaption>
					<figcaption>
						Instructed by{' '}
						{instructors.map((instructor) => {
							return (
								<span key={instructor.id}>
									<Link
										href={`/users/${instructor.plan.student.openID}?instructor=true`}
										passHref
									>
										<a>
											{instructor.plan.student.firstName}{' '}
											{instructor.plan.student.lastName}
										</a>
									</Link>
								</span>
							)
						})}
					</figcaption>
				</div>
			</header>

			<div className="my-4">
				<Link
					href={`/modules/${mod.id}/collections/${collectionID}/lessons/${lessonID}`}
					passHref
				>
					<Button>
						{isStarted ? 'RESUME MODULE' : 'START MODULE'}
					</Button>
				</Link>
			</div>

			<hr />

			<section>
				<header className="mb-0">
					<h2>Description</h2>
				</header>
				<p className="mt-0">
					{mod.description ?? 'No description has been provided.'}
				</p>
			</section>

			<section>
				<header className="mb-0">
					<h2>Requirements</h2>
				</header>
				<ul className="mt-0 mb-0">
					{mod.parentModules.map((parentModule, index) => {
						return (
							<li key={index}>
								<Link
									href={`/modules/${parentModule.id}`}
									passHref
								>
									<a>
										{parentModule.moduleName} (MODULE{' '}
										{parentModule.moduleNumber})
									</a>
								</Link>
							</li>
						)
					})}
				</ul>
				{mod.parentModules.length === 0 && (
					<p className="mt-0">No prior requirements necessary.</p>
				)}
			</section>

			<section>
				<header className="mb-0">
					<h2>Objectives</h2>
				</header>
				<ul className="mt-0 mb-0">
					{mod.objectives.map((objective, index) => {
						return <li key={index}>{objective}</li>
					})}
				</ul>
				{mod.objectives.length === 0 && (
					<p className="mt-0">
						No module objectives have been provided.
					</p>
				)}
			</section>
		</section>
	)
}

Module.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Module
