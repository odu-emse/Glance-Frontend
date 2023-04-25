import { Module, SectionPath } from '@/types/index'
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const SectionCardTitle = ({
	section,
	sectionIndex,
	collapseIndex,
	handleCollapse,
	sectionPointer,
	editMode,
	data,
}: {
	section: SectionPath
	sectionIndex: number
	collapseIndex: number
	handleCollapse: React.Dispatch<React.SetStateAction<number | null>>
	sectionPointer: React.MutableRefObject<HTMLDivElement>
	editMode: boolean
	data: Array<Module>
}) => {
	if (editMode) {
		return (
			<div className="flex gap-1 items-center justify-start mb-2.5 cursor-pointer">
				<select className="text-royalblue sans uppercase font-bold">
					{data.map((module, index) => (
						<option key={index} value={module.id}>
							{module.moduleName}
						</option>
					))}
				</select>
			</div>
		)
	}
	return (
		<div
			className="flex gap-1 items-center justify-start mb-2.5 cursor-pointer"
			onClick={() =>
				handleCollapse(
					collapseIndex === sectionIndex ? null : sectionIndex
				)
			}
			ref={sectionPointer}
		>
			{collapseIndex !== sectionIndex ? <FaPlus /> : <FaMinus />}
			<h3 className="cursor-pointer mb-0">{section.name}</h3>
		</div>
	)
}

export default SectionCardTitle
