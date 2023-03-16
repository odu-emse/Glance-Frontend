import Link from 'next/link'
import { Button } from '@/common/button/button'

const NotFound = () => {
	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1 className="font-semibold text-7xl">404 - Not Found!</h1>
			<Link className="underline text-blue-500" href="/">
				<Button>Return Home</Button>
			</Link>
		</div>
	)
}

export default NotFound
