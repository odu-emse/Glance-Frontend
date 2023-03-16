import { Button } from 'components/common/button/button'
import * as React from 'react'
import { SidebarItem } from './sidebar_item/sidebar_item'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export type SidebarProps = {
	userSession: any
	isLoading: boolean
	icon: string
	open: boolean
	handle: (open: boolean) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ userSession, isLoading, open, handle }) => {

	return (
		<div className="relative">
			<aside id="sidePanel"
				style={{
					overflowY: 'visible'
				}}
				className={`absolute ${open ? 'left-0' : 'w-1/12'
					} top-0 h-screen overflow-y-scroll w-96 bg-white transition-all drop-shadow-lg p-0`}>

				<div className="p-5 mb-1">
					<h3 className="text-black">ALMP</h3>
				</div>
				<div className="flex flex-col grow">
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={open ? false : true} value="OVERVIEW" href="/overview" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={open ? false : true} value="MODULES" href="/modules" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={open ? false : true} value="COMMUNITIES" href="/communities" />
					<SidebarItem icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" collapsed={open ? false : true} value="GRADES" href="/grades" />
				</div>
				<div>
					{!isLoading && userSession && (
						<>
							<SidebarItem
								value="ACCOUNT"
								href={`/users/${userSession.openId}/settings`} />
							<SidebarItem
								value={userSession.user.name}
								href={`/users/${userSession.openId}`}
							/>
						</>
					)}
				</div>
				<button
					id="closeButton"
					style={{
						right: '-15px',
						bottom: '30px'
					}}
					className="absolute bottom-1 right-0 p-2 rounded-md text-red border bg-blue-500"
					onClick={() => handle(!open)}
				>
					{open ? <IoIosArrowBack /> : <IoIosArrowForward />}

				</button>
			</aside>

			<div className="w-[200px] pointer-events-none"></div>
		</div>
	)
}


