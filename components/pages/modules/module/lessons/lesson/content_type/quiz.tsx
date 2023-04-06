import { QuizQuestion } from '@/components/common/quiz/quiz_questions'
import useSWR from 'swr'
import gqlFetcher, { client } from '@/utils/gql_fetcher'
import { gql } from 'graphql-request'
import { TextArea } from '@/components/common/forms/inputs/text_area/text_area'

const QuizContent = ({ data }) => {
	console.log('p', data)

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

	if (error) {
		return <div>Error: {error.message}</div>
	}

	if (!quizData) {
		return <div>Loading...</div>
	}

	console.log(quizData)

	return (
		// map the QuizQuestion after using the data
		<div className="flex flex-col w-full">
			<hr className="border border-black" />
			<div className="my-3 flex gap-x-40 font-extrabold">
				<span>
					<h4>
						Time Limit&nbsp;&nbsp;&nbsp;&nbsp;
						{quizData.quiz[0].timeLimit}
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
			<div className="mt-12 container flex justify-center items-center h-full w-full">
				<Button>Take Quiz</Button>
			</div>
		</div>
	)
}

export default QuizContent
