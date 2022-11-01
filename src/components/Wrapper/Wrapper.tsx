import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Content } from '../Content'

export const Wrapper = ({ routes }: WrapperProps): JSX.Element => {
	return (
		<Routes>
			{routes
				? routes.map((route, index):JSX.Element => (
						<Route
							path={route.path!}
							// index={route.index}
							key={index}
							// element={() => <Content children={route.element} />}
						/>
				  ))
				: null}
		</Routes>
	)
}

type WrapperProps = {
	routes: RouteProps[]
}

export type RouteProps = {
	path?: string
	index?: boolean
	element?: React.ReactNode
}
