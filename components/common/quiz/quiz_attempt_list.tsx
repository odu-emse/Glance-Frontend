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
	result: QuizResult
}) {
	return (
		<div>
			<div className="grid grid-cols-5 border-y border-wgray mt-3 mb-1.5 pb-1.5 items-center">
				<span />
				<h2
					className="uppercase mt-3.5 text-black"
					style={{
						fontFamily: 'Microgramma',
						fontWeight: 400,
					}}
				>
					Attempt
				</h2>
				<h2
					className="uppercase mt-3.5 text-black"
					style={{
						fontFamily: 'Microgramma',
						fontWeight: 400,
					}}
				>
					Date
				</h2>
				<h2
					className="uppercase mt-3.5 text-black"
					style={{
						fontFamily: 'Microgramma',
						fontWeight: 400,
					}}
				>
					time
				</h2>
				<h2
					className="uppercase mt-3.5 text-black"
					style={{
						fontFamily: 'Microgramma',
						fontWeight: 400,
					}}
				>
					Score
				</h2>
			</div>
			<QuizAttemptRow
				moduleId={moduleId}
				instanceId={instanceId}
				result={result}
			/>
		</div>
	)
}

export default QuizAttemptList
