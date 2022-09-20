import * as React from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

export const LessonLink = ({
    label,
    url,
    checked 
}: LessonLinkProps) => {

    const [isChecked, setIsChecked] = React.useState(checked ?? false)
        return(
            <li className='list-none'>
                <div className='flex items-center'>
                    <span 
                    className='cursor-pointer'
                    onClick={ () => setIsChecked(!isChecked) }
                    >
                        {isChecked ? <AiFillCheckCircle/> : <AiOutlineCheckCircle/>}
                    </span>
                    <a href={url}>
                    {label}
                    </a>
                </div>
            </li>
        );
}

type LessonLinkProps = {
    /**
     * Descriptive label that indicates the name of the module
     */
    label: string
    /**
     * Opens up the URL the label points to
     */
    url: string
    /**
     * A Boolean that decides if the labels are checked or not
     */
    checked?: boolean  
}

// LessonLink.defaultProps ={
//     url : "../components",
//     checked : false, 
//     label: "Introduction"
// }