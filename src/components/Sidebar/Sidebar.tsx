import * as React from 'react'
import { AiOutlinePartition } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { RiShutDownLine } from 'react-icons/ri'
import { GoPerson, GoSignIn } from 'react-icons/go'
import {
	MdLiveHelp,
	MdOutlineExplore,
	MdSpaceDashboard,
	MdWidgets,
} from 'react-icons/md'
import { Link } from '../Link'
import { Logo } from '../Logo/Logo'
import { Hamburger } from '../Hamburger/Hamburger'

type SidebarProps = {
	/**
	 * @default false
	 */
	open: boolean
	/**
	 * Set State function to toggle the navigation to the open and closed states
	 */
	setOpen: (open: boolean) => React.Dispatch<React.SetStateAction<boolean>>
	/**
	 * @default false
	 */
	dropdown: boolean
	/**
	 * Set State function to toggle the dropdown of the user's profile. Has no affect if the user is not authenticated.
	 */
	setDropdown: (
		dropdown: boolean
	) => React.Dispatch<React.SetStateAction<boolean>>
	/**
	 * @default false
	 */
	authenticated: boolean
	/**
	 * Set State function to set the authenticated state of the current user
	 */
	setAuthenticated: (
		authenticated: boolean
	) => React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = ({ authenticated, setAuthenticated }: SidebarProps) => {
	const [open, setOpen] = React.useState(false)
	const [dropdown, setDropdown] = React.useState(false)
	return (
		<aside
			className={`relative bg-gray-300 transition-all ${
				open ? 'w-3/12' : 'w-1/12'
			}`}
		>
			<nav
				className={`sticky z-50 flex flex-col bg-gray-800 top-0 left-0 right-0 h-screen`}
			>
				<Hamburger onClick={() => setOpen(!open)} />

				<Logo open={open} />

				<div
					className={`menu relative h-full flex flex-col ${
						authenticated ? 'justify-between' : 'justify-end'
					}`}
				>
					{!authenticated === true ? (
						<>
							<Link
								to="/users/login"
								className={
									!open && 'flex items-center justify-center'
								}
							>
								{open ? 'Login' : <GoSignIn size={30} />}
							</Link>
							<Link
								to="/users/register"
								className={
									!open && 'flex items-center justify-center'
								}
							>
								{open ? 'Register' : <GoPerson size={30} />}
							</Link>
						</>
					) : (
						<>
							<div className="flex flex-col">
								<Link
									to="/portal"
									active={true}
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Portal'
									) : (
										<MdWidgets size={30} title="Portal" />
									)}
								</Link>
								<Link
									to="/dashboard"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Dashboard'
									) : (
										<MdSpaceDashboard
											size={30}
											title="Dashboard"
										/>
									)}
								</Link>
								<Link
									to="/program"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'My Program'
									) : (
										<BsStack size={30} title="My Program" />
									)}
								</Link>
								<Link
									to="/assignments"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Assignments'
									) : (
										<BiTask size={30} title="Assignments" />
									)}
								</Link>
								<Link
									to="/community"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Community'
									) : (
										<MdOutlineExplore
											size={30}
											title="Community"
										/>
									)}
								</Link>
								<Link
									to="/support"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Your support'
									) : (
										<MdLiveHelp
											size={30}
											title="Your support"
										/>
									)}
								</Link>
							</div>

							<div className="flex flex-col w-full">
								<button
									className={` text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 text-sm font-medium uppercase tracking-widest list-none ${
										!open
											? 'flex items-center justify-center'
											: 'text-left'
									}`}
									id="user-menu"
									aria-haspopup="true"
									onClick={() => setDropdown(!dropdown)}
								>
									<span className="sr-only">
										Open user menu
									</span>
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
										to={`/users/`}
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Your Profile
									</Link>
									<Link
										to="/users/logout"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Sign out
									</Link>
								</div>
								<Link
									to="/sitemap"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Sitemap'
									) : (
										<AiOutlinePartition
											size={30}
											title="Sitemap"
										/>
									)}
								</Link>
								<Link
									to="/users/logout"
									className={
										!open
											? 'flex items-center justify-center'
											: ''
									}
								>
									{open ? (
										'Logout'
									) : (
										<RiShutDownLine
											size={30}
											title="Logout"
										/>
									)}
								</Link>
							</div>
						</>
					)}
				</div>
			</nav>
		</aside>
	)
}
