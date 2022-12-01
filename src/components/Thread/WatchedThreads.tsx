import { Anchor } from '../Link/Anchor'

export const WatchedThreads = ({ threads }: WatchedThreadsProps) => {
	return (
		<>
			<h1 className="font-bold text-2xl py-1">Watched Threads</h1>
			{threads.map((thread, threadIndex) => (
				<Anchor
				key={threadIndex}
					path={`/communities/modules/${thread.module_id}/threads/${thread.thread_id}`}
					role="thread link"
					className="text-blue-800 flex py-1 text-lg"
				>
					{thread.module_name.length > 30
						? `${thread.module_name.substring(0, 30)}...`
						: thread.module_name}
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
