import * as React from 'react'
import { Button } from '../Button'
import { Input } from '../FormElements'
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'

export const Assignment = ({
    assignmentTitle,
    assignmentDetails,
    assignmentScore,
    dueDate,
    open,
	handle,
    }:submitAssignmentProps) =>{
    return(
        <div>
            <div className='flex justify-between'>
            <div 
            id ="title" className="text-2xl py-5 flex flex-col"
            >
                <p>{ assignmentTitle }</p>
                <span className="text-sm">Due : {dueDate}</span>
            </div>
            <div
            className="text-2xl py-5">
                {assignmentScore} Possible Points
            </div>
            </div>
            <div
            id="details" className="py-2">
                <button className="dropDownTrigger border border-gray-500 rounded flex gap-1 px-2 items-center" onClick={() => handle(!open)}> 
                {open? <IoIosArrowForward/> : <IoIosArrowDown/>}
                Details </button>
                <p className="dropDownContent">
                { open? "": assignmentDetails  }
                </p>
            </div>
            <hr/>
            <div id="uploadFile">
            <label className="mt-2" htmlFor="file_input">UPLOAD FILE</label>
            <Input role="file_input" label="" name="upload" onChange={()=>null} type="file" />
            </div>

            <textarea id="responseField"
            name="message" 
            rows={10} 
            cols={120}
            placeholder="Type your response here..."
            >
            </textarea>

            <Button label='SUBMIT' type="submit" primary />
        </div>
    )
}

export type submitAssignmentProps = {
	assignmentTitle: string,
    assignmentDetails: string,
    assignmentScore: number,
    dueDate: string,
    open: boolean,
	handle: (open: boolean) => void
}