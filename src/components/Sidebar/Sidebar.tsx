import * as React from 'react'
import { AiOutlinePartition } from 'react-icons/ai'
import { BiTask, BiUser } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { RiShutDownLine } from 'react-icons/ri'
import { GoPerson, GoSignIn } from 'react-icons/go'
import {
	MdLiveHelp,
	MdOutlineExplore,
	MdSpaceDashboard,
	MdWidgets,
} from 'react-icons/md'
import { Link, Anchor } from '../Link'
import { Logo, Hamburger } from './'

type SidebarProps = {
	/**
	 * @default false
	 */
	authenticated: boolean
}

export const Sidebar = ({ authenticated }: SidebarProps) => {
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

				<Logo extended={open} />

				<div
					className={`menu relative h-full flex flex-col ${
						authenticated ? 'justify-between' : 'justify-end'
					}`}
				>
					{!authenticated ? (
						<>
							<Link
								role="anchor"
								to="/users/login"
								icon={<GoSignIn size={30} />}
								label="Login"
								open={open}
							/>
							<Link
								role="anchor"
								to="/users/register"
								icon={<GoPerson size={30} />}
								label="Register"
								open={open}
							/>
						</>
					) : (
						<>
							<div className="flex flex-col">
								<Link
									role="anchor"
									to="/portal"
									icon={<MdWidgets size={30} />}
									label="Portal"
									open={open}
								/>
								<Link
									role="anchor"
									to="/dashboard"
									icon={<MdSpaceDashboard size={30} />}
									label="Dashboard"
									open={open}
								/>
								<Link
									role="anchor"
									to="/program"
									icon={<BsStack size={30} />}
									label="My Program"
									open={open}
								/>
								<Link
									role="anchor"
									to="/assignments"
									icon={<BiTask size={30} />}
									label="Assignments"
									open={open}
								/>
								<Link
									role="anchor"
									to="/community"
									icon={<MdOutlineExplore size={30} />}
									label="Community"
									open={open}
								/>
								<Link
									role="anchor"
									to="/support"
									icon={<MdLiveHelp size={30} />}
									label="Support"
									open={open}
								/>
							</div>

							<div className="flex flex-col w-full">
								<Anchor
									className=""
									role="tooltip-parent"
									id="user-menu"
									aria-haspopup="true"
									onClick={() => setDropdown(!dropdown)}
									path=""
									open={open}
									icon={<BiUser size={30} />}
								>
									<span className="sr-only">
										Open user menu
									</span>
									{open ? (
										'Account'
									) : (
										<img
											className="md:h-8 md:w-8 h-auto w-auto rounded-full hover:ring-2 hover:ring-slate-100 transition-all"
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											alt="user account avatar"
											loading="lazy"
										/>
									)}
								</Anchor>
								<div
									className={`${
										dropdown ? 'block' : 'hidden'
									} absolute left-full mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
									onMouseOut={() => setDropdown(!dropdown)}
									onMouseLeave={() => setDropdown(!dropdown)}
								>
									<Link
										to={`/users/`}
										label="Your Profile"
										role="menuitem"
									/>

									<Link
										to="/users/logout"
										label="Logout"
										role="menuitem"
									/>
								</div>
								<Link
									role="anchor"
									to="/sitemap"
									icon={<AiOutlinePartition size={30} />}
									label="Sitemap"
									open={open}
								/>
								<Link
									role="anchor"
									to="/logout"
									icon={<RiShutDownLine size={30} />}
									label="Logout"
									open={open}
								/>
							</div>
						</>
					)}
				</div>
			</nav>
		</aside>
	)
}
