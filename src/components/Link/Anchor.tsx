import * as React from 'react'
import { Link } from 'react-router-dom'

export type AnchorProps = {
	path: string
	children: React.ReactNode
	className?: string
}

const Anchor = ({ path, children, className }: AnchorProps): JSX.Element => {
	const classes = ['underline ', className && false].filter(Boolean).join(' ')
	return (
		<Link to={path ?? ''} className={classes}>
			{children}
		</Link>
	)
}

export default Anchor
