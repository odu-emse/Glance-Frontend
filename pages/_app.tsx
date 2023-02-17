import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }) {
	const getLayout = Component.getLayout || ((page) => page)

	return getLayout(
		<SessionProvider session={session}>
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default App
