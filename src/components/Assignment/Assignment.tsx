import * as React from 'react'

export const Assignment = ({
	questionCount,
	moduleIdentifier,
	moduleName,
	assignmentName,
}: AssignmentProps): JSX.Element => {
	return (
		<div className="border-solid border-gray border">
			<div>
				<p className="mx-3 my-3 text-gray-300 inline-block text-xs">
					{questionCount}{' '}
					{questionCount === 1 ? 'question' : 'questions'}
				</p>
				<p className="mx-3 my-3 pl-6 text-gray-500 inline-block text-xs uppercase font-semibold">
					{moduleIdentifier}
				</p>
			</div>
			<div>
				<p className="mx-3 my-3 text-xl">
					{moduleName} - {assignmentName}
				</p>
			</div>
		</div>
	)
}

type AssignmentProps = {
	/**
	 * The count for total of questions for this assignment card.
	 */
	questionCount: number
	/**
	 * The module Identifier of this assignment card
	 */
	moduleIdentifier: string
	/**
	 * The module name of this assignment card
	 */
	moduleName: string
	/**
	 * The assignment name of this assignment card
	 */
	assignmentName: string
}
