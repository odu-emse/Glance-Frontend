import { Module } from '@/types/index'
import Link from 'next/link'
import React from 'react'

const ModuleTagList = ({
	title,
	listData,
	elementName,
	elementLink,
}: {
	title: string
	listData: Array<Module | string>
	elementName: string
	elementLink: string
}) => {
	if (listData.length === 0) return null
	return (
		<div className="my-3">
			<h5 className="sans">{title}</h5>
			<div className="flex gap-1">
				{listData.map((item, index) => {
					if (typeof item === 'string') {
						return (
							<span
								className="flex gap-2 bg-wgray rounded px-2 py-1 sans text-sm w-fit"
								key={index}
							>
								<h6>{item}</h6>
							</span>
						)
					}
					return (
						<Link
							href={`/modules/${item[elementLink]}`}
							key={index}
						>
							<a className="flex gap-2 bg-wgray rounded border-2 border-wgray px-2 py-1 sans text-sm w-fit no-underline cursor-pointer hover:bg-white hover:border-wgray transition-all">
								<h6 className="hover:text-royalblue">
									{item[elementName]}
								</h6>
							</a>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default ModuleTagList
