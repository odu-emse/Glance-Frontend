import * as React from 'react'

export const Hamburger = ({ onClick }: HamburgerProps) => {
	return (
		<button
			className="inline-flex items-center justify-center py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-full"
			aria-expanded="false"
			onClick={onClick}
		>
			<span className="sr-only">Open side menu</span>
			<svg
				className="block h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<svg
				className="hidden h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	)
}

type HamburgerProps = {
	onClick: () => void
}
