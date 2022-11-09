import * as React from 'react'

export const Select = ({
    options
}: dropdownProps): JSX.Element => {
    return(
        <>
        <div className=" items-center flex gap-1 mb-2 text-l font-medium text-gray-900 ">
            Sort by
            <select id="Sort" className="bg-gray-50 text-gray-900 text-sm w-28 p-2.5 border-0 focus:ring-0 ml-1 focus:outline-dashed focus:outline-blue-500">
                { options.map((option, optionIndex)=>(
                   <option 
                   selected 
                   >{option}</option>
                )
                )}            
        </select>
        </div>
        </>
    )
}

export type dropdownProps = {
    options : Array<string>
}