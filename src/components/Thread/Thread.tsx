import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'
import { Anchor } from '../Link'

export const Thread: React.FC<ThreadProps> = ({ title, body, upvotes, id, userProfile }) => {
	const [isClicked, setIsClicked] = React.useState(false)
	let url: string
	return (
		<div className="rounded shadow px-5 py-3 flex flex-col gap-2" id={id}>
			<Anchor
				path={`/user/${userProfile.id}`}
				className="flex items-center no-underline"
			>
				<img
					src={userProfile.image}
					alt="user profile image"
					className="shadow-lg rounded-full max-w-full h-6 align-middle border-none"
				/>
				<div className="userName font-bold px-2">
					{userProfile.firstName}
					{userProfile.lastName}
				</div>
			</Anchor>

			<p className="text-xl font-medium">{title}</p>
			<p className="text-sm">{body}</p>
			<div className="flex flex-row justify-end gap-4">
				<button
					className="group relative text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200"
					data-bs-toggle="popover"
					data-bs-placement="top"
					data-bs-content="copied"
					onClick={() => {
						url = window.location.href
						navigator.clipboard
							.writeText(`${url}#${id}`)
							.then(() => {
								setIsClicked(true)
							})
							.catch(() => {
								console.log('error')
							})
					}}
				>
					<TbShare size={18} />
					{isClicked && (
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

export type UserAccount = {
	/**
	 * A unique ID to identify different users
	 */
	id: string | number
	/**
	 * The first name of the user
	 */
	firstName: string
	/**
	 * The last name of the user
	 */
	lastName: string
	/**
	 * The image URL of the user
	 */
	image: string
}

export type ThreadProps = {
	/**
	 * The title of the thread component
	 */
	title?: string
	/**
	 * The body of the thread component
	 */
	body: string
	/**
	 * The number of upvotes the thread has
	 */
	upvotes: number
	/**
	 * The user account the thread belongs to
	 */
	userProfile: UserAccount
	/**
	 * The unique ID of the thread
	 */
	id: string
}
