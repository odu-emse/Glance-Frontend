import * as React from 'react'
import { LessonLink } from '../FormElements/LessonLink'
import type { LessonLinkProps } from '../FormElements/LessonLink'

export const Accordion = ({ lessons, title }: AccordionProps) => {
	return (
		<div className="accordion">
			<div className="accordion-heading">
				<button
					type="button"
					className="flex items-center justify-between w-80 p-5 font-medium text-left border border-b-0 border-gray-400 rounded-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-400 dark:bg-gray-800 text-black dark:text-white"
				>
					<span>{title}</span>
					<span>
						{
							lessons.filter((status) => status.checked === true)
								.length
						}
						/{lessons.length}
					</span>
				</button>
			</div>
			<div className="accordion-collapse-body w-80">
				<div className="p-5 font-light border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
					<p className="mb-2 text-gray-900 dark:text-gray-400">
						{lessons?.length &&
							lessons.map((lesson, lessonIndex) => (
								<LessonLink
									key={lessonIndex}
									label={lesson.label}
									url={lesson.url}
									checked={lesson.checked}
								/>
							))}
					</p>
				</div>
			</div>
		</div>
	)
}

export type AccordionProps = {
	/**
	 * A descriptive label for the title
	 */
	title: string
	/**
	 * Utilizing Atom Element "Lesson link" properties in this component
	 */
	lessons: LessonLinkProps[]
}
