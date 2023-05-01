import React from 'react'
import { Module, SectionPath } from '@/types/graphql'
import SectionCardTitle from '@/common/learning_path/section/section_card_title'
import CollectionCard from '@/common/learning_path/collection/collection_card'
import ModuleTagList from '@/common/learning_path/module/module_tag_list'

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
	console.log(section)
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
				<>
					<h5 className="sans">Description</h5>
					<p className="sans mt-0">{section.description}</p>
					<ModuleTagList
						title={'Topics'}
						listData={section.keywords}
						elementName={null}
						elementLink={null}
					/>
					{section.objectives.length > 0 && (
						<h5 className="sans">Objectives</h5>
					)}
					<ul className="mt-0">
						{section.objectives.map((item, index) => (
							<li className="sans" key={index}>
								{item}
							</li>
						))}
					</ul>
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
				</>
			)}
		</li>
	)
}

export default SectionCard
