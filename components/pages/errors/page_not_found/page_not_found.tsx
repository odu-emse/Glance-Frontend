import * as React from 'react'
import { Button } from '../../../common/button/button'
import { Link } from '../../../common/links/link/link'
import { DynamicVersion } from '../../../common/version/dynamic_version'
import { Logo } from '../../../common/svg/logo'

export type PageNotFoundProps = {}

export const PageNotFound: React.FC<
	PageNotFoundProps
> = ({}): React.ReactElement => {
	return (
		<div className="flex flex-col justify-center items-center h-screen relative">
			<div className="flex flex-col items-center h-fit w-full">
				<h1 className="font-bold text-9xl">404</h1>

				<h3 className="max-w-[37.5rem] pt-6 flex align-center text-center text-xl text-black font-light">
					We can't seem to find the page you're looking for. You may
					have mistyped the address or the page may have moved.
				</h3>

				<Link className="text-blue-500" to={''} role={''}>
					<Button>Go Back</Button>
				</Link>
			</div>

			<div className="flex flex-col items-center align-center justify-center absolute bottom-4">
				<div className="flex flex-row items-center gap-2">
					<Logo width={30} height={30} fillColor="20449b" />
					<h1 className="text-royalblue font-bold text-2xl shrink-0">
						GLANCE
					</h1>
				</div>
				<DynamicVersion
					backendVersion={'0.3.0'}
					isLight={false}
					modifyCSS="text-royalblue text-[1.25rem] pt-2"
				/>
			</div>
		</div>
	)
}
