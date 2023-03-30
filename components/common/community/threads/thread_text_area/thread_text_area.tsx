import { Button } from '../../../button/button'

export const ThreadTextArea = () => {
	return (
		<div>
			<textarea
				className="w-full bg-white placeholder:italic border-2 border-royalblue rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="What are your thoughts?"
				rows={4}
			></textarea>

			<span className="flex justify-end items-center m-2 ">
				<Button size="small" shape="regular">
					Post
				</Button>
			</span>
		</div>
	)
}
