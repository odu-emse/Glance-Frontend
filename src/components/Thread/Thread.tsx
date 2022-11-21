import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'
import { Anchor, Link } from '../Link'
import { UserAccountProps } from '../SocialCard'

export const Thread: React.FC<ThreadProps> = ({
	title,
	body,
	upvotes,
	userProfile,
}) => {
	return (
		<div className="rounded shadow px-5 py-3 flex flex-col gap-2">
			<Anchor
				path={`/user/${userProfile.id}`}
				className="flex items-center no-underline"
			>
				<img
					src={userProfile.image}
					alt="user profile image"
					className="shadow-lg rounded-full max-w-full h-6 align-middle border-none"
					//	onClick={() => setIsClicked(!isClicked)}
				/>
				<div className="userName font-bold px-2">
					{userProfile.firstName}
					{userProfile.lastName}
				</div>
			</Anchor>

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

export type ThreadProps = {
	/**
	 * The source link to the video file.
	 */
	title: string | null
	body: string
	upvotes: number
	userProfile: UserAccountProps
}
