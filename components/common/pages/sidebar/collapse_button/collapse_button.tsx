import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export type CollapseButtonProps = {
	open: boolean
}

export const CollapseButton: React.FC<CollapseButtonProps> = ({ open }) => {
	return (
		<button className="p-2 rounded-md text-red border bg-royalblue">
			{open ? (
				<IoIosArrowBack color="white" />
			) : (
				<IoIosArrowForward color="white" />
			)}
		</button>
	)
}
