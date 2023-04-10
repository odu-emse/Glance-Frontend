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
import { LessonByModuleEnrollment } from '../../../types'
import { useProgress } from '@/hooks/use_progress'

const Module = () => {
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
						planID: user.plan.id,
					},
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			module: {
				id: string
			}
			lessonsByModuleEnrollment: LessonByModuleEnrollment[]
		}
		error: Error
	}

	const [{ collectionID, lessonID }, loading, progressError] = useProgress({
		moduleID: moduleId as string,
		planID: user.plan.id,
	})

	if (status === 'loading' || loading) return
	if (error || progressError) {
		console.log(error)
		setLoading(false)
		return (
			<p>
				There was an issue loading this page. Please check your internet
				connection and try again...
			</p>
		)
	}

	if (!data) {
		return
	}

	const moduleData = data.module[0]
	const instructors = moduleData.members?.filter(
		(member) => member.role === 'TEACHER'
	)

	setLoading(false)

	console.log(data.lessonsByModuleEnrollment.map((lesson) => lesson))

	const isStarted = data.lessonsByModuleEnrollment
		.map((lesson) => lesson)
		.some((lesson) =>
			lesson.lessonProgress
				.map((progress) => progress)
				.some((progress) => progress.status !== 0)
		)

	// const findNextLesson = () : string => {
	// 	let nextLessonID = ''
	// 	const lessons = data.lessonsByModuleEnrollment.map(lesson => lesson)
	// 	const lastCompletedLesson = lessons.find(lesson => lesson.lessonProgress.map(progress => progress).some(progress => progress.completed))
	//
	// 	if (lastCompletedLesson) {
	// 		const nextLesson = lessons.find(lesson => lesson.position === lastCompletedLesson.position + 1)
	// 		if (nextLesson) {
	// 			nextLessonID = nextLesson.id
	// 		} else {
	// 			nextLessonID = lastCompletedLesson.id
	// 		}
	// 	}
	// 	return nextLessonID
	// }
	//
	// const findCollection = (lessonID: string) : string => {
	// 	let collectionID = ''
	// 	const lessons = data.lessonsByModuleEnrollment.map(lesson => lesson)
	// 	const lesson = lessons.find(lesson => lesson.id === lessonID)
	// 	if (lesson) {
	// 		collectionID = lesson.collection.id
	// 	}
	// 	console.log(collectionID);
	// 	return collectionID
	// }

	return (
		<section className="stdcontainer">
			<header>
				<h1>{moduleData.moduleName}</h1>
				<div className="flex flex-row gap-2">
					<figcaption>MODULE {moduleData.moduleNumber}</figcaption>
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
					href={`/modules/${moduleData.id}/collections/${collectionID}/lessons/${lessonID}`}
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
					{moduleData.description ??
						'No description has been provided.'}
				</p>
			</section>

			<section>
				<header className="mb-0">
					<h2>Requirements</h2>
				</header>
				<ul className="mt-0 mb-0">
					{moduleData.parentModules.map((parentModule, index) => {
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
				{moduleData.parentModules.length === 0 && (
					<p className="mt-0">No prior requirements necessary.</p>
				)}
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
