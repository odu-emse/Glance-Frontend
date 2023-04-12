import { Button } from '../../../button/button'
import { TextArea } from '@/common/forms/inputs/text_area/text_area'
import React, { useState } from 'react'
import Loader from '@/components/util/loader'

export const ThreadTextArea = ({ onSubmit, threadID, userID }) => {
	const [commentBody, setCommentBody] = useState<string | null>('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	return (
		<div>
			<TextArea
				handle={(e) => setCommentBody(e.target.value)}
				className="w-full bg-white placeholder:italic border-2 border-royalblue rounded-sm py-2 pl-3 pr-10 focus:outline-2 focus:outline-dashed focus:ring-0"
				placeholder="What are your thoughts?"
				value={commentBody || ''}
				rows={4}
				icon={false}
			/>
			<span className="flex justify-end items-center m-2 ">
				<Button
					size="small"
					shape="regular"
					onClick={() => {
						setIsSubmitting(true)
						onSubmit(threadID, commentBody, userID)
					}}
				>
					{isSubmitting ? (
						<Loader textColor="royalblue" pageLoader={false} />
					) : (
						'Post'
					)}
				</Button>
			</span>
		</div>
	)
}
