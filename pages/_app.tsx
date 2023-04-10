import React from 'react'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

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
		<SessionProvider session={session}>
			{getLayout(<Component {...pageProps} />)}
		</SessionProvider>
	)
}

export default App
