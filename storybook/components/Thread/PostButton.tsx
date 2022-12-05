import { Button } from '../Button/Button'
import { Input } from '../FormElements/Input'

export const PostButton = () => {
	return (
		<div className="relative">
			<textarea
				className="w-full bg-white placeholder:italic border-2 border-blue-700 rounded-md py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="Leave a comment..."
				rows={4}
			></textarea>

			<span className="absolute right-2 bottom-2 flex items-center m-2 ">
				<Button size="small" shape='pill'>Post</Button>
			</span>
		</div>
	)
}
