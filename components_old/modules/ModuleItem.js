import Link from 'next/link'

const ModuleItem = ({ data, role }) => {
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

export default ModuleItem
