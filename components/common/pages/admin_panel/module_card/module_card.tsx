import { BiArchiveIn } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'

export const ModuleCard = ({
	id,
	moduleName,
	instructorName,
	registeredUsers,
}: ModuleCardProps) => {
	return (
		<div className="border-solid border-gray bg-gray-200 rounded flex justify-between border w-2/5">
			<div className="m-2">
				
				<p className="text-2xl py-2">{moduleName}</p>
				<div className="flex text-xs font-medium">
					<p className="uppercase pr-2">{instructorName}</p>
					<p className="uppercase px-2">
						{registeredUsers} Registered Users
					</p>
				</div>
			</div>
			<div className="flex gap-3 items-center m-2">
				<BiArchiveIn size={25} />
				<RiDeleteBin5Line size={25} />
			</div>
		</div>
	)
}

export type ModuleCardProps = {
	id: number
	moduleName: string
	/**
	 * String that shows up name of the module on Default Card
	 */
	instructorName: string
	/**
	 * String that shows up name of the instructor on Default Card
	 */
	registeredUsers: number
	/**
	 * number that shows up the number of registered users for particular module on Default Card
	 */
}
