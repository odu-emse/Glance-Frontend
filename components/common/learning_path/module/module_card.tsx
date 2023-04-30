import { Module } from '@/types/graphql'
import Link from 'next/link'
import React from 'react'

const ModuleCard = ({ module }: { module: Module }) => {
	return (
		<li>
			<div className="flex gap-2 items-center justify-start">
				<Link href={`/modules/${module.id}`}>
					<a>{`${module.name} - ${module.number}`}</a>
				</Link>
			</div>
			<h5 className="sans">Description</h5>
			<p className="sans mt-0">{module.description}</p>
			<h5 className="sans">Objectives</h5>
			<ul className="mt-0">
				{module.objectives.map((item, index) => (
					<li className="sans" key={index}>
						{item}
					</li>
				))}
			</ul>
		</li>
	)
}

export default ModuleCard
