import React from 'react'
import type { Module } from '@/types/graphql'
import { FaTimes } from 'react-icons/fa'
import { Button } from '@/components/common/button/button'
import router from 'next/router'

function ModuleSidebar({
	data,
	handleExpansion,
}: {
	data: Module
	handleExpansion: React.Dispatch<React.SetStateAction<boolean>>
}) {
	return (
		<aside
			className={`flex flex-col gap-2 flex-1 w-1/3 border-wgray border rounded-lg`}
		>
			<span
				className="pt-5 px-4 text-[20px] cursor-pointer w-fit"
				onClick={() => handleExpansion(false)}
				tabIndex={0}
			>
				<FaTimes />
			</span>
			<div className="px-11 py-7 flex flex-col justify-between">
				<div className="">
					<h3
						className="uppercase font-normal"
						style={{
							fontSize: '18px',
						}}
					>
						{data.name}
					</h3>
					<p>{data.description}</p>
					<div>
						<h4>Recommended Modules</h4>
						<ul className="mt-0">
							{data.collections.map((collection) => {
								return collection.modules
									.filter((module) => module.id !== data.id)
									.map((module) => {
										return (
											<li key={module.id}>
												<a
													href={`/modules/${module.id}`}
												>
													{module.name}
												</a>
											</li>
										)
									})
							})}
						</ul>
					</div>
					<div className="">
						<h4>Objectives</h4>
						<ul className="mt-0">
							{data.objectives.map(
								(objective, objectiveIndex) => {
									return (
										<li key={objectiveIndex}>
											{objective}
										</li>
									)
								}
							)}
						</ul>
					</div>
				</div>
				<div className="flex justify-end items-center gap-2">
					<Button variant={'secondary'} size="small">
						View Community
					</Button>

					<Button
						size="small"
						onClick={() => router.push(`/modules/${data.id}`)}
					>
						Open Module
					</Button>
				</div>
			</div>
		</aside>
	)
}

export default ModuleSidebar
