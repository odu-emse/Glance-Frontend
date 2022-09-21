import Layout from '@/components/Layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)

	return (
		getLayout(
			<GoogleOAuthProvider clientId="179547029989-eueljn9jl5gqgforq4jpav2qddfhqhlu.apps.googleusercontent.com">
				<Component {...pageProps} />
			</GoogleOAuthProvider>
		)
	);
}

export default App;
