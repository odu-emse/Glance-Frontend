import React from 'react'
import Link from 'next/link'

export type SidebarItemProps = {
	value: string
	href: string
	icon: string
	collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
	value,
	href,
	icon,
	collapsed,
}) => {
	return (
		<Link href={href} passHref>
			<div
				className="px-4 py-1 mx-1 my-2 rounded cursor-pointer hover:bg-wgray flex gap-2"
				style={{
					fontFamily: 'Montserrat, sans-serif',
				}}
			>
				<img src={icon} width={32} height={32} />
				{!collapsed ? <p className="m-0 p-0">{value}</p> : null}
			</div>
		</Link>
	)
}
