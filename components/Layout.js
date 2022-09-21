import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import LoadingSplash from './LoadingSplash';

const Layout = ({ children }) => {

	const [ authenticated, setAuthenticated ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		
		async function checkAuth() {
			setLoading(true);
			const response = await fetch("/api/auth/check");
			
			if (!response.ok) {
				setAuthenticated(false);
				await Router.push("/login");
				return;
			}

			setAuthenticated(true);
			setLoading(false);
		}

		checkAuth();

	}, []);

	if(loading) return <p>Loading...</p>

	return (
		<main className="flex gap-x-1">
			<Sidebar />
			<section className="w-full">{children}</section>
		</main>
	);
};

export default Layout;
