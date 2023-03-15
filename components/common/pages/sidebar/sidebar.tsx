import * as React from 'react'
import { SidebarItem } from './sidebar_item/sidebar_item'

export type SidebarProps = {
	userSession: any
	isLoading: boolean
	icon: string
}

export const Sidebar: React.FC<SidebarProps> = ({ userSession, isLoading,}) => {
	return (
		<div className="relative">
			<aside className="fixed rounded-none h-screen top-0 w-[200px] flex flex-col pt-20">
				<div className="px-5 mb-4">
					 <h3 className="text-black">ALMP</h3>  
				</div>
				<div className="grow">
					<SidebarItem icon= "https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={false} value="OVERVIEW" href="/overview" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={false} value="MODULES" href="/modules" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={false} value="COMMUNITIES" href="/communities" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={false} value="GRADES" href="/grades" />
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


