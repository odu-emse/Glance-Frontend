import { Button } from '../../../../common/button/button'
import { Input } from '../../../../common/forms/inputs/input/input'

export const ModuleThread = () => {
	return (
		<>
			<Input
				ariaLabel="Text input field"
				defaultValue="THREAD TITLE"
				label="Label"
				name="text-input"
				onChange={() => {}}
				options={[]}
				type="text"
			/>
			<textarea
				className="
        form-control 
        block 
        w-full 
        rounded
        px-3 
        py-1.5 
        my-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				placeholder="THREAD INPUT"
			></textarea>
			<div className="button flex justify-end">
				<Button>
					<p>SUBMIT BUTTON</p>
				</Button>
			</div>
		</>
	)
}
