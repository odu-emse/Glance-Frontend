import React from 'react'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import Head from 'next/head'
import { InstUISettingsProvider, canvas } from '@instructure/ui'

const isServerSideRendered = () => {
	return typeof window === 'undefined'
}

function App({ Component, pageProps: { session, ...pageProps } }) {
	if (!isServerSideRendered()) {
		// TODO: Make this only visible when developers are logged in.
		import('react-dom').then((ReactDOM) => {
			import('@axe-core/react').then((axe) => {
				axe.default(React, ReactDOM, 1000, {})
			})
		})
	}

	const getLayout = Component.getLayout || ((page) => page)

	return (
		<>
			<Head>
				<link
					href={'/favicon-blue.ico'}
					rel={'icon'}
					media={'(prefers-color-scheme: light)'}
				/>
				<link
					href={'/favicon-white.ico'}
					rel={'icon'}
					media={'(prefers-color-scheme: dark)'}
				/>
			</Head>
			<InstUISettingsProvider theme={canvas}>
				<SessionProvider session={session}>
					{getLayout(<Component {...pageProps} />)}
				</SessionProvider>
			</InstUISettingsProvider>
		</>
	)
}

export default App
