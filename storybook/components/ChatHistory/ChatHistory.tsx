import * as React from 'react'
import moment from 'moment'

import { FaTrash, FaArchive } from 'react-icons/fa'

export const ChatHistory = ({ messages, handle }: ChatHistoryProps) => {
	const [isChecked, setIsChecked] = React.useState(0 ?? null)
	const [isNotified, setIsNotified] = React.useState(0 ?? null)

	return (
		<div className="flex flex-col w-full h-full max-h-screen border-r-2 overflow-y-scroll">

			{messages?.length &&
				messages.map((message, messageIndex) => (
					<div
						className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-100 before:transition-opacity before:block
						 ${
							isChecked === messageIndex 
								? ' before:opacity-100'
								: ' before:opacity-0'
							}` 
					}
						key={messageIndex}
						onClick={() => setIsChecked(messageIndex)}
					>
						<div
                           className = {`
                                ${messages[messageIndex].newNotification===true
                                ? ' rounded-full mx-1 bg-blue-500 h-2.5 w-5 flex items-center justify-center'
                                : ''
                                }`} >
                            </div>
						<div className="w-1/4">
							<img
								src={message.image}
								className="object-cover h-12 w-12 rounded-full aspect-square"
								alt=""
							/>
						</div>
						<div className="w-full">
							<div className="flex flex-col gap-3">
								<div className="text-lg font-semibold">
									{message.name}
								</div>
								<span className="text-gray-500 text-xs">
									{moment(message.timestamp).fromNow()}
								</span>
							</div>
						</div>
						<div className="flex flex-row">
							<button className="flex items-center justify-center px-4 cursor-pointer">
								<FaTrash
									size={20}
									className="mr-1"
									onClick={handle}
								/>
							</button>
							<button className="flex items-center justify-center px-4 cursor-pointer">
								<FaArchive
									size={20}
									className="mr-1"
									onClick={handle}
								/>
							</button>
						</div>
					</div>
				))}
		</div>
	)
}

type ChatHistoryProps = {
	messages: HistoryProps[]
	handle: () => void
}
type HistoryProps = {
	name: string
	image: string
	selected: boolean
	timestamp: number
	newNotification: boolean
}
