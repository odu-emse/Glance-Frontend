import * as React from 'react'
import Link from 'next/link'

export const SidebarLessons = ({ open, handle }): React.ReactElement => {
	const lessons = [
		'Operations Research',
		'Supply Chain Management',
		'Linear Regression',
		'Nonlinear Algebra',
		'OR Quiz 1',
	]

	return (
		<div className="overflow-x-hidden max-w-screen relative min-h-screen">
			<aside
				id="sidePanel"
				className={`absolute ${
					open ? 'right-0' : '-right-full'
				} top-0 h-screen overflow-y-scroll w-96 bg-white transition-all drop-shadow-lg p-0`}
			>
				<div className="flex p-6 mt-6 text-xl">
					<h2>LESSONS OVERVIEW</h2>
				</div>

				{lessons.map((lesson, index) => (
					<div
						className="font-montserrat text-blue mx-3 blue-800 flex text-base"
						key={index}
					>
						<Link
							href={`/lesson`}
							role="lesson link"
							className="font-montserrat text-blue m-3 blue-800 flex text-base"
						>
							{lesson}
						</Link>
					</div>
				))}
			</aside>
		</div>
	)
}

export type SidebarLessonsProps = {}
