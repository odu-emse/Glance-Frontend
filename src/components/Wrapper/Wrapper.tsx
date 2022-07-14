import * as React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Content } from '../Content'

export const Wrapper = ({ routes }: WrapperProps): JSX.Element => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => (
					<Route
						path={route.path}
						index={route.index}
						key={index}
						element={() => {
							return <Content>{route.element}</Content>
						}}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

type WrapperProps = {
	routes: [RouteProps]
}

export type RouteProps = {
	path?: string
	index?: boolean
	element?: React.ReactNode
}
