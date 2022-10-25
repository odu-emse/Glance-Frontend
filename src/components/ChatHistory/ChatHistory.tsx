import * as React from 'react'
import * as moment from 'moment'

import {

    FaTrash,
    FaArchive
} from 'react-icons/fa'

export const ChatHistory = ({

    messages
}: ChatHistoryProps) => {
    let index = 0;
    const [isChecked, setIsChecked] = React.useState(index ?? null)

    return (

        <div className="container mx-auto w-96  shadow-lg rounded-lg">

            <div className="flex flex-row  justify-between bg-white">
                <div className="flex flex-col w-2/5 border-r-2 w-full overflow-y-auto">
                    {messages?.length &&
                        messages.map((message, messageIndex) => (





                            <div
                                className={`${isChecked === messageIndex ? "flex flex-row py-4 px-2 justify-center items-center border-l-4 border-blue-100 border-b-2" : "flex flex-row py-4 px-2 justify-center items-center border-b-2"}`}
                                key={messageIndex}
                                onClick={() => setIsChecked(messageIndex)}

                            >



                                <div className="w-1/4">
                                    <img
                                        src={message.image}
                                        className="object-cover h-12 w-12 rounded-full"
                                        alt=""
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="flex flex-col space-y-3 ...">

                                        <div className="text-lg font-semibold">{message.name}</div>
                                        <span className="text-gray-500 text-xs">{moment.unix(message.timestamp).fromNow()} </span>
                                    </div>
                                </div>
                                <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
                                    <button className="flex items-center justify-center px-8 ">
                                        <FaArchive size={20} className="mr-1" />
                                    </button>
                                    <button className="flex items-center justify-center px-8 ">
                                        <FaTrash size={20} className="mr-1" />
                                    </button>
                                </div>
                            </div>
                        ))}

                </div>


            </div>
        </div>

    )
}

type ChatHistoryProps = {
    messages: HistoryProps

}
type HistoryProps = {
    name: string
    image: string
    selected: boolean
    timestamp: number
    newNotification: boolean
}[]

