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
		<div className='mx-3 mt-10'>
			<h6>COLLECTION OVERVIEW</h6>
			{data.map((item, index) => (
				<div key={index}>
					<p>AAAA</p>
					<Link href={`/modules/${item[url]}/view`} role="lesson link" passHref>
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
