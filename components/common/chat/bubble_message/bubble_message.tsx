import * as React from 'react'
import moment from 'moment'
import { DirectMessageResponse } from '@/types/graphql';

export const BubbleMessage = ({
	messages,
	currentUserID,
}: BubbleMessageProps) => {
	return (
		<div className="container w-full h-[calc(100vh_-_5rem)] overflow-y-scroll">
			<div className="relative w-full p-6 pb-0 overflow-y-auto h-full">
				<ul className="space-y-2">
					{messages.length > 0 &&
						messages.map(
							({ body, author, recipient, createdAt }, index) => (
								<>
									<li
										className={`flex items-center left-li ${
											author.id === currentUserID
												? 'flex-row-reverse'
												: 'justify-start'
										}`}
										key={index}
									>
										<div className="w-50 h-50 px-2">
											<img
												src={author.picURL}
												alt="User profile picture"
												className="shadow-lg rounded-full max-w-full h-8 aspect-square"
											/>
										</div>
										<div
											className={`relative max-w-xl px-4 py-2 text-white ${
												author.id === currentUserID
													? 'bg-blue-300'
													: 'bg-gray-300'
											} rounded shadow`}
										>
											<span className="block">
												{body}
											</span>
										</div>
										<div className="w-50 h-50 px-2 opacity-50">
											<span className="block text-xs text-slate-500">
												{
													author.id === currentUserID ? (
														<>
														{moment(createdAt)
															.utcOffset(-480)
																.format('hh:mm A')}
															<span className="inline-block -scale-x--1 -scale-y-1 align-middle">//</span>
														</>
													) : (
														<>
															<span>//</span>
															{moment(createdAt)
																.utcOffset(-480)
																.format('hh:mm A')}
														</>
													)
												}
											</span>
										</div>
									</li>
								</>
							)
						)}
				</ul>
			</div>
		</div>
	)
}

export type BubbleMessageProps = {
	messages: DirectMessageResponse[]
	currentUserID: string
}
