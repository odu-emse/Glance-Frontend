import { Button } from '../../../button/button'
import { TextArea } from '@/common/forms/inputs/text_area/text_area';
import React from 'react';

export const ThreadTextArea = ({handle, onSubmit}) => {
	return (
		<div>
			<TextArea
				handle={(e) => handle(e.target.value)}
				className="w-full bg-white placeholder:italic border-2 border-royalblue rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="What are your thoughts?"
				rows={4}
				icon={false}
			/>
			<span className="flex justify-end items-center m-2 ">
				<Button size="small" shape="regular" onClick={onSubmit}>
					Post
				</Button>
			</span>
		</div>
	)
}
