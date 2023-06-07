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
		<div>
			<h6>COLLECTION OVERVIEW</h6>
			{data.map((item, index) => (
				<div key={index}>
					<Link href={`/modules/${item[url]}/view`} role="lesson link">
						<a>
							{ `${item[property]}` }
						</a>
					</Link>
				</div> 
			))}
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
