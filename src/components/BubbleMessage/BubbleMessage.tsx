// import moment from 'moment'
import * as React from 'react'
import * as moment from 'moment'


export const BubbleMessage = ({
	message,
    timestamp1,
}: BubbleMessageProps) => {
	return (
        <div className="container ">
        <div className="">
          <div>
            <div className="w-full">
              
              <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
  
                <ul className="space-y-2">
                  <li className="flex justify-start">
                  <div className="w-50 h-50 px-2">
  
               
  
  
  <img src={message[0].image}
  alt="..." 
  className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"/>
  
  </div>
                    <div className="relative max-w-xl px-4 py-2 text-white bg-blue-200 rounded shadow">
                    
                      <span className="block">{message[0].message}</span>
                    </div>
                    <div className="w-50 h-50 px-2">
                    <span className="block text-xs text-slate-500">{moment.unix(message[0].timestamp).format("hh:mm a")}</span>
  
  </div>
                  </li>
                  <li className="flex justify-end">
                    <div className="w-50 h-50 px-2">
                    <span className="block text-xs text-slate-500">{moment.unix(message[1].timestamp).format("hh:mm a")}</span>
  
  </div>
                    <div className="relative max-w-xl px-4 py-2 text-white bg-blue-200 rounded shadow">
                      <span className="block">{message[1].message}</span>
                    </div>
                    <div className="w-50 h-50 px-2">
  
               
  
  
  <img src={message[1].image}
  alt="..." 
  className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"/>
  
  </div>
                  </li>
                  <li className="flex justify-end">
                  <div className="w-50 h-50 px-2">
                    <span className="block text-xs text-slate-500">{moment.unix(message[2].timestamp).format("hh:mm a")}</span>
  
  </div>
                    <div className="relative max-w-xl px-4 py-2 text-white bg-blue-200 rounded shadow">
                      <span className="block">{message[2].message}</span>
                    </div>
  
                   <div className="flex flex-wrap justify-center">
    <div className="w-50 h-50 px-2">
               
  
  
  <img src={message[2].image}
  alt="..." 
  className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"/>
  
  </div>
  </div>
                  </li>
                  <li className="flex justify-start">
                  <div className="w-50 h-50 px-2">
  
               
  
  
  <img src={message[3].image}
  alt="..." 
  className="shadow-lg rounded-full max-w-full h-8 align-middle border-none"/>
  
  </div>
 <div className="relative max-w-xl px-4 py-2 text-white bg-blue-200 rounded shadow">
                      <span className="block">{message[3].message} </span>
                    </div>
                    <div className="w-50 h-50 px-2">
                    <span className="block text-xs text-slate-500">{moment.unix(message[3].timestamp).format("hh:mm a")}</span>
  
  </div>
                  </li>
                  <li className="flex justify-center">
               
 
                    <div className="w-50 h-50 px-2 t-100">
                    <span className="block text-xs text-slate-500">{moment.unix(timestamp1).format("dddd, MMMM Do, hh:mm a")}</span>
  
  </div>
                  </li>
                </ul>
  
              </div>
  
              
            </div>
          </div>
        </div>
      </div>
	)
}

type BubbleMessageProps = {
	message:MessageProps
    timestamp1:number
}
type MessageProps = {
	
	image: string
    message:string
    timestamp:number
}[]
