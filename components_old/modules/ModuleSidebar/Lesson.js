import Link from 'next/link'

const Lesson = ({ data, selected, moduleId, sectionId }) => {
	return (
		<Link
			href={`/modules/${moduleId}/sections/${sectionId}/lessons/${data.id}`}
		>
			<div
				className={`flex rounded p-2 m-1 items-center cursor-pointer ${
					selected === data.id && 'bg-blue-500 text-white font-medium'
				}`}
			>
				<p className="">{data.name}</p>
			</div>
		</Link>
	)
}

export default Lesson
