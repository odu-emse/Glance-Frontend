import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi'
import { Module } from '@/types/graphql';

export const ModuleItem = ({ data, role } : ModuleItemProps) => {
	// Use the link below once DB schema is updated
	// const link = `/modules/${data.id}/sections/${data?.headSection}/lessons/${data?.sections[data?.headSection]?.headLesson}`
	return (
		<Link href={`/modules/${data.id}`} passHref>
			<div className="stdcontainer shadow cursor-pointer flex justify-center items-center w-full">
				<div className="flex grow flex-col gap-1">
					<div
						className="flex flex-row gap-2 sans"
						style={{
							fontFamily: 'Microgramma, sans-serif',
						}}
					>
						<p className="p-0 m-0">SECTION {data.collections[0].section.sectionNumber}</p>
						<p className="p-0 m-0">//</p>
						<p className="p-0 m-0">MODULE {data.prefix && data.prefix}{data.number}</p>
					</div>
					<div>
						<h2>{data.name}</h2>
					</div>
				</div>
				<div className="hidden md:block">
					<span
						className="w-12 h-12 bg-royalblue text-white rounded-full flex justify-center items-center"
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
	data: Module
	role: String
}
