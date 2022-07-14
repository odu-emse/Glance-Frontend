import * as React from 'react'
import { BrowserRouter, Link as NavLink } from 'react-router-dom'

export const Link = ({
	to,
	activeClassName,
	className,
	active = false,
	label,
	icon,
	open,
	children,
	role,
}: LinkProps) => {
	return (
		<BrowserRouter>
			<li
				className={`${
					role === 'menuitem'
						? 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
						: ' '
				}text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest list-none ${className} ${
					active
						? `bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4 ${activeClassName}`
						: ''
				}`}
				role={role}
			>
				<NavLink to={to || ''}>{children || label}</NavLink>
			</li>
		</BrowserRouter>
	)
}

type LinkProps = {
	to: string
	activeClassName?: string
	className: string
	active?: boolean
	label?: string
	icon?: React.ReactNode
	open?: boolean
	children: React.ReactNode
	role?: string
}
