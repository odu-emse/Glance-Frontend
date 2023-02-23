import { useState } from 'react';
import { RxCaretRight, RxCaretDown } from 'react-icons/rx';


export const ModuleSection = ({
    sectionName, sectionId
}: ModuleSectionProps) => {
    const [isClicked, setIsClicked] = useState(false)

    return(
        <div className="m-2 text-lg flex items-center">
        <span>
        {isClicked? <RxCaretDown size={25} /> : <RxCaretRight size={25}/>}
        </span> 
             <div className='cursor-pointer'
             onClick={()=> setIsClicked(!isClicked)}
             key = {sectionId}
             >
                {sectionName}
            </div>
        </div> 
    )
}

export type ModuleSectionProps = {
    sectionName: string,
    sectionId: number
}