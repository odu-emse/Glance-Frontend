import * as React from 'react'
import { Link } from 'react-router-dom'

export type AnchorProps = {
	path: string
	children: React.ReactNode
	className?: string
	role?: string
	open?: boolean
	onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void
	id?: string
	icon?: React.ReactNode
}

export const Anchor = ({
	path,
	children,
	className,
	role,
	open,
	onClick,
	id,
	icon,
	...rest
}: AnchorProps): JSX.Element => {
	const classes = [
		'underline',
		className && className,
		role === 'tooltip-parent' &&
			!open &&
			'flex items-center justify-center py-4',
		open &&
			role === 'tooltip-parent' &&
			'justify-start text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest list-none no-underline',
	]
		.filter(Boolean)
		.join(' ')
	return (
		<Link
			to={path ?? ''}
			className={classes}
			{...rest}
			onClick={onClick}
			id={id ?? ''}
		>
			{icon && open ? (
				<span className="flex gap-2 items-center">
					<span className="opacity-50">{icon}</span>
					{children}
				</span>
			) : (
				children
			)}
		</Link>
	)
}
