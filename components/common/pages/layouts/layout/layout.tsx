import { useContext, useState } from 'react'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import Loader from '@/components/util/loader'
import { Sidebar } from '../../sidebar/sidebar'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import GlobalUserContext from '@/contexts/global_user_context'
import gqlFetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { Logo } from '@/components/common/svg/logo'

export const Layout = ({ children }) => {
	const router = useRouter()
	const [isLoading, setLoading] = useState(false)
	const [open, setOpen] = useState(true)
	const [isAccountVisible, setAccountVisible] = useState(false)
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
				<h1>Error loading user data</h1>
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
		<section className="h-screen">
			<GlobalUserContext.Provider
				value={{ user: data.user[0] || null, setUser }}
			>
				<nav className="flex bg-royalblue stdcontainer-sharp justify-between h-16 sticky">
					<div className="flex items-center gap-1">
						<Logo width={25} height={25} />
						<h4
							style={{
								fontWeight: 700,
								fontSize: '24px',
							}}
							className="text-white"
						>
							GLANCE
						</h4>
					</div>
					<div
						className={'flex gap-2 items-center relative'}
						onClick={() => setAccountVisible(true)}
					>
						<figcaption className={'text-xs/[16px]'}>
							<span className={'text-gray-400'}>Hello,</span>{' '}
							<span className={'font-bold text-white'}>
								{session.user.name}
							</span>
						</figcaption>
						<img
							src={session.user.image}
							alt={'profile image'}
							className="rounded-full w-8 h-8 border"
						/>
						<div
							className={`${
								isAccountVisible ? 'flex' : 'hidden'
							} right-0.5 top-12 absolute border border-black items-end justify-end flex-col w-56 float-right mr-5`}
						>
							<figcaption
								onClick={() =>
									router.push(`/users/${session.openId}`)
								}
								className={
									'text-sm text-royalblue pt-1 pb-1 pr-2 w-full text-right hover:bg-gray-200'
								}
							>
								View Profile{' '}
							</figcaption>
							<figcaption
								onClick={() =>
									router.push(
										`/users/${session.openId}/settings`
									)
								}
								className={
									'text-sm text-royalblue pt-1 pb-1 pr-2 w-full text-right hover:bg-gray-200'
								}
							>
								Account Settings
							</figcaption>
							<figcaption
								onClick={() => signOut()}
								className={
									'text-sm text-royalblue pt-1 pb-1 pr-2 w-full text-right hover:bg-gray-200'
								}
							>
								Log out
							</figcaption>
						</div>
					</div>
				</nav>
				<div
					className="flex h-[calc(100%_-_4rem)]"
					onClick={() => setAccountVisible(false)}
				>
					<Sidebar
						isLoading={isLoading}
						userSession={session}
						handle={setOpen}
						open={open}
						icon={null}
					/>
					<main className="grow overflow-y-auto">
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
