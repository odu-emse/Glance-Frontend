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
		<aside className={ 'px-3 pt-12' }>
			{open && children}
		</aside>
	)
}

export default WatchedThreadSidebar
