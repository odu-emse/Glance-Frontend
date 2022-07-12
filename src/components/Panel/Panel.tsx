import * as React from 'react'

const Panel = ({ children }: PanelProps): JSX.Element => {
	return <div>{children}</div>
}

type PanelProps = {
	children: React.ReactNode
}

export default Panel
