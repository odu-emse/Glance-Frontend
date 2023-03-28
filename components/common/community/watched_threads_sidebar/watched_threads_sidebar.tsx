import * as React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
		<aside
			id="sidePanel"
			style={{
				overflowY: 'visible',
			}}
			className={`${
				open ? 'w-80' : 'w-3'
			} border-l border-gray-300 relative h-screen overflow-y-scroll bg-white transition-all p-3 pt-14`}
		>
			{open && children}
			<button
				id="closeButton"
				className="absolute bottom-7 -left-4 p-2 rounded-md text-red border bg-blue-500"
				onClick={() => handle(!open)}
			>
				{open ? <IoIosArrowForward /> : <IoIosArrowBack />}
			</button>
		</aside>
	)
}

export default WatchedThreadSidebar
