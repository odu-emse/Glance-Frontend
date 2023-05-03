import React from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { getQuizInstanceByID } from '@/scripts/get_quiz_instance_by_id'
import { useRouter } from 'next/router'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import Loading from '@/common/loader/loader'
import { QuizResult } from '@/types/graphql'
import QuizHeader from '@/common/quiz/quiz_header'
import Link from 'next/link'
import moment from 'moment'
import QuizAttemptList from '@/common/quiz/quiz_attempt_list'

function QuizResultPage() {
	const router = useRouter()
	const { instanceId, moduleId, attemptId } = router.query
	const { data, error } = useSWR(
		{
			query: getQuizInstanceByID,
			variables: { instanceID: instanceId },
		},
		gqlFetcher
	) as {
		data: {
			quizResult: Array<QuizResult>
		}
		error: Error
	}

	if (error)
		return (
			<RequestFailed
				title={'Result not found'}
				subtitle={error.message}
			/>
		)

	if (!data) return <Loading />

	const quizDetails = data.quizResult[0].quizInstance.quiz
	const result = data.quizResult

	if (attemptId) {
		return (
			<section className="stdcontainer">
				<h1>module quiz attempt</h1>
				<QuizHeader data={quizDetails} />
				<hr className="border border-black" />
			</section>
		)
	}

	return (
		<section className="stdcontainer">
			<h1>module quiz result</h1>
			<QuizHeader data={quizDetails} />
			<hr className="border border-black" />
			<h3
				className="uppercase mt-3.5 text-black font-light"
			>
				Attempt history
			</h3>
			<QuizAttemptList
				result={result}
				moduleId={moduleId as string}
				instanceId={instanceId as string}
			/>
		</section>
	)
}

QuizResultPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default QuizResultPage
