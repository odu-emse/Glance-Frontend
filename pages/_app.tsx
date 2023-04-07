import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import Head from 'next/head'

function App({ Component, pageProps: { session, ...pageProps } }) {
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
			<SessionProvider session={session}>
				{getLayout(<Component {...pageProps} />)}
			</SessionProvider>
		</>
	)
}

export default App
