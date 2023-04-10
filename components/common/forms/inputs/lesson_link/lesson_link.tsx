import * as React from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'

export const LessonLink = ({ label, url, checked }: LessonLinkProps) => {
	const [isChecked, setIsChecked] = React.useState(checked ?? false)
	return (
		<li className="list-none" aria-label="list" role="list">
			<div className="flex items-center" role="listitem">
				<span
					className="cursor-pointer mr-1"
					onClick={() => setIsChecked(!isChecked)}
				>
					{isChecked ? (
						<AiFillCheckCircle />
					) : (
						<AiOutlineCheckCircle />
					)}
				</span>
				<a className="hover:underline" href={url}>
					{label}
				</a>
			</div>
		</li>
	)
}

export type LessonLinkProps = {
	/**
	 * Descriptive label that indicates the name of the module
	 */
	label: string
	/**
	 * Opens up the URL the label points to
	 */
	url: string
	/**
	 * A Boolean that decides if the labels are checked or not
	 */
	checked?: boolean
}
