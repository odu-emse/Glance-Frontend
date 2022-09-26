import Sidebar from './Sidebar';
import Router from 'next/router';

import AuthenticationContext from '@/contexts/AuthenticationContext';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

const Layout = ({ children }) => {

	const { data, error } = useSWR('/api/auth/check', fetcher);
	if (error) { Router.push("/login") }
	if (!data) return <p>Loading...</p>;

	return (
		<AuthenticationContext.Provider value={data?.payload}>
			<main className="flex gap-x-1">
				<Sidebar />
				<section className="w-full">
					{children}
				</section>
			</main>
		</AuthenticationContext.Provider>
	);
};

export default Layout;
