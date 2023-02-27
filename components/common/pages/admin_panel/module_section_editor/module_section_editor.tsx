import { useState } from 'react'
import { ModuleLesson } from '../module_page_editor/lesson/lesson'
import { ModuleSection } from '../module_page_editor/section/section'
export const ModuleSectionEditor = () => {
	const [isclicked, setIsClicked] = useState(false)
	const showContent = () => setIsClicked(!isclicked)
	return (
		<>
			<div className="sectionToggle text-2xl ">
				<span onClick={showContent} className="inline-block">
					<ModuleSection sectionId={1} sectionName="Section 1" />
				</span>
			</div>
			<div className="sectionLessons ml-5">
				{isclicked ? (
					<ModuleLesson
						lessonId={1}
						lessonName="Introduction to Dynamic Web Content"
					/>
				) : (
					''
				)}
			</div>
		</>
	)
}
