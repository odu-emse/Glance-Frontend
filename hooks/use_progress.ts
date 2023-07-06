import { getSectionByIDEnrolled } from 'scripts/get_module_by_id'
import { ModuleBySectionEnrollment } from '../types'
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
	sectionID,
	planID,
}: {
	sectionID: string
	planID: string
}): [
	data: {
		collectionID: string | null
		lessonID: string | null
	},
	loading: boolean,
	error: Error,
	self: ModuleBySectionEnrollment[],
] => {
	const { data, isValidating, error } = useSWR(
		{
			query: getSectionByIDEnrolled,
			variables: {
				sectionID,
				planID,
			},
		},
		gql_fetcher,
	) as {
		data: {
			modulesBySectionEnrollment: ModuleBySectionEnrollment[]
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
			data?.modulesBySectionEnrollment ?? [],
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

	console.log(data)

	const { modulesBySectionEnrollment } = data

	// sort the data by the collection position
	const sortedProgresses = modulesBySectionEnrollment.map((value) => {
		const moduleCollections = value.collections.sort(
			(a, b) => a.position - b.position,
		)
		return {
			...value,
			collections: moduleCollections,
		}
	})

	console.log(sortedProgresses)

	/**
	 * find out if the completed lessons are in the same collection
	 * if they are, return the next lesson in the collection
	 * if they are not, return the first lesson in the next collection
	 */

	const modulesLeft = sortedProgresses.filter((progress) => {
		const moduleProgresses = progress.moduleProgress.filter(
			(progress) => progress.completed,
		)
		return moduleProgresses.length === 0
	})
	// .sort((a, b) => a.position - b.position)

	console.log(modulesLeft)

	// const nextCollection = lessonsLeft[0]?.collection

	// const nextLesson = lessonsLeft.filter(
	// 	(lesson) => lesson.collection.id === nextCollection.id
	// )[0]

	return [
		{
			collectionID: null,
			lessonID: null,
		},
		false,
		null,
		modulesBySectionEnrollment,
	]
	// return [
	// 	{
	// 		collectionID: nextCollection.id,
	// 		lessonID: nextLesson.id,
	// 	},
	// 	false,
	// 	null,
	// 	modulesBySectionEnrollment,
	// ]
}
