import * as React from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { MdAttachFile, MdKeyboardVoice } from 'react-icons/md'
import { BiImageAdd } from 'react-icons/bi'
import { RiFileGifFill } from 'react-icons/ri'
import { IoSendSharp } from 'react-icons/io5'
import { Input } from '@/common/forms/inputs/input/input'

export const MessageInput: React.FC<MessageInputProps> = ({
																														message,
																														handleSubmit,
																														recipientID,
																														userInput,
																														handleUserInput
																													}): React.ReactElement => {
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

			<div className="flex justify-between items-center mt-2 text-stone-900 w-full shadow-lg px-4 border-t">
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
				<form
					onSubmit={(event) => {
						event.preventDefault()
						handleSubmit(userInput, recipientID)
					}}
					className="w-full flex"
				>
					<div className="w-full">
						<Input label={null} name={"message"} onChange={
							(e) => handleUserInput(e)
						} type={"text"} length={"full"}   />
					</div>
					<div className="flex gap-4">
						<button className="flex items-center justify-center">
							<MdKeyboardVoice size={20} className="mr-1" />
						</button>

						<button
							className="flex items-center justify-center"
							type="submit"
						>
							<IoSendSharp size={20} className="mr-1" />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

type MessageInputProps = {
	message: hintMessage[],
	handleSubmit: (message: string, recipientID: string) => void,
	recipientID: string,
	userInput: string,
	handleUserInput: (value: (((prevState: string) => string) | string)) => void
}
type hintMessage = {
	messages: string
}
