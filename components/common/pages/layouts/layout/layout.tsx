import { useContext, useState } from 'react'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import Loader from '@/components/util/loader'
import { Sidebar } from './sidebar/sidebar'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import GlobalUserContext from '@/contexts/global_user_context'
import gqlFetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { TopBar } from './top_bar/top_bar'
import { CollapseButton } from './sidebar/collapse_button/collapse_button'

export const Layout = ({ rightSidebar = null, rightSidebarCollapsable = true, children }) => {
	const router = useRouter()
	const [isLoading, setLoading] = useState(false)
	const [isAccountVisible, setAccountVisible] = useState(false)
	const { data: session, status } = useSession()
	const { setUser } = useContext(GlobalUserContext)

	// Sidebar
	const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false)
	const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false)

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
				<h1>Error loading user data</h1>
			</div>
		)
	}

	if (typeof window !== 'undefined' && !session) {
		router.push('/', '/', { shallow: true })
	}

	if (!data) {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	console.log(rightSidebar)

	return (
		<GlobalUserContext.Provider
			value={{ user: data.user[0] || null, setUser }}
		>
			<div className="grid grid-cols-layout grid-rows-layout">
				{/* Navigation */}
				<div className="col-span-full row-span-1 row-start-1 sticky top-0">
					<TopBar
						isAccountVisible={isAccountVisible}
						session={session}
						setAccountVisible={setAccountVisible}
					/>
				</div>

				<aside className="col-span-1 col-start-1 row-span-1 row-start-2 border-r">
					<nav className="sticky top-[64px] h-[calc(100vh-64px)]">
						<Sidebar
							open={!leftSidebarCollapsed}
							userSession={session}
							isLoading={isLoading}
						/>
						<div
							className="absolute -right-4 bottom-8"
							onClick={() => { setLeftSidebarCollapsed(!leftSidebarCollapsed) }}
						>
							<CollapseButton open={!leftSidebarCollapsed} />
						</div>
					</nav>
				</aside>

				{rightSidebar && (
					<aside className="col-span-1 col-start-3 row-span-1 row-start-2 border-l">
						<div className="sticky top-[64px] h-[calc(100vh-64px)]">
							{rightSidebar}
							{rightSidebarCollapsable && (
								<div 
									className="absolute -left-4 bottom-8" 
									onClick={() => { setRightSidebarCollapsed(!rightSidebarCollapsed) }}
								>
									<CollapseButton open={!!rightSidebarCollapsed} />
								</div>
							)}
						</div>
					</aside>
				)}

				<main
					className={`col-start-2 ${
						rightSidebar ? 'col-end-3' : 'col-end-4'
					} row-span-1 row-start-2 stdcontainer`}
				>
					<GlobalLoadingContext.Provider
						value={{ isLoading, setLoading }}
					>
						{isLoading === true && (
							<div className="flex justify-center items-center stdcontainer h-screen">
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
	)
}
