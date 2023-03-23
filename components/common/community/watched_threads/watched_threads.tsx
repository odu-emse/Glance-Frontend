import { Anchor } from '../../links/anchor/anchor'
import { ThreadType } from '../../../../types';

export const WatchedThreads = ({ threads } : { threads: Array<ThreadType> }) => {
	return (
		<>
			<h1 className="font-bold text-2xl py-1">Watched Threads</h1>
			{threads.map((thread, threadIndex) => (
				<Anchor
					key={threadIndex}
					path={`/communities/modules/${thread.parentLesson.collection.module.id}/threads/${thread.id}`}
					role="thread link"
					className="text-blue-800 flex py-1 text-lg"
				>
					{thread.parentLesson.collection.module.moduleName.length > 30
						? `${thread.parentLesson.collection.module.moduleName.substring(0, 30)}...`
						: thread.parentLesson.collection.module.moduleName}
				</Anchor>
			))}
		</>
	)
}

export type WatchedThreadsProps = {
	threads: Array<WatchedThreadsObkect>
}

type WatchedThreadsObkect = {
	module_id: string
	thread_id: string
	module_name: string
}
