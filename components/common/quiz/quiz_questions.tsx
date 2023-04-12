import React, { useState } from 'react'

export const QuizQuestion = ({
	questionNumber,
	question,
	questionType,
	options,
	updateAnswer,
}) => {
	const [selectedOption, setSelectedOption] = useState(null)

	const handleChange = (e) => {
		setSelectedOption(e.target.value)
		const selectedAnswer = options.find(
			(option) => option.text === e.target.value
		)
		updateAnswer(questionNumber, selectedAnswer.id)
	}

	return (
		<div>
			<h5>
				<span className="mr-3">{questionNumber}.</span> {question}
			</h5>
			<ul className="my-0">
				{options.map((option, index) => (
					<div key={index} className="flex items-center mx-10">
						<input
							className="relative float-left mt-0.5 mr-2 -ml-[1.5rem] h-3.5 w-3.5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary hover:cursor-pointer checked:focus:border-primary checked:focus:before:scale-100"
							type="radio"
							name={`question${questionNumber}`}
							id={`option${index}`}
							value={option.text}
							checked={selectedOption === option.text}
							onChange={handleChange}
						/>
						<label
							className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
							htmlFor={`option${index}`}
						>
							<li className="list-none">{option.text}</li>
						</label>
					</div>
				))}
			</ul>
		</div>
	)
}

export type QuizQuestionProps = {
	question: string
	questionNumber: number
	questionType?: string | boolean
	options: Array<{
		id: string
		text: string
	}>
}
