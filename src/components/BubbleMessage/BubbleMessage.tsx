import * as React from 'react'
import * as moment from 'moment'

export const BubbleMessage = ({
								  message,
								  currentUserID
							  }: BubbleMessageProps) => {
	return (
		<div className='container '>
			<div className=''>
				<div>
					<div className='w-full'>
						<div className='relative w-full p-6 overflow-y-auto h-[40rem]'>
							<ul className='space-y-2'>
								{message.length > 0 &&
									message.map(
										(
											{ message, user, timestamp },
											index
										) => (
											<>
												<li
													className={`flex items-center ${
														user.id ===
														currentUserID
															? 'flex-row-reverse'
															: 'justify-start'
													}`}
													key={index}
												>
													<div className='w-50 h-50 px-2'>
														<img
															src={user.image}
															alt='User profile picture'
															className='shadow-lg rounded-full max-w-full h-8 aspect-square'
														/>
													</div>
													<div
														className={`relative max-w-xl px-4 py-2 text-white ${
															user.id ===
															currentUserID
																? 'bg-blue-300'
																: 'bg-gray-300'
														} rounded shadow`}
													>
														<span className='block'>
															{message}
														</span>
													</div>
													<div className='w-50 h-50 px-2 opacity-50'>
														<span className='block text-xs text-slate-500'>
															<span>// </span>
															{moment
																.unix(timestamp)
																.format(
																	'hh:mm A'
																)}
														</span>
													</div>
												</li>
												{message[index + 1] && (
													<li className='flex justify-center'>
														<div className='w-50 h-50 px-2 t-100'>
															<span className='block text-xs text-slate-500'>
																{/*{moment*/}
																{/*	.unix(timestamp1)*/}
																{/*	.format(*/}
																{/*		'dddd, MMMM Do, hh:mm a'*/}
																{/*	)}*/}
															</span>
														</div>
													</li>
												)}
											</>
										)
									)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export type BubbleMessageProps = {
	message: MessageProps
	currentUserID: string | number
}
export type MessageProps = {
	user: {
		id: string | number
		image: string
	}
	message: string
	timestamp: number
}[]
