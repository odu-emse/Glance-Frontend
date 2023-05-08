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
	collapsed,
}) => {
	return (
		<Link href={href} passHref>
			<div className="hover:bg-wgray h-[48px] min-w-[48px] flex items-center cursor-pointer" title={value}>
				<span className={`flex items-center w-full gap-2 p-4 sans`}>
					{svgIcon}
					{!collapsed ? <p className="m-0 p-0">{value}</p> : null}
				</span>
			</div>
		</Link>
	)
}
