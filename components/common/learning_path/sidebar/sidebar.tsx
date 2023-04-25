import { Path } from '@/types/index'
import React from 'react'
import { Button } from '@/common/button/button'

const LPSidebar = ({
	LP,
	editMode,
	toggleEdit,
	triggerSave,
}: {
	LP: Path
	editMode: boolean
	toggleEdit: React.Dispatch<React.SetStateAction<boolean>>
	triggerSave: () => void
}) => {
	return (
		<aside className="flex-1 w-1/3 flex flex-col gap-3 border border-r-0 border-gray-300 relative h-screen overflow-y-scroll bg-white transition-all p-3">
			{editMode ? (
				<Button
					className="w-fit mx-auto"
					onClick={() => {
						triggerSave()
						toggleEdit((prev) => !prev)
					}}
				>
					Save Changes
				</Button>
			) : (
				<Button
					className="w-fit mx-auto"
					onClick={() => {
						toggleEdit((prev) => !prev)
					}}
				>
					Edit Learning Path
				</Button>
			)}
			<div className="flex gap-1 items-center">
				<h4>Hours satisfies:</h4>
				<time
					className={`${
						LP.hoursSatisfies < LP.course.carnegieHours
							? 'text-red-500'
							: 'text-royalblue'
					}`}
				>
					{LP.hoursSatisfies}
				</time>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Status:</h4>
				<span className="text-sm py-1 rounded-md bg-wgray sans font-semibold px-2 inline-block w-fit">
					{LP.status}
				</span>
			</div>
			<div className="">
				<h3>Learning outcomes</h3>
				<ul className="mt-0">
					{LP.learningOutcomes.map((lo, index) => {
						return (
							<li key={index} className="sans">
								{lo}
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	)
}

export default LPSidebar
