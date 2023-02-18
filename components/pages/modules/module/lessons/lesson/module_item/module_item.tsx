import Link from 'next/link'

export const ModuleItem = ({ data, role }) => {
	// Use the link below once DB schema is updated
	// const link = `/modules/${data.id}/sections/${data?.headSection}/lessons/${data?.sections[data?.headSection]?.headLesson}`
	return (
		<Link href={`/modules/${data.id}`}>
			<div className="border p-4 shadow-md cursor-pointer rounded hover:bg-gray-100">
				<div className="flex items-center justify-between">
					<h4 className="text-lg">{data.moduleName}</h4>
					<p>{role}</p>
				</div>
				<p className="text-sm text-gray-400">Click to open</p>
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
