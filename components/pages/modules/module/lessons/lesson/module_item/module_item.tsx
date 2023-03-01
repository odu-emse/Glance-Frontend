import Link from 'next/link'

import { HiChevronRight } from 'react-icons/hi'

export const ModuleItem = ({ data, role }) => {
	// Use the link below once DB schema is updated
	// const link = `/modules/${data.id}/sections/${data?.headSection}/lessons/${data?.sections[data?.headSection]?.headLesson}`
	return (
		<Link href={`/modules/${data.id}`} passHref>
			<div className="stdcontainer shadow cursor-pointer flex justify-center items-center w-full">
				<div className="flex grow flex-col gap-1">
					<div className="flex flex-row gap-2" style={{
                		fontFamily: 'Microgramma, sans-serif'
            		}}>
						<p className='p-0 m-0'>MODULE {data.moduleNumber}</p>
						<p className='p-0 m-0'>//</p>
						<p className='p-0 m-0'>{role}</p>
					</div>
					<div>
						<h2>{data.moduleName}</h2>
					</div>
				</div>
				<div className="hidden md:block">
					<span
						className="w-12 h-12 block bg-royalblue text-white rounded-full flex justify-center items-center"
						style={{
							fontSize: '24px',
						}}
					>
						<HiChevronRight />
					</span>
				</div>
			</div>
		</Link>
	)
}

export type ModuleItemProps = {
	/**
	 * Boolean that determines if the course module is completed or not
	 * @type boolean
	 * @default false
	 */
	data: {
		id: String
		moduleName: String
		moduleNumber: Number
		intro: String
		createdAt: String
		description: String
		duration: Number
		keywords: Array<String>
		numSlides: Number
		feedback: String | null
		parentModules: Array<any> | null
		members: Array<any> | null
	}
	role: String
}
