import { Module } from '@/types/graphql'
import Link from 'next/link'
import React from 'react'
import ModuleTagList from '@/common/learning_path/module/module_tag_list'

const ModuleCard = ({ module }: { module: Module }) => {
	return (
		<li>
			<div className="flex gap-2 items-center justify-start">
				<Link href={`/modules/${module.id}`}>
					<a>{`${module.name} - ${module.number}`}</a>
				</Link>
			</div>
			{/*<p className="sans mt-0">{module.intro}</p>*/}
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
			{/*<ModuleTagList*/}
			{/*	title={'Topics covered'}*/}
			{/*	listData={module.keywords}*/}
			{/*	elementName={null}*/}
			{/*	elementLink={null}*/}
			{/*/>*/}
			{/*<ModuleTagList*/}
			{/*	title={'Recommended to complete first'}*/}
			{/*	listData={module.parentModules}*/}
			{/*	elementName={'moduleName'}*/}
			{/*	elementLink={'id'}*/}
			{/*/>*/}
			{/*<ModuleTagList*/}
			{/*	title={'Possible next steps...'}*/}
			{/*	listData={module.subModules}*/}
			{/*	elementName={'moduleName'}*/}
			{/*	elementLink={'id'}*/}
			{/*/>*/}
		</li>
	)
}

export default ModuleCard
