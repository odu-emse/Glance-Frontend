
import * as React from 'react'
import { Button } from '../../../common/button/Button'
import { Link } from '../../../common/links/link/Link'

export const PagenotFound: React.FC<PagenotFoundProps> = ({
	
}): React.ReactElement => {
	

	return (
        <div className="mx-auto w-full flex flex-col items-center justify-center h-screen">
        <h1 className="font-semibold text-7xl">404 - Not Found!</h1>
        <Link className="underline text-blue-500" to={''} role={''} >
            <Button>Return Home</Button>
        </Link>
    </div>
	)
}

export type PagenotFoundProps = {
	
	
	
}
