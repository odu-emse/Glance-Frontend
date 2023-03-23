import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'
import { Anchor } from '../../../links/anchor/anchor'
import { IconContext } from 'react-icons'
export const Thread: React.FC<ThreadProps> = ({
	title,
	body,
	upvotes,
	id,
	userProfile,
	handleUpvote,
	children,
	isUpvoted: initialIsUpvoted,
}) => {
	const [isClicked, setIsClicked] = React.useState(false)
	const [isUpvoted, setIsUpvoted] = React.useState(initialIsUpvoted)
	const _handleUpvote = () => {
		handleUpvote()
		setIsUpvoted(!isUpvoted)
	}
	let url: string
	return (
		<>
			<div className="rounded shadow pl-5 flex flex-col " id={id}>
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
						{userProfile.firstName.charAt(0).toUpperCase() +
							userProfile.firstName.slice(1)}{' '}
						{userProfile.lastName.charAt(0).toUpperCase() +
							userProfile.lastName.slice(1)}
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
					<button
						onClick={() => _handleUpvote()}
						className="text-sm rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 flex flex-row gap-1 justify-center items-center"
					>
						<span className={`${upvotes <= 0 ? 'hidden' : ''}`}>
							{upvotes}
						</span>
						<IconContext.Provider
							value={{ color: isUpvoted ? 'red' : '' }}
						>
							<div>
								<GoArrowUp size={18} />
							</div>
						</IconContext.Provider>
					</button>
				</div>
			</div>
			<div className="ml-12">
				{/* Comments go here */}
				{children}
			</div>
		</>
	)
}

/**
 * @typedef {Object} UserAccount
 */
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

/**
 * @typedef {Object} ThreadProps
 */
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
	/**
	 * The child comments of this thread as an array
	 */
	children?: any
	/**
	 * @property {Function} handleUpvote - A callback function that is triggered when the upvote button is clicked. It should handle the logic for upvoting the thread, such as updating the upvote count and making API calls as needed.
	 * @returns void
	 */
	handleUpvote: () => void
	/**
	 * @property {boolean} [isUpvoted] - An optional boolean prop that indicates whether the current user has upvoted the thread. If true, the upvote icon will be displayed in red. If false or undefined, the upvote icon will have the default color.
	 */
	isUpvoted?: boolean
}
