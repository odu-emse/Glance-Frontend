import * as React from 'react'
import { Link as NavLink } from 'react-router-dom'

export const Link = ({
	to,
	activeClassName,
	className,
	active = false,
	label,
	icon,
	open,
	role,
	children,
}: LinkProps) => {
	return (
		<NavLink
			to={to ?? ''}
			className={role === 'logo' ? 'h-full w-full' : ''}
		>
			<li
				className={`${
					role === 'menuitem'
						? 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 justify-start transition-all'
						: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest list-none transition-all'
				} ${className && className} ${
					active
						? `bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4 ${activeClassName}`
						: ''
				} ${
					!open && role !== 'menuitem'
						? 'flex items-center justify-center'
						: ''
				}`}
				role={role}
			>
				<span className="flex gap-2 items-center">
					<span className={`${open ? 'opacity-50' : 'opacity-100'}`}>
						{icon}
					</span>
					{open && label}
				</span>
				{role === 'menuitem' && label}
				{children ? children : null}
			</li>
		</NavLink>
	)
}

export type LinkProps = {
	to: string
	activeClassName?: string
	className?: string
	active?: boolean
	label?: string | React.ReactNode
	icon?: React.ReactNode
	open?: boolean
	role?: string
	children?: React.ReactNode
}
