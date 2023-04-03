import { useContext, useState } from 'react'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import Loader from '@/components/util/loader'
import { Sidebar } from '../../sidebar/sidebar'
import { useSession } from 'next-auth/react'
import GlobalUserContext from '@/contexts/global_user_context'
import gqlFetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'

export const Layout = ({ children }) => {
	const [isLoading, setLoading] = useState(false)
	const [open, setOpen] = useState(true)
	const { data: session, status } = useSession()
	const { setUser } = useContext(GlobalUserContext)

	const { data, error } = useSWR(
		session
			? {
					query: gql`
			query {
				user(input: {
					openID: "${session.openId}"
				}){
					id
					plan {
							id
					}
				}
			}
		`,
			  }
			: null,
		gqlFetcher
	)

	if (status === 'loading') {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<h1>
					Error loading user data
				</h1>
			</div>
		)
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	return (
		<section>
			<GlobalUserContext.Provider
				value={{ user: data.user[0] || null, setUser }}
			>
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

							<div
								style={{
									display: isLoading ? 'none' : 'block',
								}}
							>
								{' '}
								{/* Totally unneeded but it makes me happy to have this display so here it is... */}
								{children}
							</div>
						</GlobalLoadingContext.Provider>
					</main>
				</div>
			</GlobalUserContext.Provider>
		</section>
	)
}
