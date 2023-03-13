import { BsArrowReturnRight } from 'react-icons/bs'

export const ModuleRequirement = ({ requirements }: ModuleRequirementProps) => {
	console.log('pre-req', requirements)

	return (
		<div>
			<input
				type="search"
				className="block min-h-[auto] w-1/2 rounded border border-gray-200 bg-gray-200"
				id="searchRequirements"
				placeholder="Search"
				//onChange={}
			/>
		</div>
	)
}

export type ModuleRequirementProps = {
	requirements: Array<String>
}
