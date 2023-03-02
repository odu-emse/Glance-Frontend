import React from 'react'
import Link from 'next/link'

export type SidebarItemProps = {
	value: string
	href: string
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ value, href }) => {
	return (
		<Link href={href} passHref>
			<div
				className="px-4 py-1 mx-1 my-2 rounded cursor-pointer hover:bg-wgray"
				style={{
					fontFamily: 'Montserrat, sans-serif',
				}}
			>
				<p className="m-0 p-0">{value}</p>
			</div>
		</Link>
	)
}
