import * as React from 'react'
import { GoArrowUp, GoCommentDiscussion } from 'react-icons/go'
import { TbShare } from 'react-icons/tb'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalUserContext from '@/contexts/global_user_context'
import useSWR from 'swr'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'

export const Thread: React.FC<ThreadProps> = ({
	title,
	body,
	upvotes,
	id,
	userProfile,
	children,
	isUpvoted: initialIsUpvoted,
	commentCount = 0,
	viewCutOff = false,
	showAuthor = true,
}) => {
	const [isClicked, setIsClicked] = React.useState(false)
	const [isUpvoted, setIsUpvoted] = React.useState(initialIsUpvoted)
	const { user } = useContext(GlobalUserContext)

	const { mutate } = useSWR({}, gqlFetcher)

	const upvoteThread = (threadId: string) => {
		mutate(async () => {
			await client.request(
				gql`
          mutation UpvoteThread($input: ID!){
              upvoteThread(id: $input, userID: "${user.id}"){
                  id
              }
          }
			`,
				{
					input: threadId,
				}
			)
		}, false)
			.then(() => {
				setIsUpvoted(!isUpvoted)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	let url: string
	return (
		<>
			<div
				className="rounded-sm shadow-lg px-5 py-2 flex flex-col border-gray-300 border"
				id={id}
			>
				{showAuthor && (
					<Link href={`/user/${userProfile.id}`}>
						<div className="flex items-center no-underline cursor-pointer w-fit">
							<img
								src={
									userProfile.picURL ||
									'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png'
								}
								alt="user profile image"
								className="shadow-lg rounded-full max-w-full h-8 aspect-square align-middle border-none"
							/>
							<h4 className="font-bold px-2">
								{userProfile.firstName} {userProfile.lastName}
							</h4>
						</div>
					</Link>
				)}
				{title && <h4 className="font-bold uppercase">{title}</h4>}
				<p className="text-sm relative">{body.slice(0, 150)}</p>
				{viewCutOff && (
					<Link href={`/communities/${id}`}>
						<h2 className="w-2/3 mx-auto text-center font-bold shadow bg-royalblue text-white hover:bg-blue-600 uppercase px-[1em] py-[0.25em] cursor-pointer">
							{`View Thread (${commentCount} comments)`}
						</h2>
					</Link>
				)}
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
						onClick={() => upvoteThread(id)}
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
	firstName?: string
	/**
	 * The last name of the user
	 */
	lastName?: string
	/**
	 * The image URL of the user
	 */
	picURL?: string
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
	// handleUpvote: (id:string) => void
	/**
	 * @property {boolean} [isUpvoted] - An optional boolean prop that indicates whether the current user has upvoted the thread. If true, the upvote icon will be displayed in red. If false or undefined, the upvote icon will have the default color.
	 */
	isUpvoted?: boolean
	/**
	 * The number of comments the thread has. This is used to display in the view thread button
	 */
	commentCount?: number

	/**
	 * If true, the thread will be cut off after 150 characters and a view thread button will be displayed
	 */
	viewCutOff?: boolean

	/**
	 * If true, the author of the thread will be displayed
	 */
	showAuthor?: boolean
}
