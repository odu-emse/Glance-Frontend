import Link from 'next/link'
import { Button } from '@/components/common/button/button'
import { DynamicVersion } from '@/components/common/version/dynamic_version'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound = () => {
	const router = useRouter()

	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1>404</h1>
			<p>The resource was not found</p>
			<Link className="underline text-blue-500" href="/">
				<Button onClick={() => router.back()}>Back</Button>
			</Link>
			<DynamicVersion backendVersion={'0.3.0'} isLight={false} />
		</div>
	)
}

export default NotFound
