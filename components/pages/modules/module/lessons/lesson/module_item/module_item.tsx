import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi'
import { Module } from '@/types/graphql'
import React from 'react'

export const ModuleItem = ({
	data,
	expanded,
	handleExpansion,
	selected,
}: ModuleItemProps) => {
	return (
		<div
			className={`px-5 py-4 rounded-md shadow cursor-pointer flex justify-center items-center w-full border-2 ${
				selected ? 'border-royalblue' : 'border-transparent'
			}`}
		>
			<div
				className="flex grow flex-col gap-1"
				onClick={() => handleExpansion(!expanded)}
			>
				<div className="flex flex-row gap-1 sans text-sm sans uppercase items-center">
					<p className="p-0 m-0">
						SECTION {data.collections[0].section.sectionNumber}
					</p>
					<span>/</span>
					<p className="p-0 m-0">
						{data.collections[0].name}
					</p>
					<span>/</span>
					<p className="p-0 m-0">
						MODULE {data.prefix && data.prefix}
						{data.number}
					</p>
				</div>
				<div>
					<h2 className="sans leading-5 text-royalblue font-semibold">
						{data.name}
					</h2>
				</div>
			</div>
			<Link href={`/modules/${data.id}`} passHref>
				<a className="block">
					<span
						className="w-12 h-12 bg-royalblue text-white rounded-full flex justify-center items-center"
						style={{
							fontSize: '24px',
						}}
					>
						<HiChevronRight />
					</span>
				</a>
			</Link>
		</div>
	)
}

export type ModuleItemProps = {
	data: Module
	role: String
	expanded: boolean
	handleExpansion: React.Dispatch<React.SetStateAction<boolean>>
	selected: boolean
}
