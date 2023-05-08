import * as React from 'react'
import moment from 'moment'

import { FaTrash, FaArchive } from 'react-icons/fa'
import { User } from '@/types/graphql';

export const ChatHistory = ({ messages, handle, handleSelect, selected }: ChatHistoryProps) => {

	return (
		<div className="flex flex-col w-full h-full max-h-screen border-r-2 overflow-y-scroll">
			{messages?.length &&
				messages.map((message, messageIndex) => (
					<div
						className={`flex flex-row py-4 px-2 justify-center items-center border-b-2 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-royalblue before:bg-opacity-25 before:transition-opacity before:block
						 ${selected === message.recipient.id ? ' before:opacity-100' : ' before:opacity-0'}`}
						key={messageIndex}
						onClick={() => handleSelect(message.recipient.id)}
					>
						<div
							className={`
                                ${
									messages[messageIndex].newNotification ===
									true
										? ' rounded-full mx-1 bg-blue-500 h-2.5 w-5 flex items-center justify-center'
										: ''
								}`}
						></div>
						<div className="w-1/4">
							<img
								src={message.recipient.picURL}
								className="object-cover w-12 rounded-full aspect-square"
								alt=""
							/>
						</div>
						<div className="w-full">
							<div className="flex flex-col gap-3">
								<div className="text-lg font-semibold">
									{message.recipient.firstName}{" "}
									{message.recipient.lastName}
								</div>
								<span className="text-gray-500 text-xs">
									{moment(message.createdAt).utcOffset(-480).format('hh:mm A')}
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
	handleSelect: (id: string) => void
	selected: string
}
type HistoryProps = {
	author: User
	recipient: User
	createdAt: Date
}
