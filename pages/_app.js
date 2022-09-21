import { GoogleOAuthProvider } from '@react-oauth/google';
import Head from 'next/head';
import '../styles/globals.css';

function App({ Component, pageProps }) {
	return (
		<GoogleOAuthProvider clientId="179547029989-eueljn9jl5gqgforq4jpav2qddfhqhlu.apps.googleusercontent.com">
			<Component {...pageProps} />
		</GoogleOAuthProvider>
	);
}

export default App;
