import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import Link from 'next/link'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { Button } from '@/components/common/button/button'

//import ModuleNavigation from '@/components/modules/ModuleSidebar/ModuleNavigation'
//import ContentLoader from '@/components/modules/content_type/ContentLoader'
import { ContentLoader } from '@/components/pages/modules/module/lessons/lesson/content_type/content_loader'

import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getLessonByID } from '@/scripts/get_lesson_by_id'

const ModuleSection = () => {
	
	const router = useRouter()
	const { moduleId, collectionId, lessonId } = router.query

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading' ? { query: getLessonByID(lessonId), token: session.idToken } : null,
		gqlFetcher
	)


	if (status == 'loading') return <p>Loading...</p>
	if (error) { 
		console.log(error)
		return <p>Error...</p>
	}

	if (!data || !data?.lesson) {
		return <div>Loading...</div>
	}

	function flattenCollections(collections) {

		let output = []
		const sortedCollections = collections.sort((collectionA, collectionB) => collectionA.position > collectionB.position)
		for (const collection of sortedCollections) {
			const sortedLessons = collection.lessons.sort((lessonA, lessonB) => lessonA.position > lessonB.position)
			for (const lesson of sortedLessons) {
				output.push({
					collectionId: collection.id,
					lessonId: lesson.id
				})
			}
		}

		return output;
	}

	const lesson = data.lesson[0];
	const module = lesson.collection.module;
	const collections = flattenCollections(module.collections)
	const content = lesson.content[0]

	console.log(lesson)
	
	// --- Next/Prev Page calculations
	const currentLessonIndex = collections.findIndex(collection => collection.lessonId === lessonId);
	const previousLesson = currentLessonIndex > 0 ? collections[currentLessonIndex - 1] : null
	const nextLesson = currentLessonIndex < (collections.length - 1)  ? collections[currentLessonIndex + 1] : null
	
	return (
		<section className="mx-auto container h-screen">
			<h1 className="my-3 text-3xl font-bold">
				{module.moduleName} - {lesson.name}
			</h1>
			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content */}
				<ContentLoader type={content.type} data={content.link} />

				{/* Section sidebar */}
				<aside className="bg-white h-full w-1/4">
					{/* <ModuleNavigation data={data} selected={lessonId} /> */}
					AAA
				</aside>
			</div>
			{/* Previous and Next buttons */}
			<div className="w-full flex justify-between items-center">
				{ previousLesson !== null && (
					<Link href={`/modules/${moduleId}/collections/${previousLesson.collectionId}/lessons/${previousLesson.lessonId}`} passHref>
						<Button>Previous</Button>
					</Link>
				) }

				{ nextLesson !== null && (
					<Link href={`/modules/${moduleId}/collections/${nextLesson.collectionId}/lessons/${nextLesson.lessonId}`} passHref>
						<Button>Next</Button>
					</Link>
				) }
			</div>
		</section>
	)
}

ModuleSection.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModuleSection
