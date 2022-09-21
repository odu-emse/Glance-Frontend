import { AiOutlinePartition } from 'react-icons/ai';
import { BiTask } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import Link from 'next/link';
import { RiShutDownLine } from 'react-icons/ri';
//import { checkForToken, decoder, loader } from './helpers'
import { GoPerson, GoSignIn } from 'react-icons/go';

import {
	MdLiveHelp,
	MdOutlineExplore,
	MdSpaceDashboard,
	MdWidgets,
} from 'react-icons/md';
import { useState } from 'react';

export default function Sidebar() {
	const [open, setOpen] = useState(false);
	//const [loading, setLoading] = useState(false)
	const [dropdown, setDropdown] = useState(false);
	const [authenticated, setAuthenticated] = useState(true);

	/*async function auth() {
		try {
			const res = await checkForToken()
			res ? setAuthenticated(true) : setAuthenticated(false)
			setLoading(false)
		} catch (err) {
			throw new Error(err)
		}
	}

	useEffect(() => {
		auth()
	}, [])

	if (loading) {
		return loader()
	}*/

	return (
		<aside
			className={`relative bg-gray-300 transition-all ${
				open ? 'w-3/12' : 'w-1/12'
			}`}
		>
			<div
				className={`sticky z-50 flex flex-col bg-gray-800 top-0 left-0 right-0 h-screen`}
			>
				<button
					className="inline-flex items-center justify-center py-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white w-full"
					aria-expanded="false"
					onClick={() => setOpen(!open)}
				>
					<span className="sr-only">Open side menu</span>
					<svg
						className="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						className="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="logo w-full flex items-center justify-center py-5">
					<img
						className="block max-h-16 w-auto h-auto"
						src={`${
							open
								? 'https://www.odu.edu/content/dam/odu/logos/univ/png-72dpi/odu-sig-noidea-fullcolor.png'
								: 'https://www.odu.edu/content/dam/odu/logos/univ/png-72dpi/crown-r-2-color.png'
						}`}
						alt="Workflow"
						loading="lazy"
					/>
				</div>

				<div
					className={`menu relative h-full flex flex-col justify-between`}
					/*className={`menu relative h-full flex flex-col ${
						authenticated ? 'justify-between' : 'justify-end'
					}`}*/
				>
					{!authenticated === true ? (
						<>
							<Link href="/users/login">
								<a
									className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
										!open && 'flex items-center justify-center'
									}`}
									activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
								>
									{open ? 'Login' : <GoSignIn size={30} />}
								</a>
							</Link>
							<Link href="/users/register">
								<a
									className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
										!open && 'flex items-center justify-center'
									}`}
									activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
								>
									{open ? 'Register' : <GoPerson size={30} />}
								</a>
							</Link>
						</>
					) : (
						<>
							<div className="flex flex-col">
								<Link href="/portal">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? 'Portal' : <MdWidgets size={30} title="Portal" />}
									</a>
								</Link>
								<Link href="/dashboard">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Dashboard'
										) : (
											<MdSpaceDashboard size={30} title="Dashboard" />
										)}
									</a>
								</Link>
								<Link href="/program">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'My Program'
										) : (
											<BsStack size={30} title="My Program" />
										)}
									</a>
								</Link>
								<Link href="/assignments">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Assignments'
										) : (
											<BiTask size={30} title="Assignments" />
										)}
									</a>
								</Link>
								<Link href="/community">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Community'
										) : (
											<MdOutlineExplore size={30} title="Community" />
										)}
									</a>
								</Link>
								<Link href="/support">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Your support'
										) : (
											<MdLiveHelp size={30} title="Your support" />
										)}
									</a>
								</Link>
							</div>

							<div className="flex flex-col w-full">
								<button
									className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
										!open ? 'flex items-center justify-center' : 'text-left'
									}`}
									id="user-menu"
									aria-haspopup="true"
									onClick={() => setDropdown(!dropdown)}
								>
									<span className="sr-only">Open user menu</span>
									{open ? (
										'Account'
									) : (
										<img
											className="md:h-8 md:w-8 h-auto w-auto rounded-full"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt="user account avatar"
											loading="lazy"
										/>
									)}
								</button>
								<div
									className={`${
										dropdown === true ? 'block' : 'hidden'
									} absolute left-full mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
									onMouseOut={() => setDropdown(!dropdown)}
									onMouseLeave={() => setDropdown(!dropdown)}
								>
									<Link
										//to={`/users/${decoder()}`}
										href={`/users`}
									>
										<a
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
											role="menuitem"
										>
											Your Profile
										</a>
									</Link>
									<Link href="/users/logout">
										<a
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
											role="menuitem"
										>
											Sign out
										</a>
									</Link>
								</div>
								<Link href="/sitemap">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Sitemap'
										) : (
											<AiOutlinePartition size={30} title="Sitemap" />
										)}
									</a>
								</Link>
								<Link href="/users/logout">
									<a
										className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest ${
											!open ? 'flex items-center justify-center' : ''
										}`}
										activeClassName="bg-gray-900 text-white px-3 py-4 text-sm font-medium border-l-4"
									>
										{open ? (
											'Logout'
										) : (
											<RiShutDownLine size={30} title="Logout" />
										)}
									</a>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</aside>
	);
}
