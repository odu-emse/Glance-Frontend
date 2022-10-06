import { Accordion, AccordionProps } from '../Accordion'
import * as React from 'react'

export const SidebarForModules = ({ topics }: SidebarForModulesProps) => {
	return (
		<aside className="w-80" aria-label="Sidebar">
			<div className="overflow-y-auto bg-gray-200 rounded dark:bg-gray-800">
				<div className="progressBar bg-sky-600 p-4">
					<div className="flex justify-between">
						<span className="text-sm font-normal text-gray-50 mt-2 mb-1">
							MODULE PROGRESS - 75%
						</span>
					</div>
					<div className="w-auto bg-gray-600 rounded-full h-2.5 m-1 dark:bg-gray-700">
						<div className="w-1/2 bg-gray-50 h-2.5 rounded-full"></div>
					</div>
				</div>
				<div className="bg-gray-0">
					{topics.map((topic, topicIndex) => (
						<Accordion
							key={topicIndex}
							title={topic.title}
							lessons={topic.lessons}
						/>
					))}
				</div>
			</div>
		</aside>
	)
}

export type SidebarForModulesProps = {
	topics: AccordionProps[]
}
