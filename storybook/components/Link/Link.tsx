import * as React from 'react'
import { IconContext } from 'react-icons'

export const Link = ({
	to = '',
	activeClassName,
	className,
	active = false,
	label,
	icon,
	extended,
	role,
	children,
}: LinkProps) => {
	return (
		<IconContext.Provider value={{ className: 'xxs:h-4 xs:h-4 sm:h-6' }}>
			<a href={to} className={role === 'logo' ? 'h-full w-full' : ''}>
				<li
					className={`${
						role === 'menuitem'
							? 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 justify-start transition-all'
							: 'text-gray-300 hover:bg-gray-700 hover:text-white text-sm font-medium uppercase tracking-widest list-none transition-all'
					} 
					${role === 'logo' ? 'px-0.5 py-0.5' : 'sm:px-3 sm:py-4'}
					${className && className} ${
						active
							? `bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4 ${activeClassName}`
							: ''
					} ${
						!extended && role !== 'menuitem'
							? 'flex items-center justify-center'
							: ''
					}`}
					role={role}
				>
					<span className="flex sm:gap-2 gap-0 items-center">
						<span
							className={`${
								extended ? 'opacity-50' : 'opacity-100'
							}`}
						>
							{icon}
						</span>
						<span className="xxs:text-xxs xs:text-xs sm:text-base">
							{extended && label}
						</span>
					</span>
					{role === 'menuitem' && label}
					{children ? children : null}
				</li>
			</a>
		</IconContext.Provider>
	)
}

Link.defaultProps = {
	className: '',
	active: false,
	label: '',
	icon: null,
	extended: false,
}

export type LinkProps = {
	to: string
	activeClassName?: string
	className?: string
	active?: boolean
	label?: string | React.ReactNode
	icon?: React.ReactNode
	extended?: boolean
	role: string
	children?: React.ReactNode
}
