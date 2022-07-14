import * as React from 'react'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<main
			className={`flex container mx-auto dark:bg-gray-800 dark:text-white`}
		>
			{children}
		</main>
	)
}

type LayoutProps = {
	children: React.ReactNode
}
