import {
	ModuleCard,
	ModuleCardProps,
} from '../../../common/pages/admin_panel/module_card/module_card'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import React, { useState } from 'react';



export const Modules = ({ moduleCardProps, modules = [] }: ModuleProps) => {
    const [module, updateModule] = useState(modules);

    function handleOnDragEnd(result) {
        
    }

	for (let i = 0; i < 3; i++) {
        const ind = i; 
		module.push(
        //     <div className="m-3" key={i}>
        //         <ModuleCard
        
        //                 moduleName={'Module A'}
        //                 instructorName={'Instructor'}
        //                 registeredUsers={34}
        //         />
        //     </div>
        // )
        // }
            
			<DragDropContext key={ind} onDragEnd={handleOnDragEnd}>
				
					<Droppable droppableId={moduleCardProps.id}>
						{(provided) => (
							<ul
								className="modules"
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
                                <div className="m-3" key={ind}>
								<Draggable draggableId="id" index={ind}>
									{(provided) => (
										<li
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<ModuleCard
                                                
                                                moduleName={'Module A'}
                                                instructorName={'Instructor'}
                                                registeredUsers={34} id={0}											/>
										</li>
									)}
								</Draggable>
								</div>
                                {provided.placeholder}
							</ul>
						)}
					</Droppable>
				
			</DragDropContext>
    )
}

	return (
		<>
			<h1 className="text-xl m-3 py-2">Your Modules</h1>
			<div className="moduleCard">{modules}</div>
		</>
	)
}

export type ModuleProps = {
	moduleCardProps: ModuleCardProps
	modules: Array<any>
}
