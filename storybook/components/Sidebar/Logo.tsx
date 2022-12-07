import * as React from 'react'
import { Link } from '../Link'

export const Logo = ({ extended }: LogoProps): JSX.Element => {
	return (
		<div className="flex items-center justify-center py-5 w-full">
			<Link to="/" className="w-full" role="logo" extended={extended}>
				<img
					className="block max-h-16 mx-auto"
					src={`${
						extended
							? 'https://ww1.odu.edu/content/dam/odu/logos/univ/png-72dpi/odu-sig-noidea-fullcolor.png'
							: 'https://ww1.odu.edu/content/dam/odu/logos/univ/png-72dpi/crown-r-2-color.png'
					}`}
					alt="ODU Logo"
					loading="lazy"
				/>
			</Link>
		</div>
	)
}

type LogoProps = {
	extended: boolean
}
