import * as React from 'react'
import { Thread } from '../thread/thread'

/**
 * This function generates an array of DOM thread components based on a parent comment tree.
 * It recursively traverses the tree from the top down.
 *
 * @param {Object} parentComment - The parent comment tree.
 * @returns {Array} An array of DOM thread components.
 */
const commentGen = (parentComment) => {
	if (parentComment.comments === undefined) return []
	const threads = []
	for (const comment of parentComment.comments) {
		const subThreads = commentGen(comment)
		threads.push(
			<Thread
				body={comment.body}
				id={comment.id}
				upvotes={10}
				userProfile={{
					id: 1,
					firstName: 'joel',
					lastName: 'desante',
					picURL: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
				}}
			>
				{subThreads}
			</Thread>
		)
	}
	return threads
}

/**
 * This component renders a comments hierarchy based on a parent comment tree.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.thread - The parent comment tree.
 * @returns {JSX.Element} The rendered comments hierarchy.
 */
export const CommentsHierarchy: React.FC<CommentsHierarchyProps> = ({
	thread,
}) => {
	const threads = commentGen(thread)
	return <div>{threads}</div>
}

/**
 * The props for the CommentsHierarchy component.
 *
 * @typedef {Object} CommentsHierarchyProps
 * @property {Object} thread - The parent comment tree.
 */
export type CommentsHierarchyProps = {
	thread: any
}
