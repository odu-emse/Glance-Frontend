import * as React from 'react'

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
		<a
			className={`${className} ${active ? activeClassName : null}`}
			href={to}
			role={role}
		>
			{children}
		</a>
	)
}

type LinkProps = {
	to: string
	activeClassName: string
	className: string
	active?: boolean
	label?: string
	icon?: React.ReactNode
	open?: boolean
	children: React.ReactNode
	role?: string
}
