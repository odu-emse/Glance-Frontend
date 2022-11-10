import * as React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { MdAttachFile, MdKeyboardVoice } from 'react-icons/md'
import { BiImageAdd } from 'react-icons/bi'
import { RiFileGifFill } from 'react-icons/ri'
import { IoSendSharp } from 'react-icons/io5'

export const MessageInput: React.FC<MessageInputProps> = ({
	message,
}): JSX.Element => {
	const [isClicked, setIsClicked] = React.useState<null | number>(null)

	return (
		<div className="grid grid-cols-1">
			<div className="p-2 bg-white ">
				<div className="flex items-center justify-between ">
					<div className="flex space-x-3 md:space-x-3">
						{message?.length > 0 &&
							message.map((item, index) => (
								<button
									key={index}
									type="button"
									className="py-2.5 px-5 mr-2 mb-2 text-xs font-medium text-gray-600 focus:outline-none bg-transparent rounded-full border-2 border-blue-300 hover:bg-gray-100 hover:text-gray-600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
								>
									{item.messages}
								</button>
							))}
					</div>
				</div>
			</div>

			<div className="flex justify-between items-center my-2 text-stone-900 w-full shadow-lg px-4 border-t">
				<div className="flex gap-4">
					<button
						className="flex items-center justify-center "
						onClick={() =>
							setIsClicked((prevState) => {
								if (prevState !== null) {
									return null
								}
								return 1
							})
						}
					>
						<MdAttachFile size={20} className="mr-1" />
						{isClicked === 1 && (
							<div className="relative  h-auto ">
								<div className=" absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
									<label>
										<input
											type="file"
											className="text-sm text-grey-500 file:mr-5 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:cursor-pointer hover:file:bg-amber-50 hover:file:text-amber-700"
										/>
									</label>
								</div>
							</div>
						)}
					</button>
					<button
						className="flex items-center justify-center  "
						onClick={() =>
							setIsClicked((prevState) => {
								if (prevState !== null) {
									return null
								}
								return 2
							})
						}
					>
						<BiImageAdd size={20} className="mr-1" />
						{isClicked === 2 && (
							<div className="relative  h-auto ">
								<div className=" absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
									<label>
										<input
											type="file"
											className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "
										/>
									</label>
								</div>
							</div>
						)}
					</button>

					<button
						className="flex items-center justify-center  "
						onClick={() =>
							setIsClicked((prevState) => {
								if (prevState !== null) {
									return null
								}
								return 3
							})
						}
					>
						<RiFileGifFill size={20} className="mr-1" />
						{isClicked === 3 && (
							<div className="relative  h-auto ">
								<div className=" absolute z-20 w-50 py-0 px-0 mt-0 ml-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
									<label>
										<input
											type="file"
											className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-blue-700
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "
										/>
									</label>
								</div>
							</div>
						)}
					</button>
					<button className="flex items-center justify-center  ">
						<FaDollarSign size={20} className="mr-1" />
					</button>
				</div>
				<div className="w-full">
					<label htmlFor="add-comment" className="sr-only">
						Add your comment to the post
					</label>
					<input
						type="text"
						className="border-transparent bg-transparent focus:border-blue-300 px-5 py-2 w-full"
						placeholder="Type custom inquiry here"
						id="add-comment"
					/>
				</div>
				<div className="flex gap-4">
					<button className="flex items-center justify-center">
						<MdKeyboardVoice size={20} className="mr-1" />
					</button>

					<button className="flex items-center justify-center">
						<IoSendSharp size={20} className="mr-1" />
					</button>
				</div>
			</div>
		</div>
	)
}

type MessageInputProps = {
	message: hintMessage[]
}
type hintMessage = {
	messages: string
}
