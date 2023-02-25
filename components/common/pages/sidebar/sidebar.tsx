import * as React from 'react'
import { Logo } from './logo'
import { Hamburger } from './hamburger'
import { Button } from '../../button/button'
import Link from 'node_modules/next/link'

export type SidebarProps = {
	userSession: any
	isLoading: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({ userSession, isLoading }) => {
	console.log(userSession)

	return (
		<div>
			<div className="w-[250px]"></div>
			<aside className="fixed rounded-none h-screen w-[250px] border-r">
				<ul>
					<li>MODULES</li>
					<li>MODULES</li>
					<li>MODULES</li>
					<li>MODULES</li>
				</ul>
				<ul>
					<li>isLoading {isLoading ? 'true' : 'false'}</li>
					{isLoading && <li>Loading Account Info</li>}
					{!isLoading && userSession && (
						<li>Logged in as {userSession.user.name}</li>
					)}
				</ul>
			</aside>
		</div>
	)
}
