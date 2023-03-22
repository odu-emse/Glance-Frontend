import { Anchor } from '../../links/anchor/anchor'

export const ModuleList = ({ modules }: ModuleListProps) => {
	return (
		<>
			<h1 className="font-semibold text-2xl py-1">Your Modules</h1>
			{modules.map((module, moduleIndex) => (
				<Anchor
					key={moduleIndex}
					path={`/communities/modules/${module.id}/`}
					role="thread link"
					className="text-blue-800 flex py-1 text-lg"
				>
					{module.moduleName.length > 30
						? `${module.moduleName.substring(0, 30)}...`
						: module.moduleName}
				</Anchor>
			))}
		</>
	)
}

export type ModuleListProps = {
	modules: Array<ModuleListObject>
}
type ModuleListObject = {
	moduleName: string
	/**
	 * string that shows up name of the module on Default Card
	 */
	id: string
	/**
	 * unique number that shows up identity of the module card
	 */
}
