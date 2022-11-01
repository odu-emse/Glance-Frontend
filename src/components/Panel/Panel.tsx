import * as React from 'react'

const Panel = ({
	children,
	className,
	size,
	title,
}: PanelProps): JSX.Element => {
	const classes = [
		'rounded bg-gray-100 shadow-md container p-1 md:p-4',
		className,
		size === 1 && 'w-full',
		size === 2 && 'w-1/2',
		size === 4 && 'w-1/4',
		size === 6 && 'w-1/6',
	]
		.filter(Boolean)
		.join(' ')
	return (
		<section className={classes}>
			<h1 className="font-bold mb-2 text-2xl">{title}</h1>
			{children}
		</section>
	)
}

export type PanelProps = {
	children: JSX.Element | React.ReactNode
	/**
     *  Indicates the className - based on selection of a property named 'size', className is atlered 
     */
	className?: string
	/**
     *  Indicates the size - user selective option
     */
	size?: 1 | 2 | 4 | 6
	/**
     *  Indicates the title of the panel component
     */
	title: string
}

export default Panel
