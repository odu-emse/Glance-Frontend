import { ThreadType } from '../../../../types'
import Link from 'next/link'

export const WatchedSidebarList = ({
	title,
	threads,
}: {
	threads: Array<ThreadType>
	title?: string
}) => {
	return (
		<>
			<h4 className="text-2xl uppercase mb-2.5">{title}</h4>
			<div className="border border-gray-300 px-8 py-6">
				{threads.map((thread, threadIndex) => (
					<Link key={threadIndex} href={`/communities/${thread.id}`}>
						<span
							role="thread link"
							className="text-blue-800 font-bold flex pb-3 text-lg underline cursor-pointer"
						>
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
