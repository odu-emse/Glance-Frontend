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

export const Sidebar: React.FC<SidebarProps> = ({
	userSession,
	isLoading,
	open,
	handle,
}) => {
	return (
		<div className={`${open ? 'w-96' : 'w-1/12'} relative`}>
			<aside
				id="sidePanel"
				style={{
					overflowY: 'visible',
				}}
				className={`h-screen overflow-y-scroll w-full bg-white transition-all drop-shadow-lg p-0`}
			>
				<div className="p-5 mb-1">
					<h3 className="text-black">ALMP</h3>
				</div>
				<div className="flex flex-col grow">
					<SidebarItem
						icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
						collapsed={!open}
						value="PLAN OF STUDY"
						href="/planofstudy"
					/>
					<SidebarItem
						icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
						collapsed={!open}
						value="MODULES"
						href="/modules"
					/>
					<SidebarItem
						icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
						collapsed={!open}
						value="COMMUNITIES"
						href="/communities"
					/>
					<SidebarItem
						icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
						collapsed={!open}
						value="GRADES"
						href="/grades"
					/>
				</div>
				<div>
					{!isLoading && userSession && (
						<>
							<SidebarItem
								value="ACCOUNT"
								href={`/users/${userSession.openId}/settings`}
								collapsed={!open}
								icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
							/>
							<SidebarItem
								value={userSession.user.name}
								href={`/users/${userSession.openId}`}
								collapsed={!open}
								icon={userSession.user.image}
							/>
						</>
					)}
				</div>
				<button
					id="closeButton"
					className="absolute bottom-7 -right-4 p-2 rounded-md text-red border bg-blue-500"
					onClick={() => handle(!open)}
				>
					{open ? <IoIosArrowBack /> : <IoIosArrowForward />}
				</button>
			</aside>

			<div className="w-[200px] pointer-events-none"></div>
		</div>
	)
}
