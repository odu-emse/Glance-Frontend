import * as React from 'react'
import Link from 'next/link'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Module } from '@/types/graphql'

export const SidebarLessons = ({
	open,
	handle,
	data,
	property,
	url,
	currentModule,
}: SidebarLessonsProps): React.ReactElement => {
	return (
		<div className="relative">
			<aside
				id="sidePanel"
				className={`absolute ${
					open ? 'right-0' : '-right-full'
				} top-0 h-screen w-72 bg-white transition-all drop-shadow-lg p-0`}
			>
				<div className="ml-8 mt-10">
					<h6
						className="font-inter my-4"
						style={{
							fontWeight: 400,
							fontSize: '16px',
						}}
					>
						COLLECTION OVERVIEW
					</h6>
					{data.map((item, index) => (
						<div
							key={index}
							className="font-lora flex my-3"
							style={{
								fontWeight: 700,
								fontSize: '16px',
							}}
						>
							<Link
								href={`/modules/${item[url]}/view`}
								role="lesson link"
							>
								<a
									className={`font-lora ${
										currentModule === item.id
											? 'text-royalblue'
											: 'text-black'
									}`}
								>
									{`${item[property]}`}
								</a>
							</Link>
						</div>
					))}
				</div>
				<button
					id="closeButton"
					className="absolute bottom-7 -left-4 p-2 rounded-md text-red border bg-royalblue"
					onClick={() => handle(!open)}
					aria-label="closeButton"
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
	currentModule: string
	data: Module[]
	property: keyof Module
	url: keyof Module
}
