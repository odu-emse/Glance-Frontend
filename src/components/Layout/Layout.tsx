import * as React from 'react'

export const Layout = ({ children, dark }: LayoutProps): JSX.Element => {
	return <main className={`flex container mx-auto`}>{children}</main>
}

type LayoutProps = {
	children: React.ReactNode
	dark?: boolean
}
