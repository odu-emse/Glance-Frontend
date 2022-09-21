import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import Router from 'next/router';

const Layout = ({ children }) => {

	const [ authenticated, setAuthenticated ] = useState(false);
	const [ authLoading, setAuthLoading ] = useState(false);

	useEffect(() => {
		
		async function checkAuth() {
			setAuthLoading(true);
			const response = await fetch("/api/auth/check");
			
			if (!response.ok) {
				setAuthenticated(false);
				await Router.push("/login");
				return;
			}

			setAuthenticated(true);
			setAuthLoading(false);
		}

		checkAuth();

	}, []);

	if(authLoading) return <p>Loading...</p>

	return (
		<main className="flex gap-x-1">
			<Sidebar />
			<section className="w-full">{children}</section>
		</main>
	);
};

export default Layout;
