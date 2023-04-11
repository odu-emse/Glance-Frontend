import * as React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const SidebarLessons = ({ 
	open,
	handle
 }): React.ReactElement => {

	const lessons = [
		'Operations Research',
		'Supply Chain Management',
		'Linear Regression',
		'Nonlinear Algebra',
		'OR Quiz 1',
	]

	return (
		<div className="relative">
			<aside
				id="sidePanel"
				className={`absolute ${
					open ? 'right-0' : '-right-full'
				} top-0 h-screen w-72 bg-white transition-all drop-shadow-lg p-0`}
			>
				<div className="ml-8 mt-10">
					<h6 className="font-inter my-4"
					style={{
						fontWeight: 400,
						fontSize: '16px',
					}}
					>
						LESSONS OVERVIEW
					</h6>
				{lessons.map((lesson, index) => (
					<div
						key={index}
						className="font-lora flex my-3"
						style={{
							fontWeight: 700,
							fontSize: '16px',
						}}
					>
						<Link
							href={`/lesson`}
							role="lesson link"
							className="font-lora text-royalblue"
						>
							{lesson}
						</Link>
					</div>
				))}
				</div>
				<button
					id="closeButton"
					className="absolute bottom-7 -left-4 p-2 rounded-md text-red border bg-royalblue"
					onClick={() => handle(!open)}
				>
					{open ? (
						<IoIosArrowForward color="white" />
					) : (
						<IoIosArrowBack color="white" />
						
					)}
				</button>
			</aside>
			<div className="w-[200px] pointer-events-none"></div>
		</div>
	)
}

export type SidebarLessonsProps = {
	handle: (open: boolean) => void
	open: boolean
}
