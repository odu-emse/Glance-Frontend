import {useState} from 'react'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import Loader from '@/components/util/loader'
import { Sidebar } from '../../sidebar/sidebar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export const Layout = ({ children }) => {
	const router = useRouter()
	const [isLoading, setLoading] = useState(true)
	const [isAccountVisible, setAccountVisible] = useState(false)
	const { data: session, status } = useSession()


	if (status === 'loading') {
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)
	}

	// TODO: we might want to uncomment this once we have next routing integrated
	// if (status !== 'loading' && session === null) {
	// 	router.push('/login')
	// 	return
	// }

	return (
		<section>
			<nav className="flex bg-royalblue stdcontainer-sharp justify-end">
				<div className={"flex gap-2 items-center relative"}  onClick={() => setAccountVisible(true)}>
					<figcaption className={"text-xs/[16px]"}><span className={"text-gray-400"}>Hello,</span> <span className={"font-bold text-white"}>{session.user.name}</span></figcaption>
					<img src={session.user.image} alt={"profile image"} className="rounded-full w-8 border"/>
					<div className={`${isAccountVisible ? "flex" : "hidden"} pt-3 right-0.5 top-12 absolute border-2 border-black gap-3 items-end justify-end flex-col w-56 float-right mr-5`}>
						<figcaption className={"text-sm text-royalblue"}> View Profile </figcaption>
						<figcaption className={"text-sm text-royalblue"}>Account Settings</figcaption>
						<figcaption className={"text-sm text-royalblue"}>Log out</figcaption>
					</div>
				</div>

			</nav>

			<div className="flex h-full" onClick={() => setAccountVisible(false)}>
				<Sidebar
					isLoading={status === 'loading'}
					userSession={session}
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
