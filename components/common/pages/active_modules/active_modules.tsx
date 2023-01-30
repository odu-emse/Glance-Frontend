import { Anchor } from '../../links/anchor/Anchor'

export const ActiveModules = ({ modules }: ActiveModulesProps) => {
	return (
		<>
			<h1 className="font-semibold text-2xl py-1">Active Module List</h1>
			{modules.map((module, moduleIndex) => (
				<Anchor
					key={moduleIndex}
					path={`/communities/modules/${module.module_id}/`}
					role="thread link"
					className="text-blue-800 flex py-1 text-lg"
				>
					{module.module_name.length > 30
						? `${module.module_name.substring(0, 30)}...`
						: module.module_name}
				</Anchor>
			))}
		</>
	)
}

export type ActiveModulesProps = {
	modules: Array<ActiveModulesObject>
}

type ActiveModulesObject = {
	module_name: string
	module_id: string
}
