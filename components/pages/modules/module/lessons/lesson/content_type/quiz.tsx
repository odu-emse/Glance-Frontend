import React, { useContext, useState, useEffect } from 'react'
import { QuizQuestion } from '@/components/common/quiz/quiz_questions'
import useSWR from 'swr'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'
import { Button } from '@/components/common/button/button'
import GlobalUserContext from '@/contexts/global_user_context'
import { Quiz, QuizInstance } from '@/types/graphql';
import { getQuizById } from '@/scripts/get_quiz_by_id';
import { createQuizInstance } from '@/scripts/create_quiz_instance';
import { useRouter } from 'next/router';
import QuizHeader from '@/common/quiz/quiz_header';

const QuizContent = ({ data }) => {
	const router = useRouter()
	const {moduleId} = router.query
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
			query: getQuizById,
			variables: { quizID: data[0].link },
		},
		gqlFetcher
	) as {
		data: {
			quiz: Array<Quiz>
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
				query: createQuizInstance,
				variables: { id: instanceId },
			}
			: null,
		gqlFetcher
	) as {
		data: {
			quizInstance: Array<QuizInstance>
		}
		error: Error
	}
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
						answers,
					},
				}
			)
		})
		.then(() => {
			localStorage.removeItem('quizInstanceId')
			router.push(`/modules/${moduleId as string}/result?instanceId=${instanceId}`)
		})
		.catch((error) => {
			console.error('Error while submitting quiz:', error)
		})
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (!quizData) {
		return <div>Loading...</div>
	}

	return (
		// map the QuizQuestion after using the data
		<div className="flex flex-col w-full">
			<QuizHeader data={quizData.quiz[0]} />
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
								questionType={""}
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