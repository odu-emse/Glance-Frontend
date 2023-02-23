import { BsArrowReturnRight } from 'react-icons/bs'

export const ModuleLesson = ({
	lessonName,
	lessonId,
}: ModuleLessonProps) => {
	return (
		<div className="m-2 text-lg flex items-center">
			<span><BsArrowReturnRight size={30}/>  </span>
			<div className="cursor-pointer m-1 text-xl">
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
