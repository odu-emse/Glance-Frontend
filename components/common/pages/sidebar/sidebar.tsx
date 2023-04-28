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
		<div className={`${open ? 'flex-none' : 'w-1/12'} relative`}>
			<aside
				id="sidePanel"
				style={{
					overflow: 'visible',
				}}
				className={`h-full bg-white transition-all drop-shadow-lg p-0 `}
			>
				<div className="flex flex-col grow pt-7">
					<SidebarItem
						icon="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
						collapsed={!open}
						value="PLAN OF STUDY"
						href={`/plan/${userSession.openId}`}
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
				<button
					id="closeButton"
					className="absolute bottom-7 -right-4 p-2 rounded-md text-red border bg-royalblue"
					onClick={() => handle(!open)}
				>
					{open ? (
						<IoIosArrowBack color="white" />
					) : (
						<IoIosArrowForward color="white" />
					)}
				</button>
			</aside>

			<div className="w-[200px] pointer-events-none"></div>
		</div>
	)
}
