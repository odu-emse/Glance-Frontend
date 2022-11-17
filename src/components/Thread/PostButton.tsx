import { Button } from '../Button/Button'
import { Input } from '../FormElements/Input'

export const PostButton = () => {
	return (
		<div className="relative">
			<textarea
				className="w-full bg-white placeholder:italic border-4 border-blue-500  rounded-md py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="Type Here.."
			></textarea>

			<span className="absolute right-2 bottom-2 flex items-center m-2 ">
				<Button label="Post" size="small" />
			</span>
		</div>
	)
}
