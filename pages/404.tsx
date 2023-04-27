import Link from 'next/link'
import { Button } from '@/common/button/button'
import { DynamicVersion } from '@/components/common/version/dynamic_version'
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const NotFound = () => {
	const router = useRouter()

	const handleReturn = () => {
		if(router.back) {
		router.back()
		} 
		else {
		router.push('/modules')
		}
	}

	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1>404</h1>
			<p>The resource was not found</p>
			<Link className="underline text-blue-500" href="/">
				<Button
				onClick={handleReturn}
				>
					{router.back ? 'Back' : 'Return Home'}
				</Button>
			</Link>
			<DynamicVersion backendVersion={'0.3.0'} isLight={false} />
		</div>
	)	
}

export default NotFound
