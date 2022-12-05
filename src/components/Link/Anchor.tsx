import * as React from 'react'

export type AnchorProps = {
	/**
	 * Indicates the path upon clicking on the link
	 */
	path: string
	children: React.ReactNode
	/**
	 * A descriptive label for the className
	 */
	className?: string
	/**
	 * Indicates role of the anchor element, upon which styling changes based on user's selection
	 */
	role?: string
	/**
	 * A Boolean that decides the styling of anchor tag
	 */
	open?: boolean
	onClick?: (e?: React.MouseEvent<HTMLAnchorElement>) => void
	/**
	 * Indicates id as string
	 */
	id?: string
	icon?: React.ReactNode
}

export const Anchor = ({
	path = '',
	children,
	className = '',
	role = '',
	open,
	onClick = () => undefined,
	id = '',
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
		<a href={path} className={classes} onClick={onClick} id={id} {...rest}>
			{icon && open ? (
				<span className="flex gap-2 items-center">
					<span className="opacity-50">{icon}</span>
					{children}
				</span>
			) : (
				children
			)}
		</a>
	)
}
