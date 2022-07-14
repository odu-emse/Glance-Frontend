import * as React from 'react'
import { Link } from '../Link'

export const Logo = ({ open }: LogoProps): JSX.Element => {
	return (
		<div className="flex items-center justify-center py-5 w-full">
			<Link to="/" className="w-full">
				<img
					className="block max-h-16 mx-auto"
					src={`${
						open
							? 'https://www.odu.edu/content/dam/odu/logos/univ/png-72dpi/odu-sig-noidea-fullcolor.png'
							: 'https://www.odu.edu/content/dam/odu/logos/univ/png-72dpi/crown-r-2-color.png'
					}`}
					alt="Workflow"
					loading="lazy"
				/>
			</Link>
		</div>
	)
}

type LogoProps = {
	open: boolean
}
