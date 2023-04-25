import { useRouter } from 'next/router'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getSectionByIDUnenrolled } from '@/scripts/get_module_by_id'
import { Button } from '@/components/common/button/button'
import Link from 'next/link'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { useContext } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import { useProgress } from '@/hooks/use_progress'
import Loader from '@/components/util/loader'
import * as React from 'react'
import { Section } from '@/types/graphql'

const Module = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	const { data: session, status } = useSession()
	setLoading(true)

	const router = useRouter()
	const { moduleId } = router.query

	const { data: sectionData, error: sectionError } = useSWR(
		status !== 'loading'
			? {
					query: getSectionByIDUnenrolled,
					token: session.idToken,
					variables: {
						sectionID: moduleId as string,
					},
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			section: Section[]
		}
		error: Error
	}

	const [{ collectionID, lessonID }, loading, progressError, self] =
		useProgress({
			sectionID: moduleId as string,
			planID: user.plan.id,
		})

	if (status === 'loading')
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

	if (sectionError) {
		setLoading(false)
		return (
			<h3>
				There was an issue loading this page. Please check your internet
				connection and try again...
			</h3>
		)
	}

	if (!sectionData) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	if (progressError) {
		console.error(progressError)
	}

	const section = sectionData.section[0]
	const instructors = section.members?.filter(
		(member) => member.role === 'TEACHER'
	)

	setLoading(false)

	const isStarted = !self
		? false
		: self
				.map((lesson) => lesson)
				.some((lesson) =>
					lesson.moduleProgress
						.map((progress) => progress)
						.some((progress) => progress.status !== 0)
				)

	return (
		<section className="stdcontainer">
			<header>
				<h1>{section.sectionName}</h1>
				<div className="flex flex-row gap-2">
					<figcaption>MODULE {section.sectionNumber}</figcaption>
					<figcaption>/</figcaption>
					<figcaption>
						Instructed by{' '}
						{instructors.map((instructor) => {
							return (
								<span key={instructor.id}>
									<Link
										href={`/users/${instructor.id}`}
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
					href={`/modules/${section.id}/collections/${collectionID}/lessons/${lessonID}`}
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
					{section.description ?? 'No description has been provided.'}
				</p>
			</section>

			<section>
				<header className="mb-0">
					<h2>Requirements</h2>
				</header>
				<ul className="mt-0 mb-0">
					{section.parentSections.map((parentModule, index) => {
						return (
							<li key={index}>
								<Link
									href={`/sectionules/${parentModule.id}`}
									passHref
								>
									<a>
										{parentModule.sectionName} (MODULE{' '}
										{parentModule.sectionNumber})
									</a>
								</Link>
							</li>
						)
					})}
				</ul>
				{section.parentSections.length === 0 && (
					<p className="mt-0">No prior requirements necessary.</p>
				)}
			</section>

			<section>
				<header className="mb-0">
					<h2>Objectives</h2>
				</header>
				<ul className="mt-0 mb-0">
					{section.objectives.map((objective, index) => {
						return <li key={index}>{objective}</li>
					})}
				</ul>
				{section.objectives.length === 0 && (
					<p className="mt-0">
						No section objectives have been provided.
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
