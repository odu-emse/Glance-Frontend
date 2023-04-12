import React, { useContext, useState, useEffect } from 'react'
import { QuizQuestion } from '@/components/common/quiz/quiz_questions'
import useSWR from 'swr'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'
import { Button } from '@/components/common/button/button'
import GlobalUserContext from '@/contexts/global_user_context'

const QuizContent = ({ data }) => {
	// console.log('p', data[0].link)
	const [answers, setAnswers] = useState([])
	const { user } = useContext(GlobalUserContext)

	const updateAnswer = (questionNumber, answerId) => {
		setAnswers((prevAnswers) => {
			const newAnswers = [...prevAnswers]
			newAnswers[questionNumber - 1] = answerId
			return newAnswers
		})
	}
	const { data: quizData, error } = useSWR(
		{
			query: gql`
				query GetQuizContent($id: ID!) {
					quiz(args: { id: $id }) {
						id
						totalPoints
						timeLimit
						numQuestions
					}
				}
			`,
			variables: { id: data[0].link },
		},
		gqlFetcher
	) as {
		data: {
			quiz: Array<{
				id: string
				totalPoints: number
				timeLimit: number
				numQuestions: number
			}>
		}
		error: Error
	}
	const { mutate } = useSWR({}, gqlFetcher)

	const [instanceId, setInstanceId] = useState(
		() => localStorage.getItem('quizInstanceId') || null
	)

	useEffect(() => {
		if (instanceId) {
			localStorage.setItem('quizInstanceId', instanceId)
		} else {
			localStorage.removeItem('quizInstanceId')
		}
	}, [instanceId])

	const takeQuizFunction = async () => {
		try {
			const result = await client.request(
				gql`
					mutation TakeQuizRequest($id: ID!) {
						createQuizInstance(quizID: $id) {
							id
						}
					}
				`,
				{ id: data[0].link }
			)

			// Extract the id from the response and update the state
			const id = result.createQuizInstance.id
			setInstanceId(id)
		} catch (error) {
			console.error('Error while creating quiz instance:', error)
		}
	}

	const { data: quizResponse } = useSWR(
		instanceId
			? {
					query: gql`
						query FetchQuizInstance($id: ID!) {
							quizInstance(args: { id: $id }) {
								id
								questions {
									text
									answers {
										id
										text
										correct
									}
								}
							}
						}
					`,
					variables: { id: instanceId },
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			quizInstance: Array<{
				id: string
				questions: Array<{
					text: string
					answers: Array<{
						id: string
						text: string
						correct: boolean
					}>
				}>
			}>
		}
		error: Error
	}
	useEffect(() => {
		if (instanceId && quizResponse) {
			console.log('Quiz Response:', quizResponse)
		}
	}, [instanceId, quizResponse])!
	const submitQuiz = (instanceId, answers) => {
		mutate(async () => {
			await client.request(
				gql`
					mutation SubmitQuiz($input: QuizSubmission!) {
						submitQuiz(input: $input) {
							id
						}
					}
				`,
				{
					input: {
						student: user.id,
						quizInstance: instanceId,
						answers: answers,
					},
				}
			)
		})
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (!quizData) {
		return <div>Loading...</div>
	}

	console.log(quizData)
	console.log(instanceId)

	return (
		// map the QuizQuestion after using the data
		<div className="flex flex-col w-full">
			<hr className="border border-black" />
			<div className="my-3 flex gap-x-40 font-extrabold">
				<span>
					<h4>
						Time Limit&nbsp;&nbsp;&nbsp;&nbsp;
						{quizData.quiz[0].timeLimit} Minutes
					</h4>
				</span>
				<span>
					<h4>
						Question&nbsp;&nbsp;&nbsp;&nbsp;
						{quizData.quiz[0].numQuestions}
					</h4>
				</span>
				<span>
					<h4>
						Points&nbsp;&nbsp;&nbsp;&nbsp;
						{quizData.quiz[0].totalPoints}
					</h4>
				</span>
			</div>
			<hr className="border border-black" />

			<h2 className="mt-3 tracking-wider">INSTRUCTIONS</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Adipisci quod dolore autem? Alias quidem id a quia est maxime
				laborum error laboriosam odio excepturi consequuntur distinctio
				quae vero, ratione molestias.{' '}
			</p>
			{quizResponse ? (
				<>
					{quizResponse.quizInstance[0].questions.map(
						(question, index) => (
							<QuizQuestion
								key={index}
								questionNumber={index + 1}
								question={question.text}
								options={question.answers.map((answer) => ({
									id: answer.id,
									text: answer.text,
								}))}
								updateAnswer={updateAnswer}
							/>
						)
					)}
					<div className="mt-6">
						<Button onClick={() => submitQuiz(instanceId, answers)}>
							Submit
						</Button>
					</div>
				</>
			) : (
				<div className="mt-12 container flex justify-center items-center h-full w-full">
					<Button onClick={() => takeQuizFunction()}>
						Take Quiz
					</Button>
					<p>{instanceId}</p>
				</div>
			)}
		</div>
	)
}

export default QuizContent
