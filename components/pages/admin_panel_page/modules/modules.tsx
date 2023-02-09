import {
	ModuleCard,
	ModuleCardProps,
} from '../../../common/pages/admin_panel/module_card/module_card'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

export const Modules = ({ 
    moduleCardProps, 
    modules = [] 
}: ModuleProps) => {
    
	for (let i = 0; i < 4; i++) {
		modules.push(
            <DragDropContext>
			<div className="m-3">
                <Droppable droppableId="module">
                    {(provided:any) => (
                        <ul className="modules" {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable key={i} draggableId="j" index={i}>
                                {(provided:any)=>(
                                    <li key={i} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                        <ModuleCard 
                                            moduleName={'Module A'}
                                            instructorName={'Instructor'}
                                            registeredUsers={34}
                                        />
                                    </li>
                                )}
                            </Draggable>
                            {provided.placeholder}
                        </ul>
                        )
                    }
                </Droppable>
			</div>
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
	moduleCardProps: ModuleCardProps,
	modules: Array<any>
}
