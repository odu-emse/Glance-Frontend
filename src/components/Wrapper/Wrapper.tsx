import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Content } from '../Content'

export const Wrapper = ({ routes }: WrapperProps): JSX.Element => {
	return (
		<Routes>
			{routes
				? routes.map((route, index) => (
						<Route
							path={route.path}
							index={route.index}
							key={index}
							element={() => {
								return <Content>{route.element}</Content>
							}}
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
