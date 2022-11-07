import * as React from 'react'
import { GrClose } from 'react-icons/gr'

export const AssignmentPanel = ({
	open,
	handle,
	moduleInformation,
}: AssignmentPanelProps): JSX.Element => {
	const heading = 'text-sm font-medium pb-1.5'

	const list = 'text-xs list-disc pl-3'

	return (
		<aside
			id="sidePanel"
			className={`absolute ${
				open ? 'right-0' : '-right-full'
			} top-0 h-screen overflow-y-scroll w-96 bg-white transition-all drop-shadow-lg p-0`}
		>
			<button
				id="exitButton"
				className="absolute top-0 left-0 pt-3 pl-3 text-white"
				onClick={() => handle(!open)}
			>
				<GrClose />
			</button>

			<div
				id="content"
				className="h-full flex flex-col py-8 px-4 top-0 right-0"
			>
				<div
					id="title"
					className="flex text-base font-medium justify-center"
				>
					<h1>{moduleInformation.moduleTitle}</h1>
				</div>

				<div
					id="subTitle"
					className="flex pt-1.5 pb-8 text-xs justify-center text-slate-500"
				>
					<h6>{moduleInformation.assignmentTitle}</h6>
				</div>

				<div id="reminders" className="pb-8">
					<h1 className={heading}>Set Reminder</h1>
					<ul className="text-slate-500 text-xs">
						<li>3 days before due</li>
						<li>1 week before due date</li>
						<li>24 hours before due date</li>
					</ul>
				</div>

				<div id="software" className="pb-8">
					<h1 className={heading}>Required Software</h1>
					<ul className={list}>
						{moduleInformation.software ? moduleInformation.software.map(
							(software, sfwIndex) => (
								<li key={sfwIndex}>{software}</li>
							)
						) : null}
					</ul>
				</div>

				<div id="modules" className="pb-8">
					<h1 className={heading}>Required Modules</h1>
					<ul className={list}>
						{moduleInformation.deps ? moduleInformation.deps.map((dep, depIndex) => (
							<li key={depIndex}>{dep}</li>
						)) : null}
					</ul>
				</div>

				<div id="connections" className="pb-8">
					<h1 className={heading}>Connections</h1>
					<ul className="text-xs">
						{moduleInformation.connections ? moduleInformation.connections.map((mod, modIndex) => (
							<li className="pb-1 border-b" key={modIndex}>
								{mod.moduleTitle} - {mod.assignmentTitle}
							</li>
						)) : null}
						
					</ul>
				</div>

				<button
					id="startButton"
					className="left-2 right-2 bottom-4 text-sm text-white uppercase py-1.5 px-4.5 bg-sky-300"
				>
					<h1>Start Assignment</h1>
				</button>
			</div>
		</aside>
	)
}

export type AssignmentPanelProps = {
	/**
	 * Boolean that decides if the component is open or not
	 * @type boolean
	 * @default true
	 */
	open: boolean
	/**
	 * Function placeholder to differentiate the onClick functionality
	 * based on the state of the 'open' boolean
	 */
	handle: (open: boolean) => void
	/**
	 * Class that holds all module information
	 */
	moduleInformation: ModuleInformation
}

export type ModuleInformation = {
	/**
	 * Descriptive name of the course module's title
	 * @type string
	 */
	moduleTitle: string
	/**
	 * Title of the assignment associated with the course module
	 * @type string
	 */
	assignmentTitle: string
	/**
	 * Array of strings that lists course modules that are required to start the current module
	 * @type string
	 */
	deps?: string[]
	/**
	 * Array of strings that lists the required software to run the module assignment
	 * @type string
	 */
	software?: string[]
	/**
	 * Array type that holds other modules that have connection with current module
	 * @type array
	 */
	connections?: ModuleInformation[]
}
