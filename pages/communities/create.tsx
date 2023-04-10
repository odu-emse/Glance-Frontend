import { Button } from '@/components/common/button/button'

const CreateThread = () => {
	return (
		<div className="flex flex-col">
			<input type="text" placeholder="An eye catching title..." />
			<select name="aaa" id="">
				<option value="a">Hello 0</option>
				<option value="a">Hello 1</option>
				<option value="a">Hello 2</option>
				<option value="a">Hello 3</option>
			</select>
			<textarea
				name="a"
				id=""
				cols="30"
				rows="10"
				placeholder="What do you have to say for yourself?"
			></textarea>
			<Button
				onClick={() => {
					console.log('Post')
				}}
			>
				Post
			</Button>
		</div>
	)
}

export default CreateThread
