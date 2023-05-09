import * as React from 'react'
import moment from 'moment'

import { FaTrash, FaArchive } from 'react-icons/fa'
import { DirectMessageResponse } from '@/types/graphql'

export const ChatHistory = ({
	messages,
	handle,
	handleSelect,
	selected,
}: ChatHistoryProps) => {
	return (
		<div className="flex flex-col w-full h-full max-h-screen border-r-2 overflow-y-scroll">
			{messages?.length &&
				messages.map((message, messageIndex) => (
					<div
						className={`flex flex-row gap-1 py-4 px-2 justify-center items-center border-b-2 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-royalblue before:bg-opacity-25 before:transition-opacity before:block
						 ${
								selected === message.recipient.id
									? ' before:opacity-100'
									: ' before:opacity-0'
							}`}
						key={messageIndex}
						onClick={() => handleSelect(message.recipient.id)}
					>
						{message.recipient.__typename === 'Group' ? (
							<GroupChatListItem
								timestamp={message.createdAt}
								name={
									'name' in message.recipient
										? message.recipient.name
										: 'Unknown'
								}
								messages={messages}
								handle={handle}
								messageIndex={messageIndex}
							/>
						) : (
							<UserChatListItem
								messageIndex={messageIndex}
								handle={handle}
								messages={messages}
								timestamp={message.createdAt}
								lastName={
									'lastName' in message.recipient
										? message.recipient.lastName
										: 'Unknown'
								}
								firstName={
									'firstName' in message.recipient
										? message.recipient.firstName
										: 'Unknown'
								}
								picURL={
									'picURL' in message.recipient
										? message.recipient.picURL
										: 'Unknown'
								}
							/>
						)}
					</div>
				))}
		</div>
	)
}

const GroupChatListItem = ({
	messages,
	messageIndex,
	name,
	timestamp,
	handle,
}: {
	messages: DirectMessageResponse[]
	messageIndex: number
	name: string
	timestamp: Date
	handle: () => void
}) => {
	return (
		<>
			<div
				className={`${
					messages[messageIndex].newNotification === true
						? ' rounded-full mx-1 bg-blue-500 h-2.5 w-5 flex items-center justify-center'
						: ''
				}`}
			></div>
			<div className="w-1/4">
				<div className="rounded-full w-12 object-cover, aspect-square flex items-center justify-center bg-royalblue">
					<span
						className="text-4xl text-white font-bold"
						style={{
							fontSize: '18pt',
						}}
					>
						{name.split(' ')[0][0]}
					</span>
				</div>
			</div>
			<div className="w-full">
				<div className="flex flex-col">
					<div className="text-lg font-semibold">{name}</div>
					<span className="text-gray-500 text-xs">
						{moment(timestamp).utcOffset(-480).format('hh:mm A')}
					</span>
				</div>
			</div>
			<div className="flex flex-row">
				<button className="flex items-center justify-center px-0.5 cursor-pointer">
					<FaTrash size={20} className="mr-1" onClick={handle} />
				</button>
				<button className="flex items-center justify-center px-0.5 cursor-pointer">
					<FaArchive size={20} className="mr-1" onClick={handle} />
				</button>
			</div>
		</>
	)
}

const UserChatListItem = ({
	messages,
	messageIndex,
	firstName,
	lastName,
	picURL,
	handle,
	timestamp,
}) => {
	return (
		<>
			<div
				className={`${
					messages[messageIndex].newNotification === true
						? ' rounded-full mx-1 bg-blue-500 h-2.5 w-5 flex items-center justify-center'
						: ''
				}`}
			></div>
			<div className="w-1/4">
				<img
					src={picURL}
					className="object-cover w-12 rounded-full aspect-square"
					alt="The profile picture of the user you are sending a message to."
				/>
			</div>
			<div className="w-full">
				<div className="flex flex-col">
					<div className="text-lg font-semibold">
						{firstName} {lastName}
					</div>
					<span className="text-gray-500 text-xs">
						{moment(timestamp).utcOffset(-480).format('hh:mm A')}
					</span>
				</div>
			</div>
			<div className="flex flex-row">
				<button className="flex items-center justify-center px-0.5 cursor-pointer">
					<FaTrash size={20} className="mr-1" onClick={handle} />
				</button>
				<button className="flex items-center justify-center px-0.5 cursor-pointer">
					<FaArchive size={20} className="mr-1" onClick={handle} />
				</button>
			</div>
		</>
	)
}

type ChatHistoryProps = {
	messages: DirectMessageResponse[]
	handle: () => void
	handleSelect: (id: string) => void
	selected: string
}
