import React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export type CollapseButtonProps = {
	open: boolean
}

export const CollapseButton: React.FC<CollapseButtonProps> = ({ open }) => {
	return (
		<div className="m-3 rounded-md text-red cursor-pointer">
			{open ? (
				<button className="p-2 rounded-md border bg-royalblue">
					<IoIosArrowBack color="white" />
				</button>
			) : (
				<button className="p-2 rounded-md border bg-royalblue">
					<IoIosArrowForward color="white" />
				</button>
			)}
		</div>
	)
}
