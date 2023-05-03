import React from 'react'
import Link from 'next/link'

export type SidebarItemProps = {
	value: string
	href: string
	svgIcon: React.ReactNode
	icon: string
	collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
	value,
	href,
	svgIcon,
	icon,
	collapsed,
}) => {
	return (
		<Link href={href} passHref>
			<a
				className="px-4 py-1 mx-1 my-2 rounded cursor-pointer hover:bg-wgray flex gap-2"
				style={{
					fontFamily: 'Montserrat, sans-serif',
					// ...collapsed ? { justifyContent: 'center' } : {}
				}}
			>
				{svgIcon}
				{!collapsed ? <p className="m-0 p-0">{value}</p> : null}
			</a>
		</Link>
	)
}
