import { ModuleCard } from '../../../common/pages/admin_panel/module_card/module_card'

import React, { useState } from 'react'
import {
	DndContext,
	DragOverlay,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core'
import {
	SortableContext,
	verticalListSortingStrategy,
	arrayMove,
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable'

import gqlFetcher from '../../../../utils/gql_fetcher'
import { gql } from 'graphql-request'
import useSWR from 'swr'
export const Modules = ({ modules = [] }: ModuleProps) => {
	const [active, setActive] = useState(null)
	//	console.log(modules)
	const [items, setItems] = useState(modules)

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)
	const { data, error } = useSWR(
		{
			query: gql`
				{
					module(input: {}) {
						id
						moduleName
						description
						members {
							role
							plan {
								student {
									firstName
									lastName
									email
									picURL
								}
							}
						}
						collections {
							lessons {
								threads {
									title
									author {
										email
										firstName
										lastName
										picURL
									}
									body
									upvotes {
										id
									}
								}
							}
						}
					}
				}
			`,
		},
		gqlFetcher
	)

	if (error) {
		console.log(error)
		throw new Error(error)
	}
	if (!data) {
		return <div>Loading...</div>
	}
	const mods = data.module
	console.log(mods)

	return (
		<div>
			<h1 className="text-2xl m-3 py-2">Your Modules</h1>

			<DndContext
				onDragEnd={handleOnDragEnd}
				onDragStart={handleOnDragStart}
				collisonDetection={closestCenter}
				sensors={sensors}
			>
				<SortableContext
					items={items}
					strategy={verticalListSortingStrategy}
				>
					{data.module.map((mod) => (
						<div className="m-3" key={mod.id}>
							<ModuleCard
								id={mod.id}
								moduleName={mod.moduleName}
								instructorName={
									mod.members.filter(
										(member) => member.role === 'TEACHER'
									)[0]?.plan.student.firstName
								}
								registeredUsers={50}
							/>
						</div>
					))}
				</SortableContext>
				<DragOverlay>
					{active ? (
						<ModuleCard
							key={active.module.id}
							id={active.module.id}
							moduleName={active.module.moduleName}
							instructorName={'Joeal'}
							registeredUsers={50}
						/>
					) : null}
				</DragOverlay>
			</DndContext>
		</div>
	)

	function handleOnDragStart(event) {
		const { active } = event
		setActive(items.find((item) => active.id === item.module.id))
	}

	function handleOnDragEnd(event) {
		const { active, over } = event
		//	console.log("ACTIVE", active, "OVER", over)
		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.findIndex(
					(item) => active.id === item.module.id
				)
				const newIndex = items.findIndex(
					(item) => over.id === item.module.id
				)
				return arrayMove(items, oldIndex, newIndex)
			})
		}
		setActive(null)
	}
}

export type ModuleProps = {
	/**
	 * Array type that holds all modules data
	 * @type array
	 */
	modules: Array<any>
}
