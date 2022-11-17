import { Button } from '../Button/Button'
import { Input } from '../FormElements/Input'

export const PostButton = () => {
	return (
		<div className="relative">
			<textarea
				className="w-full bg-white placeholder:italic border-4 border-blue-500  rounded-md py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="Type Here.."
			></textarea>

			<span className="absolute right-2 bottom-2 flex items-center ">
				<button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-1 px-3 m-2 rounded-full">
					Post
				</button>
			</span>
		</div>
	)
}
