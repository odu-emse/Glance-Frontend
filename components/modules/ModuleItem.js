import Link from 'next/link';

const ModuleItem = ({ data }) => {
	return (
		<Link
			href={`/modules/${data.id}/sections/${data.headSection}/lessons/${
				data.sections[data.headSection].headLesson
			}`}
		>
			<div className="border p-4 shadow-md cursor-pointer rounded hover:bg-gray-100">
				<h4 className="text-lg">{data.name}</h4>
				<p className="text-sm text-gray-400">Click to open</p>
			</div>
		</Link>
	);
};

export default ModuleItem;
