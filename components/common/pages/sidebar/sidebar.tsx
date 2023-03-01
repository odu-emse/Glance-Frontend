import * as React from 'react'
import { Logo } from './logo'
import { Hamburger } from './hamburger'
import { Button } from '../../button/button'
import Link from 'node_modules/next/link'
import { SidebarItem } from './sidebar_item/sidebar_item'

export type SidebarProps = {
	userSession: any
	isLoading: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ userSession, isLoading }) => {
	return (
		<div className="relative">
			<aside className="fixed rounded-none h-screen top-0 w-[200px] flex flex-col pt-20">
				<div className="px-5 mb-4">
					<h3 className="text-black">ALMP</h3>
				</div>
				<div className="grow">
					<SidebarItem value="OVERVIEW" href="/overview" />
					<SidebarItem value="MODULES" href="/modules" />
					<SidebarItem value="COMMUNITIES" href="/communities" />
					<SidebarItem value="GRADES" href="/grades" />
				</div>
				<div>
					{!isLoading && userSession && (
						<>
							<SidebarItem
								value="ACCOUNT"
								href={`/users/${userSession.openId}/settings`}
							/>
							<SidebarItem
								value={userSession.user.name}
								href={`/users/${userSession.openId}`}
							/>
						</>
					)}
				</div>
			</aside>
			<div className="w-[200px] pointer-events-none"></div>
		</div>
	)
}
