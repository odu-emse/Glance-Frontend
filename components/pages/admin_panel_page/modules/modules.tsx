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
					{items.map((item) => (
						<div className="m-3" key={item.module.id}>
							<ModuleCard
								id={item.module.id}
								moduleName={item.module.id}
								instructorName={'Joel DeSante'}
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
							moduleName={active.module.id}
							instructorName={'Joel DeSante'}
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
	modules: Array<any>
}
