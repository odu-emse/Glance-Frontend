import React from 'react'
import { QuizResult } from '@/types/graphql'
import QuizAttemptRow from '@/common/quiz/quiz_attempt_row'

function QuizAttemptList({
	moduleId,
	instanceId,
	result,
}: {
	moduleId: string
	instanceId: string
	result: QuizResult[]
}) {
	return (
		<div>
			<div className="grid grid-cols-5 border-y border-wgray mt-3 mb-1.5 pb-1.5 items-center">
				<span />
				<h3 className="uppercase mt-3.5 text-black font-light">
					Attempt
				</h3>
				<h3 className="uppercase mt-3.5 text-black font-light">Date</h3>
				<h3 className="uppercase mt-3.5 text-black font-light">time</h3>
				<h3 className="uppercase mt-3.5 text-black font-light">
					Score
				</h3>
			</div>
			{result
				.sort(
					(a, b) =>
						new Date(b.submittedAt).valueOf() -
						new Date(a.submittedAt).valueOf()
				)
				.map((result, index) => (
					<QuizAttemptRow
						key={index}
						row={index}
						moduleId={moduleId}
						instanceId={instanceId}
						result={result}
					/>
				))}
		</div>
	)
}

export default QuizAttemptList
