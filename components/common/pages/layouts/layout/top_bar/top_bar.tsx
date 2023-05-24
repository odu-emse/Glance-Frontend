import { Logo } from '@/components/common/svg/logo'
import { signOut } from 'next-auth/react'
import router from 'next/router'

export const TopBar = ({ setAccountVisible, isAccountVisible, session }) => {
	return (
		<nav className="flex bg-royalblue stdcontainer-sharp justify-between h-16">
			<div
				className="flex items-center gap-1 cursor-default"
				onClick={() => router.push('/modules')}
			>
				<Logo width={25} height={25} />
				<h4
					style={{
						fontWeight: 700,
						fontSize: '24px',
					}}
					className="text-white cursor-pointer"
				>
					GLANCE
				</h4>
			</div>
			<div
				className={'relative flex gap-2 items-center cursor-pointer'}
				onClick={() => setAccountVisible(true)}
			>
				<p
					className={'sans capitalize'}
					style={{
						fontSize: '12px',
					}}
				>
					<span className={'text-gray-100'}>Hello, </span>
					<span className={'font-bold text-white'}>
						{session.user.name}
					</span>
				</p>
				<img
					src={session.user.image}
					alt={'profile image'}
					className="rounded-full w-8 h-8 border"
					referrerPolicy="no-referrer"
				/>
				<div
					className={`${
						isAccountVisible ? 'flex' : 'hidden'
					} right-0.5 top-12 absolute border z-50 border-black bg-white items-end justify-end flex-col w-56 float-right mr-5`}
				>
					<figcaption
						onClick={() => router.push(`/users/${session.openId}`)}
						className={
							'text-sm text-royalblue pt-1 pb-1 pr-2 w-full text-right hover:bg-gray-200'
						}
					>
						View Profile{' '}
					</figcaption>
					<figcaption
						onClick={() =>
							router.push(`/users/${session.openId}/settings`)
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
	)
}
