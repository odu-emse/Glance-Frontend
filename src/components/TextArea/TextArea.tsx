
import * as React from 'react'

import { useRef, useState } from "react";

import useAutosizeTextArea from "./useAutosizeTextArea";

import { IoSend } from "react-icons/io5";
export const TextArea = ({
	
}: TextAreaProps) => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
  
    useAutosizeTextArea(textAreaRef.current, value);
  
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = evt.target?.value;
  
      setValue(val);
    };
  
	return (
        <div >
        <label htmlFor="review-text" className="relative" >
        
      <textarea
        id="review-text"
        onChange={handleChange}
        ref={textAreaRef}
        rows={1}
        value={value}
        className="w-full  bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none"
      />
           <span className="absolute onset-y-0 right-0 bottom-4 flex items-center pr-3">

     <button className="">
								<IoSend
									size={20}
									className="mr-1"
									
								/>
							</button>
            </span>
      </label>
    </div>
	)
}


type TextAreaProps = {
	
	
}




  




