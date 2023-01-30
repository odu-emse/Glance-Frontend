import * as React from 'react'
import { Button } from '../../../common/button/Button'
import { Link } from '../../../common/links/link/link'

export type PageNotFoundProps = {}

export const PageNotFound: React.FC<
	PageNotFoundProps
> = ({}): React.ReactElement => {
	return (
		<div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
			<h1 className="font-semibold text-7xl">404 - Not Found!</h1>
			<Link className="underline text-blue-500" to={''} role={''}>
				<Button>Return Home</Button>
			</Link>
		</div>
	)
}
