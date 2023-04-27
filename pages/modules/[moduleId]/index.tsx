import { useRouter } from 'next/router'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getModuleByID } from '@/scripts/get_module_by_id'
import { Button } from '@/components/common/button/button'
import Link from 'next/link'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { useContext } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import { useProgress } from '@/hooks/use_progress'
import Loader from '@/components/util/loader'
import * as React from 'react'
import { Module } from '@/types/graphql'

const ModuleIndexPage = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	const { data: session, status } = useSession()
	setLoading(true)

	const router = useRouter()
	const { moduleId } = router.query

	const { data, error } = useSWR(
		status !== 'loading'
			? {
					query: getModuleByID,
					token: session.idToken,
					variables: {
						moduleID: moduleId as string,
					},
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			module: Module[]
		}
		error: Error
	}

	// const [{ collectionID, moduleID }, loading, progressError, self] =
	// 	useProgress({
	// 		sectionID: moduleId as string,
	// 		planID: user.plan.id,
	// 	})

	if (status === 'loading')
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

	if (error) {
		setLoading(false)
		return (
			<h3>
				There was an issue loading this page. Please check your internet
				connection and try again...
			</h3>
		)
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	const moduleData = data.module[0]

	setLoading(false)

	// const isStarted = !self
	// 	? false
	// 	: self
	// 			.map((lesson) => lesson)
	// 			.some((lesson) =>
	// 				lesson.moduleProgress
	// 					.map((progress) => progress)
	// 					.some((progress) => progress.status !== 0)
	// 			)

	return (
		<section className="stdcontainer">
			<header>
				<h1>{moduleData.name}</h1>
				<div className="flex flex-row gap-2">
					<figcaption>
						MODULE {moduleData.prefix && moduleData.prefix}
						{moduleData.number}
					</figcaption>
					<figcaption>/</figcaption>
					<figcaption>
						Instructed by{' '}
						<div className="inline-block">
							<Link
								href={`/users/${moduleData.instructor?.account.openID}?instructor=true`}
								passHref
							>
								<a>
									{moduleData.instructor?.title}{' '}
									{moduleData.instructor?.account.firstName}{' '}
									{moduleData.instructor?.account.lastName}
								</a>
							</Link>
						</div>
					</figcaption>
				</div>
			</header>

			<div className="my-4">
				<Link
					href={`/modules/${moduleData.id}/collections/1/lessons/2`}
					passHref
				>
					<Button>
						{/*{isStarted ? 'RESUME MODULE' : 'START MODULE'}*/}
						Start Module
					</Button>
				</Link>
			</div>

			<hr />

			<section>
				<header className="mb-0">
					<h2>Credit hours</h2>
				</header>
				<p className="mt-0">{moduleData.hours} hours</p>
			</section>

			<section>
				<header className="mb-0">
					<h2>Description</h2>
				</header>
				<p className="mt-0">
					{moduleData.description ??
						'No description has been provided.'}
				</p>
			</section>

			<section>
				<header className="mb-0">
					<h2>Recommended Modules</h2>
				</header>
				<ul className="mt-0 mb-0">
					{moduleData.collections.map(
						(collection, collectionIndex) => {
							return collection.modules
								.filter((mod) => mod.id !== moduleData.id)
								.map((module, moduleIndex) => {
									return (
										<li key={moduleIndex}>
											<Link
												href={`/modules/${module.id}`}
												passHref
											>
												<a>
													{module.name} (MODULE{' '}
													{module.prefix &&
														module.prefix}
													{module.number})
												</a>
											</Link>
										</li>
									)
								})
						}
					)}
				</ul>
			</section>

			<section>
				<header className="mb-0">
					<h2>Objectives</h2>
				</header>
				<ul className="mt-0 mb-0">
					{moduleData.objectives.map((objective, index) => {
						return <li key={index}>{objective}</li>
					})}
				</ul>
				{moduleData.objectives.length === 0 && (
					<p className="mt-0">
						No section objectives have been provided.
					</p>
				)}
			</section>
		</section>
	)
}

ModuleIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModuleIndexPage
