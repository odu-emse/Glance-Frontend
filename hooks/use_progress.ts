import { getModuleByIDEnrolled } from 'scripts/get_module_by_id'
import { Lesson, LessonByModuleEnrollment, LessonProgress } from '../types'
import useSWR from 'swr'
import gql_fetcher from '@/utils/gql_fetcher'

/**
 * @param moduleID - The ID of the module to get the progress for
 * @param planID - The ID of the plan to get the progress for
 * @returns The next lesson in the module, or null if the module is complete
 * @description
 * Based on the inputted module enrollment, this hook will find the latest lesson that has a completed progress, and return the next lesson in the collection.
 * If the lesson is the last lesson in the collection, it will return the first lesson in the next collection.
 * If the lesson is the last lesson in the last collection, it will return null.
 */
export const useProgress = ({
	moduleID,
	planID,
}: {
	moduleID: string
	planID: string
}): [
	data: {
		collectionID: string | null
		lessonID: string | null
	},
	loading: boolean,
	error: Error,
	self: LessonByModuleEnrollment[]
] => {
	const { data, isValidating, error } = useSWR(
		{
			query: getModuleByIDEnrolled,
			variables: {
				moduleID,
				planID,
			},
		},
		gql_fetcher,
		{
			revalidateOnFocus: false,
			revalidateIfStale: false,
			revalidateOnReconnect: false,
			refreshWhenHidden: false,
			revalidateOnMount: false,
			errorRetryCount: 1,
			shouldRetryOnError: false,
		}
	) as {
		data: {
			lessonsByModuleEnrollment: LessonByModuleEnrollment[]
		}
		isValidating: boolean
		error: Error
	}

	if (isValidating)
		return [
			{
				collectionID: null,
				lessonID: null,
			},
			true,
			null,
			data?.lessonsByModuleEnrollment ?? [],
		]
	if (error)
		return [
			{
				collectionID: null,
				lessonID: null,
			},
			false,
			error,
			[],
		]
	if (!data)
		return [
			{
				collectionID: null,
				lessonID: null,
			},
			true,
			null,
			[],
		]

	const { lessonsByModuleEnrollment } = data

	// sort the data by the collection position
	const progresses = lessonsByModuleEnrollment.sort(
		(a, b) => a.collection.position - b.collection.position
	)

	/**
	 * find out if the completed lessons are in the same collection
	 * if they are, return the next lesson in the collection
	 * if they are not, return the first lesson in the next collection
	 */
	const lessonsLeft = progresses
		.filter((lesson: Lesson) => {
			const lessonProgress = lesson.lessonProgress.filter(
				(progress: LessonProgress) => progress.completed
			)
			return lessonProgress.length === 0
		})
		.sort((a, b) => a.collection.position - b.collection.position)

	const nextCollection = lessonsLeft[0]?.collection

	const nextLesson = lessonsLeft.filter(
		(lesson: Lesson) => lesson.collection.id === nextCollection.id
	)[0]

	return [
		{
			collectionID: nextCollection.id,
			lessonID: nextLesson.id,
		},
		false,
		null,
		lessonsByModuleEnrollment,
	]
}
