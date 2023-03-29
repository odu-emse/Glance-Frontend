import { useState } from 'react';
import GlobalLoadingContext from '@/contexts/global_loading_context';
import Loader from '@/components/util/loader';
import { Sidebar } from '../../sidebar/sidebar';
import { useSession } from 'next-auth/react';

export const Layout = ({ children }) => {
	const [isLoading, setLoading] = useState(false)
	const [open, setOpen] = useState(true)
	const { data: session, status } = useSession()

	if (status === 'loading') {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	return (
		<section>
			<nav className="bg-royalblue stdcontainer-sharp"></nav>
			<div className="flex h-full">
				<Sidebar
					isLoading={isLoading}
					userSession={session}
					handle={setOpen}
					open={open}
					icon={null}
				/>
				<main className="grow">
					<GlobalLoadingContext.Provider
						value={{ isLoading, setLoading }}
					>
						{isLoading === true && (
							<div className="flex justify-center items-center stdcontainer h-32">
								<Loader textColor="royalblue" />
							</div>
						)}

						<div style={{ display: isLoading ? 'none' : 'block' }}>
							{' '}
							{/* Totally unneeded but it makes me happy to have this display so here it is... */}
							{children}
						</div>
					</GlobalLoadingContext.Provider>
				</main>
			</div>
		</section>
	)
}
