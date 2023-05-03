import React from 'react'
import { Quiz } from '@/types/graphql'

function QuizHeader({ data }: { data: Quiz }) {
	return (
		<div className="mt-5 mb-14">
			<hr className="border border-black" />
			<div className="my-3 flex gap-x-40 font-extrabold">
				<span>
					<h4>
						Time Limit&nbsp;&nbsp;&nbsp;&nbsp;
						{data.timeLimit ? `${data.timeLimit} Minutes` : 'None'}
					</h4>
				</span>
				<span>
					<h4>
						Question&nbsp;&nbsp;&nbsp;&nbsp;
						{data.numQuestions}
					</h4>
				</span>
				<span>
					<h4>
						Points&nbsp;&nbsp;&nbsp;&nbsp;
						{data.totalPoints}
					</h4>
				</span>
			</div>
			<hr className="border border-black" />

			<h3
				className="uppercase mt-6 tracking-wider text-black font-light"
			>
				INSTRUCTIONS
			</h3>
			<p>{data.instructions}</p>
		</div>
	)
}

export default QuizHeader
