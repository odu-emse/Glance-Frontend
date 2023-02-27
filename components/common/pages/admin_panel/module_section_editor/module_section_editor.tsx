import { useState } from 'react'
export const ModuleSectionEditor = () => {
	const [isclicked, setIsClicked] = useState(false)
	const showContent = () => setIsClicked(!isclicked)
	return (
		<>
			<button
				className="sectionToggle border-solid border-gray bg-gray-200  hover:bg-gray-100 rounded border text-2xl "
				onClick={showContent}
			>
				<span className="m-2">Section Component</span>
			</button>
			<div className="sectionLessons">
				{isclicked ? <div>Lesson Component</div> : ''}
			</div>
		</>
	)
}
