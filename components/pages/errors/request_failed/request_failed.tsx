import React from 'react'
import { Button } from '@/components/common/button/button'
import { useRouter } from 'next/router'

const RequestFailed = ({ title, subtitle }: RequestFailedProps) => {
	const router = useRouter()
	return (
		<div className="flex flex-col gap-2 justify-center items-center stdcontainer h-screen">
			<h1 className="text-2xl font-bold">{title}</h1>
			<h3 className="text-lg font-semibold">{subtitle}</h3>
			<Button
				className="underline text-blue-500"
				onClick={() => router.reload()}
			>
				Try again
			</Button>
		</div>
	)
}

export type RequestFailedProps = {
	title: string
	subtitle: string
}

export default RequestFailed
