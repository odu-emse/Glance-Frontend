import { ThreadType } from '../../../../types'
import Link from 'next/link'

export const WatchedThreads = ({
	threads,
	title = 'Watched Threads',
}: {
	threads: Array<ThreadType>
	title?: string
}) => {
	return (
		<>
			<h1>{title}</h1>
			{threads.map((thread, threadIndex) => (
				<Link
					key={threadIndex}
					href={`/communities/modules/${thread.parentLesson.collection.module.id}/threads/${thread.id}`}
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

export const WatchedSidebarList = ({
	title,
	threads,
}: {
	threads: Array<ThreadType>
	title?: string
}) => {
	return (
		<>
			<h4 className="uppercase mb-2">{title}</h4>
			<div>
				{threads.map((thread, threadIndex) => (
					<Link
						key={threadIndex}
						href={`/communities/${thread.id}`}
						passHref
					>
						<a>
							{thread.title.length > 30
								? `${thread.title.substring(0, 30)}...`
								: thread.title}
						</a>
					</Link>
				))}
			</div>
		</>
	)
}
