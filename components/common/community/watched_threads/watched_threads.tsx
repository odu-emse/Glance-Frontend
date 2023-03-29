import { ThreadType } from '../../../../types';
import Link from 'next/link';

export const WatchedThreads = ({
	threads,
	title = 'Watched Threads',
}: {
	threads: Array<ThreadType>
	title?: string
}) => {
	return (
		<>
			<h1 className="font-bold text-2xl py-1">{title}</h1>
			{threads.map((thread, threadIndex) => (
				<Link
					key={threadIndex}
					href={`/communities/modules/${thread.parentLesson.collection.module.id}/threads/${thread.id}`}
					role="thread link"
					className="text-blue-800 flex py-1 text-lg"
				>
					{thread.parentLesson.collection.module.moduleName.length >
					30
						? `${thread.parentLesson.collection.module.moduleName.substring(
								0,
								30
						  )}...`
						: thread.parentLesson.collection.module.moduleName}
				</Link>
			))}
		</>
	)
}

export const WatchedSidebarList = ({ title, threads }: {
	threads: Array<ThreadType>
	title?: string
}) => {
	return (
		<>
			<h4 className="text-2xl uppercase mb-2.5">{title}</h4>
			<div className="border border-gray-300 px-8 py-6">
				{threads.map((thread, threadIndex) => (
					<Link
						key={threadIndex}
						href={`/communities/${thread.id}`}
					>
						<span role="thread link"
									className="text-blue-800 font-bold flex pb-3 text-lg underline cursor-pointer">
						{thread.title.length > 30
							? `${thread.title.substring(0, 30)}...`
							: thread.title}
						</span>
					</Link>
				))}
			</div>
		</>
	)
}
