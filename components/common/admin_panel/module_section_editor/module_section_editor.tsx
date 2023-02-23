import { useState } from "react"


export const ModuleSectionEditor = () => {
    const [iscollapsed, setISCollapsed] = useState(true);
    const expand = () => setISCollapsed(!iscollapsed);
    return(
        <>
            <button className="sectionToggle border-solid border-gray bg-gray-200  hover:bg-gray-100 rounded border text-2xl "
                    onClick={expand}>
                <span className="m-2">Section1</span>
			</button>	
                <div className="sectionLessons flex flex-col">
                    <p>Lesson 1</p> 
                    <p>Lesson 2</p>
                </div>	

                <div className="sectionToggle border-solid border-gray bg-gray-200  hover:bg-gray-100 rounded border text-2xl "                 
                      onClick={expand} >
                <p className="m-2">Section2</p>
			</div>	
                <div className="flex flex-col">
                    <p>Lesson 1</p> 
                    <p>Lesson 2</p>
                </div>		
	

        </>
    )
}