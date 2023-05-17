import * as React from 'react'
import { SidebarItem } from './sidebar_item/sidebar_item'
import { PlanOfStudy } from '../../svg/plan_of_study'
import { Modules } from '../../svg/modules'
import { Communities } from '../../svg/communities'
import { GradeBook } from '../../svg/gradebook'
import { CollapseButton } from './collapse_button/collapse_button'

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
		<div className="border-r-[1px] border-r-wgray-500 relative">
			<div className="pt-12">
				<SidebarItem
					svgIcon={<PlanOfStudy width={20} height={20} />}
					collapsed={!open}
					value="PLAN OF STUDY"
					href={`/plan/${userSession.openId}`}
				/>
				<SidebarItem
					svgIcon={<Modules width={20} height={20} />}
					collapsed={!open}
					value="MODULES"
					href="/modules"
				/>
				<SidebarItem
					svgIcon={<Communities width={20} height={20} />}
					collapsed={!open}
					value="COMMUNITIES"
					href="/communities"
				/>
				<SidebarItem
					svgIcon={<GradeBook width={20} height={20} />}
					collapsed={!open}
					value="GRADES"
					href="/grades"
				/>
			</div>
			<div
				className="absolute -right-7 bottom-6"
				onClick={() => handle(!open)}
			>
				<CollapseButton open={open} />
				
			</div>
		</div>
	)
}
