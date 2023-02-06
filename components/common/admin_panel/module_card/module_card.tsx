import { BiArchiveIn } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const ModuleCard = () => {
	return (
        <div className="border-solid border-gray bg-gray-200 rounded flex justify-between shadow-lg border w-2/5">
            <div className="m-2">
                <p className="text-2xl py-2">Module A</p> 
                <div className="flex text-xs font-medium">
                    <p className="uppercase pr-2">Instructor</p>
                    <p className="uppercase px-2">342 Registered Users</p>
                </div>
            </div>
            <div className="flex gap-3 items-center m-2">
                <BiArchiveIn size={25}/>
                <RiDeleteBin5Line size={25}/>
            </div>
        </div>

	)
}