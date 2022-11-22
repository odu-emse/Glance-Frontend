import moment from 'moment'
import * as React from 'react'
import { AiFillLike } from 'react-icons/ai'
import {
	FaBookmark,
	FaCommentDots,
	FaGraduationCap,
	FaRegSmile,
	FaStar,
} from 'react-icons/fa'
import { MdAttachFile } from 'react-icons/md'

export const SocialCard = ({
	timestamp,
	content,
	likes,
	comments,
	user,
}: SocialCardProps) => {
	const [isClicked, setIsClicked] = React.useState(false)

	return (
		// removed items-center justify-center min-h-screen for community layout
		<div className="flex">
			{/* {modify md:w-9/12 to md:w-screen for better fit community page} */}
			<div className="rounded-xl border p-5 shadow-md md:w-screen bg-white w-full">
				<div className="flex w-full items-center justify-between  pb-3">
					<div className="flex items-center space-x-3">
						<div className="flex flex-wrap justify-center">
							<div className="relative aspect-square w-12 h-auto rounded-full shadow">
								<img
									src={user.image}
									alt="user profile image"
									className="shadow-lg rounded-full max-w-full h-12 align-middle border-none"
									onClick={() => setIsClicked(!isClicked)}
								/>
								{isClicked && (
									<div className="absolute z-20 w-56 py-0 px-0 mt-0 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
										<a
											href="#"
											className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
										>
											view profile
										</a>

										<a
											href="#"
											className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
										>
											Send message
										</a>

										<a
											href="#"
											className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
										>
											Unfriend
										</a>
										<a
											href="#"
											className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
										>
											Block user
										</a>
									</div>
								)}
							</div>
						</div>

						<div className="mt-4 mb-6">
							<div className="mb-1 text-lg font-bold text-slate-700">
								<span className="opacity-50">{user.role}</span>{' '}
								- {user.firstName} {user.lastName}
							</div>
							<div className="text-xs text-neutral-500">
								{moment(timestamp).fromNow()} |{' '}
								{user.department} - {user.office}
							</div>
						</div>
					</div>

					<div className=" px-10 ">
						{user.role === 'Prof' && (
							<FaStar size={38} className="text-yellow-400" />
						)}

						{user.role === 'Advisor' && (
							<FaGraduationCap
								size={38}
								className="text-yellow-400"
							/>
						)}

						{user.role === 'TA' && (
							<FaBookmark size={38} className="text-yellow-400" />
						)}
					</div>
				</div>

				<div className="mt-4 mb-6 w-200 h-200">
					<div className="text-sm text-neutral-600 ">{content}</div>
				</div>
				<div className="border-b p-2">
					<div className="flex items-center justify-between text-slate-500 ">
						<div className="flex space-x-4 md:space-x-8">
							<div className="flex cursor-pointer items-center transition hover:text-slate-600 text-blue-500">
								<AiFillLike size={20} className="mr-1" />
								<span className="">{likes} Likes</span>
							</div>
							<div className="flex cursor-pointer items-center transition hover:text-slate-600 text-blue-500">
								<FaCommentDots size={20} className="mr-1" />
								<span className="">{comments} comments</span>
							</div>
						</div>
					</div>
				</div>
				{/* Comment and attachments */}
				<div className="flex justify-between items-center my-2 text-stone-900 w-full">
					<div className="w-full">
						<label htmlFor="add-comment" className="sr-only">
							Add your comment to the post
						</label>
						<input
							type="text"
							className="border-transparent bg-transparent px-5 py-2 w-full"
							placeholder="Add Comment..."
							id="add-comment"
						/>
					</div>

					{/* Comment icons */}
					<div className="flex gap-2">
						<button className="flex items-center justify-center px-5">
							<MdAttachFile size={20} className="mr-1" />
						</button>
						<button className="flex items-center justify-center px-8">
							<FaRegSmile size={20} className="mr-1" />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export type SocialCardProps = {
	/**
	 * Assigning the below declared type "UserAccountprops" to user
	 */
	user: UserAccountProps
	/**
	 * A descriptive label to display the timestamp of the user's comment
	 */
	timestamp: number
	/**
	 * A descriptive label to display the content of the user's comment
	 */
	content: string
	/**
	 * A descriptive label to display the number of likes of the user's comment
	 */
	likes: number
	/**
	 * A descriptive label to display the number of comments of the user's comment
	 */
	comments: number
}

export type UserAccountProps = {
	/**
	 * A descriptive label to display the user's Last Name
	 */
	lastName: string
	/**
	 * A descriptive label to display the user's First Name
	 */
	firstName: string
	/**
	 * A descriptive label to display the title
	 */
	title: string
	/**
	 * A descriptive label to display the name of the office user belongs
	 */
	office: string
	/**
	 * A descriptive label to display the name of the department user belongs
	 */
	department: string
	/**
	 * A descriptive label to display the user's role(advisor/TA)
	 */
	role: string
	/**
	 * A descriptive label to display the user's profile picture
	 */
	image: string
}

// LessonLink.defaultProps ={
//     url : "../components",
//     checked : false,
//     label: "Introduction"
// }
