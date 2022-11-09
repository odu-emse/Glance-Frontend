import { Sidebar } from '../components/Sidebar'
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Anchor, Link } from '../components/Link'
import { GoPerson, GoSignIn } from 'react-icons/go'
import {
	MdLiveHelp,
	MdOutlineExplore,
	MdSpaceDashboard,
	MdWidgets,
} from 'react-icons/md'
import { BsStack } from 'react-icons/bs'
import { BiTask, BiUser } from 'react-icons/bi'
import { AiOutlinePartition } from 'react-icons/ai'
import { RiShutDownLine } from 'react-icons/ri'
import { SidebarProps } from '../components/Sidebar'

export default {
	title: 'Molecules/Sidebar',
	component: Sidebar,
	argTypes: {
		authenticated: {
			type: 'boolean',
			control: 'boolean',
			defaultValue: false,
		},
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args: SidebarProps) => {
	const [open, setOpen] = React.useState(false)
	return (
		<Sidebar
			handleOpen={() => setOpen(!open)}
			open={open}
			authenticated={args.authenticated}
			authChildren={
				<>
					<Link
						role={'anchor'}
						to={'/users/login'}
						icon={<GoSignIn size={30} />}
						label={'Login'}
						extended={open}
					/>
					<Link
						role="anchor"
						to="/users/register"
						icon={<GoPerson size={30} />}
						label="Register"
						extended={open}
					/>
				</>
			}
		>
			{undefined}
		</Sidebar>
	)
}

const AuthenticatedTemplate: ComponentStory<typeof Sidebar> = (
	args: SidebarProps
) => {
	const [open, setOpen] = React.useState(false)
	const [dropdown, setDropdown] = React.useState(false)
	return (
		<Sidebar
			handleOpen={() => setOpen(!open)}
			open={open}
			authenticated={args.authenticated}
			authChildren={args.authChildren}
		>
			<div className="flex flex-col">
				<Link
					role="anchor"
					to="/portal"
					icon={<MdWidgets size={30} />}
					label="Portal"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/dashboard"
					icon={<MdSpaceDashboard size={30} />}
					label="Dashboard"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/program"
					icon={<BsStack size={30} />}
					label="My Program"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/assignments"
					icon={<BiTask size={30} />}
					label="Assignments"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/community"
					icon={<MdOutlineExplore size={30} />}
					label="Community"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/support"
					icon={<MdLiveHelp size={30} />}
					label="Support"
					extended={open}
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
					<span className="sr-only">Open user menu</span>
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
					<Link to={`/users/`} label="Your Profile" role="menuitem" />
					<Link to="/users/logout" label="Logout" role="menuitem" />
				</div>
				<Link
					role="anchor"
					to="/sitemap"
					icon={<AiOutlinePartition size={30} />}
					label="Sitemap"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/logout"
					icon={<RiShutDownLine size={30} />}
					label="Logout"
					extended={open}
				/>
			</div>
		</Sidebar>
	)
}

const DropdownTemplate: ComponentStory<typeof Sidebar> = (
	args: SidebarProps
) => {
	const [open, setOpen] = React.useState(false)
	const [dropdown, setDropdown] = React.useState(true)
	return (
		<Sidebar
			handleOpen={() => setOpen(!open)}
			open={open}
			authenticated={args.authenticated}
			authChildren={args.authChildren}
		>
			<div className="flex flex-col">
				<Link
					role="anchor"
					to="/portal"
					icon={<MdWidgets size={30} />}
					label="Portal"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/dashboard"
					icon={<MdSpaceDashboard size={30} />}
					label="Dashboard"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/program"
					icon={<BsStack size={30} />}
					label="My Program"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/assignments"
					icon={<BiTask size={30} />}
					label="Assignments"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/community"
					icon={<MdOutlineExplore size={30} />}
					label="Community"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/support"
					icon={<MdLiveHelp size={30} />}
					label="Support"
					extended={open}
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
					<span className="sr-only">Open user menu</span>
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
					<Link to={`/users/`} label="Your Profile" role="menuitem" />
					<Link to="/users/logout" label="Logout" role="menuitem" />
				</div>
				<Link
					role="anchor"
					to="/sitemap"
					icon={<AiOutlinePartition size={30} />}
					label="Sitemap"
					extended={open}
				/>
				<Link
					role="anchor"
					to="/logout"
					icon={<RiShutDownLine size={30} />}
					label="Logout"
					extended={open}
				/>
			</div>
		</Sidebar>
	)
}

export const Primary = Template.bind({})
Primary.storyName = 'Logged out Sidebar'
Primary.args = {
	authenticated: false,
}
export const Secondary = AuthenticatedTemplate.bind({})
Secondary.storyName = 'Authenticated Sidebar'
Secondary.args = {
	authenticated: true,
}

export const Tertiary = DropdownTemplate.bind({})
Tertiary.storyName = 'Authenticated Sidebar with Dropdown'
Tertiary.args = {
	authenticated: true,
}
