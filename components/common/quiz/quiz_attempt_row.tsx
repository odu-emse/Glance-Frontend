import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import { QuizResult } from '@/types/graphql'

function QuizAttemptRow({
	moduleId,
	instanceId,
	result,
	row,
}: {
	moduleId: string
	instanceId: string
	result: QuizResult
	row: number
}) {
	return (
		<div className="grid grid-cols-5 items-center">
			{row === 0 ? (
				<h3
					className="uppercase mt-3.5 text-black font-light"
				>
					Latest
				</h3>
			) : (
				<span />
			)}
			<Link
				href={`/modules/${moduleId}/result?instanceId=${instanceId}&attemptId=${result.id}`}
			>
				<a>Attempt {row + 1}</a>
			</Link>
			<p>{moment(result.submittedAt).format('MM/DD/YYYY hh:mm A')}</p>
			<p>XX minutes</p>
			<p>
				<span className="font-semibold mr-1">{result.score}</span>
				out of {result.quizInstance.quiz.totalPoints}
			</p>
		</div>
	)
}

export default QuizAttemptRow
