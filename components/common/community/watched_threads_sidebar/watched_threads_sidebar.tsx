import * as React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { CollapseButton } from '../../pages/sidebar/collapse_button/collapse_button'

export type WatchedThreadsSidebarProps = {
	open: boolean
	handle: (open: boolean) => void
	children: React.ReactNode
}

const WatchedThreadSidebar: React.FC<WatchedThreadsSidebarProps> = ({
	open,
	handle,
	children,
}) => {
	return (
		<div
			className={`border-l-[1px] border-wgray relative p-4 ${
				open ? 'w-[300px]' : ''
			}`}
		>
			{open && children}
			<div
				className="absolute -left-4 bottom-8"
				onClick={() => handle(!open)}
			></div>
		</div>
	)
}

export default WatchedThreadSidebar
