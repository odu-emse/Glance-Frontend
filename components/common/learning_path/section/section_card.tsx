import React from 'react'
import { Module, SectionPath } from '@/types/index'
import SectionCardTitle from '@/common/learning_path/section/section_card_title'
import CollectionCard from '@/common/learning_path/collection/collection_card'

const SectionCard = ({
	section,
	sectionIndex,
	collapseIndex,
	handleCollapse,
	sectionPointer,
	editMode,
	sectionsData,
}: {
	section: SectionPath
	sectionIndex: number
	collapseIndex: number
	handleCollapse: React.Dispatch<React.SetStateAction<number | null>>
	sectionPointer: React.MutableRefObject<HTMLDivElement>
	editMode: boolean
	sectionsData: Array<Module>
}) => {
	if (editMode) {
		return (
			<li key={sectionIndex}>
				<SectionCardTitle
					sectionPointer={sectionPointer}
					sectionIndex={sectionIndex}
					section={section}
					collapseIndex={collapseIndex}
					handleCollapse={handleCollapse}
					editMode={editMode}
					data={sectionsData}
				/>
				<ul className="list-none">
					{section.collections.map((collection, index) => {
						return (
							<CollectionCard
								collection={collection}
								key={index}
							/>
						)
					})}
				</ul>
			</li>
		)
	}
	return (
		<li key={sectionIndex}>
			<SectionCardTitle
				sectionPointer={sectionPointer}
				sectionIndex={sectionIndex}
				section={section}
				collapseIndex={collapseIndex}
				handleCollapse={handleCollapse}
				editMode={editMode}
				data={sectionsData}
			/>
			{collapseIndex === sectionIndex && (
				<ul className="list-none">
					{section.collections.map((collection, index) => {
						return (
							<CollectionCard
								collection={collection}
								key={index}
							/>
						)
					})}
				</ul>
			)}
		</li>
	)
}

export default SectionCard
