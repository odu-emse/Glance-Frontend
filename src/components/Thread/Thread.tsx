import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'

export const Thread: React.FC<ThreadProps> = ({ title, body, upvotes, url }) => {
	const [isClicked, setIsClicked] = React.useState(false)
	return (
		<div className="rounded shadow px-5 py-3 flex flex-col gap-2">
			<p className="text-xl font-medium">{title}</p>
			<p className="text-sm">{body}</p>
			<div className="flex flex-row justify-end gap-4">
				<button
				 className="group relative text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200"
				 data-bs-toggle="popover" data-bs-placement="top" data-bs-content="copied"
				 onClick = {() => {
					url = window.location.href;
					navigator.clipboard.writeText(url)
					setIsClicked(true)
				 } 
				}
				 >
					<TbShare size={18} />
					{isClicked === true && (
								<div className="absolute hidden group-hover:flex -left-2 -top-2 -translate-y-full w-16 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
									copied!
								</div>
						)}
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

export type ThreadProps = {
	/**
	 * The source link to the video file.
	 */
	title: string | null
	body: string
	upvotes: number
	url : string
}
