import Link from 'next/link'
import { Button } from '@/common/button/button'
import { DynamicVersion } from '@/components/common/version/dynamic_version'

const NotFound = () => {
	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1>404</h1>
			<p>The resource was not found</p>
			<Link className="underline text-blue-500" href="/">
				<Button>Return Home</Button>
			</Link>
			<DynamicVersion backendVersion={'0.3.0'} isLight={false} />
		</div>
	)
}

export default NotFound
