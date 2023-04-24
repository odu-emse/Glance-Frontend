import * as React from 'react'
import { SidebarItem } from './sidebar_item/sidebar_item'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { PlanOfStudy } from '../../svg/plan_of_study'
import { Modules } from '../../svg/modules'
import { Communities } from '../../svg/communities'
import { GradeBook } from '../../svg/gradebook'

type IconType = React.ReactNode

export type SidebarProps = {
	userSession: any
	isLoading: boolean
	svgIcon: IconType
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
				<div className="flex flex-col grow pt-7 ">
					<SidebarItem
						svgIcon={<PlanOfStudy width={20} height={20} />}
						collapsed={!open}
						value="PLAN OF STUDY"
						href={`/plan/${userSession.openId}`}
						icon={''}
					/>
					<SidebarItem
						svgIcon={<Modules width={20} height={20} />}
						collapsed={!open}
						value="MODULES"
						href="/modules"
						icon={''}
					/>
					<SidebarItem
						svgIcon={<Communities width={20} height={20} />}
						collapsed={!open}
						value="COMMUNITIES"
						href="/communities"
						icon={''}
					/>
					<SidebarItem
						svgIcon={<GradeBook width={20} height={20} />}
						collapsed={!open}
						value="GRADES"
						href="/grades"
						icon={''}
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
								svgIcon={''}
							/>
							<SidebarItem
								value={userSession.user.name}
								href={`/users/${userSession.openId}`}
								collapsed={!open}
								icon={userSession.user.image}
								svgIcon={''}
							/>
						</>
					)}
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
