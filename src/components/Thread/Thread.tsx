import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'

export const Thread = ({ title, body, upvotes }: ThreadProps) => {
	return (
		<div className="rounded shadow px-5 py-3 flex flex-col gap-2">
			<p className="text-xl font-medium">{title}</p>
			<p className="text-sm">{body}</p>
			<div className="flex flex-row justify-end gap-4">
				<button className="text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
					<TbShare size={18} />
				</button>
				<button className="text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
					<GoCommentDiscussion size={18} />
				</button>
				<button className="text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 flex flex-row gap-1 justify-center items-center">
					<span className={`${upvotes <= 0 ? 'hidden' : ''}`}>
						{upvotes}
					</span>
					<GoArrowUp size={18} />
				</button>
			</div>
		</div>
	)
}

type ThreadProps = {
	/**
	 * The source link to the video file.
	 */
	title: string | null
	body: string
	upvotes: number
}
