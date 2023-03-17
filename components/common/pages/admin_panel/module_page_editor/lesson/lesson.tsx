import { BsArrowReturnRight } from 'react-icons/bs'

export const ModuleLesson = ({ lessonName, lessonId }: ModuleLessonProps) => {
	return (
		<div className="flex items-center">
			<span>
				<BsArrowReturnRight size={25} />
			</span>
			<div className="cursor-pointer m-1 text-lg">
				Lesson {lessonId} : {lessonName}
			</div>
		</div>
	)
}

export type ModuleLessonProps = {
	lessonName: string
	/**
	 * string that shows up name of the lesson on Default Card
	 */
	lessonId: number
	/**
	 * unique number that shows up id of the lesson
	 */
}
