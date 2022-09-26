import * as React from 'react'
import { GrClose} from 'react-icons/gr'

export const AssignmentPanel = ({ open }: AssignmentPanelProps): JSX.Element => {

const heading = [
    "text-sm font-medium pb-1.5"
]

const list = [
    "text-xs list-disc pl-3"
]

	return (!open ? (null) : (
            <aside id="sidePanel" className={`relative w-96 bg-white transition-all drop-shadow-lg p-0`}>
                
                <button 
                        id="exitButton" 
                        className="absolute top-0 left-0 pt-3 pl-3 text-white text-gray-800"
                        onClick={()=> setOpen(!open)}>
                        <GrClose />
                </button>
                    
                <div id="content" className="h-full flex flex-col py-8 px-4 top-0 right-0">

                    <div id="title" className="flex text-base font-medium justify-center">
                        <h1>Introduction to Organizational Analysis</h1>
                    </div>

                    <div id="subTitle" className="flex pt-1.5 pb-8 text-xs justify-center text-slate-500">
                        <h6>Assignment 4</h6>
                    </div>

                    <div id="reminders" className="pb-8">
                        <h1 className={heading}>Set Reminder</h1>
                        <ul className="text-slate-500 text-xs">
                            <li>3 days before due</li>
                            <li>1 week before due date</li>
                            <li>24 hours before due date</li>
                        </ul>
                    </div>

                    <div id="software" className="pb-8">
                        <h1 className={heading}>Required Software</h1>
                        <ul className={list}>
                            <li>Adobe Acrobat / Flash enabled browser</li>
                            <li>Google Chrome 61+</li>
                        </ul>
                    </div>

                    <div id="modules" className="pb-8">
                        <h1 className={heading}>Required Modules</h1>
                        <ul className={list}>
                            <li>ENMA 601 Module 400-489 Completed</li>
                            <li>ENMA 601 Assignment 1-3 Completed</li>
                        </ul>
                    </div>

                    <div id="connections" className="pb-8">
                        <h1 className={heading}>Connections</h1>
                        <ul className="text-xs">
                            <li className="pb-1">ENMA 601 Module 400-489 - Section 10</li>
                            <hr />
                            <li className="py-1">ENMA 601 Module 400-489 - Section 3</li>
                            <hr />
                            <li className="py-1">ENMA 601 Module 400-489 - Section 15</li>
                            <hr />
                            <li className="py-1">ENMA 601 Module 400-489 - Section 8</li>
                            <hr />
                            <li className="py-1">ENMA 601 Module 400-489 - Section 12</li>
                            <hr />
                            <li className="py-1">ENMA 601 Module 400-489 - Section 14</li>
                        </ul>
                    </div>

                    <button id="startButton" className="left-2 right-2 bottom-4 text-sm text-white uppercase py-1.5 px-4.5 bg-sky-300">
                        <h1>Start Assignment</h1>
                    </button>

                    </div>
            </aside>
            )
        )
}

type AssignmentPanelProps = {
    open: boolean
}