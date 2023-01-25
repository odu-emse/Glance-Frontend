import Sidebar from './Sidebar';
import { useRouter } from 'next/router';

import AuthenticationContext from '@/contexts/AuthenticationContext';
import useAuth from 'hooks/useAuth';

const Layout = ({ children }) => {

	const router = useRouter()

	const { isAuthorized, user, loading } = useAuth();
	if(loading) return <p>Loading...</p>
	if(!isAuthorized) router.push('/login')

	return (
		<AuthenticationContext.Provider value={user}>
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
