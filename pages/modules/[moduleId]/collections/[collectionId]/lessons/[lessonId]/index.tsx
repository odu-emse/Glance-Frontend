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


const ModuleSection = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	setLoading(true)

	const router = useRouter()
	const { moduleId, lessonId } = router.query

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading'
			? { query: getLessonByID(lessonId), token: session.idToken }
			: null,
		gqlFetcher
	)

	//console.log("data",data)

	if (status === 'loading') return
	if (error) {
		console.log(error)
		setLoading(false)
		return (
			<p>
				There was an issue loading this page. Please check your internet
				connection and try again.
			</p>
		)
	}

	if (!data || !data?.lesson) return

	function flattenCollections(collections) {
		const output = []
		const sortedCollections = collections.sort(
			(collectionA, collectionB) =>
				collectionA.position > collectionB.position
		)
		for (const collection of sortedCollections) {
			const sortedLessons = collection.lessons.sort(
				(lessonA, lessonB) => lessonA.position > lessonB.position
			)
			for (const lesson of sortedLessons) {
				output.push({
					collectionId: collection.id,
					lessonId: lesson.id,
				})
			}
		}

		return output
	}

	const lesson = data.lesson[0]
	console.log("lesson1", lesson)
	const _module = lesson.collection.module
	const collections = flattenCollections(_module.collections)
	//const content = lesson.content[0]

	// --- Next/Prev Page calculations
	const currentLessonIndex = collections.findIndex(
		(collection) => collection.lessonId === lessonId
	)
	const previousLesson =
		currentLessonIndex > 0 ? collections[currentLessonIndex - 1] : null
	const nextLesson =
		currentLessonIndex < collections.length - 1
			? collections[currentLessonIndex + 1]
			: null

	setLoading(false)


	//TO get Content Type
	const lessonContent = lesson.content
	   //console.log("content",lessonContent)
	let contentType = "";
	for(let i = 0; i < lessonContent.length; i++) {
		if(lessonContent[i].primary === true) { 
			contentType = lessonContent[i].type
			break;
	  }
	} 

	return (
		<section className="stdcontainer">
			<header>
				<h4 className="mb-6">
					<Link href={`/modules/${_module.id}`} passHref>
						<a
							title={`Return to the home page of "${_module.moduleName}"`}
						>
							MODULE {_module.moduleNumber}
						</a>
					</Link>
					&nbsp;&nbsp;<strong>//</strong>&nbsp;&nbsp;
					{_module.moduleName}
				</h4>
				<h3>{lesson.name}</h3>
			</header>

			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content  */}
				<ContentLoader type={contentType} data={lessonContent} />

				{/* Section sidebar */}
				<aside className="bg-white h-full w-1/4">
					{/* <ModuleNavigation data={data} selected={lessonId} /> */}
					AAA
				</aside>
			</div>
			{/* Previous and Next buttons */}
			<div className="w-full flex justify-between items-center">
				{previousLesson !== null && (
					<Link
						href={`/modules/${moduleId}/collections/${previousLesson.collectionId}/lessons/${previousLesson.lessonId}`}
						passHref
					>
						<Button>Previous</Button>
					</Link>
				)}
				<div className="grow"></div>
				{nextLesson !== null && (
					<Link
						href={`/modules/${moduleId}/collections/${nextLesson.collectionId}/lessons/${nextLesson.lessonId}`}
						passHref
					>
						<Button>Next</Button>
					</Link>
				)}
			</div>
		</section>
	)
}

ModuleSection.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModuleSection




                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    