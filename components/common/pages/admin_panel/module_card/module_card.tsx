import { BiArchiveIn } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export const ModuleCard = ({
	id,
	moduleName,
	instructorName,
	registeredUsers,
}: ModuleCardProps) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className="border-solid border-gray bg-gray-200  hover:bg-gray-100 rounded flex justify-between border"
		>
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
	id: string
	/**
	 * unique number that shows up identity of the module card
	 */
	moduleName: string
	/**
	 * string that shows up name of the module on Default Card
	 */
	instructorName: string
	/**
	 * string that shows up name of the instructor on Default Card
	 */
	registeredUsers: number
	/**
	 * number that shows up the number of registered users for particular module on Default Card
	 */
}
