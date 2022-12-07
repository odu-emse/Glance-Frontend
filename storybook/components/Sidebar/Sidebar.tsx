import * as React from 'react'
import { Logo, Hamburger } from './'

export type SidebarProps = {
	/**
	 * @default false
	 */
	authenticated: boolean
	children: React.ReactNode | React.ReactNode[]
	authChildren: React.ReactNode | React.ReactNode[]
	handleOpen: () => void
	open: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({
	authenticated,
	authChildren,
	children,
	handleOpen,
	open,
}) => {
	return (
		<aside
			className={`relative bg-gray-300 transition-all ${
				open ? 'w-3/12' : 'w-1/12'
			}`}
		>
			<nav
				className={`sticky z-50 flex flex-col bg-gray-800 top-0 left-0 right-0 h-screen`}
			>
				<Hamburger onClick={handleOpen} />

				<Logo extended={open} />

				<div
					className={`menu relative h-full flex flex-col ${
						authenticated ? 'justify-between' : 'justify-end'
					}`}
				>
					{!authenticated && authChildren ? authChildren : children}
				</div>
			</nav>
		</aside>
	)
}
