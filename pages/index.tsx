//import "styles/pages/index.css"
import { Button } from '@/components/common/button/button'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Logo } from '@/components/common/svg/logo'
import { signIn } from 'next-auth/react'
import { DynamicVersion } from '@/components/common/version/dynamic_version'

const Index = () => {
	const { status } = useSession()
	const { push } = useRouter()

	console.log(status)
	if (status === 'authenticated') {
		// Redirect to modules page
		push('/modules')
	}

	return (
		<>
			<Head>
				<title>Glance</title>
			</Head>

			<div
				id="landing-box"
				className="w-screen h-screen flex items-center justify-center flex-col"
				style={{
					backgroundImage:
						"linear-gradient(0deg, rgba(32,68,152,1) 0%, rgba(32,68,152,0.7) 100%), url('/images/student-gettin-outta-here.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="flex items-center justify-center gap-2">
					<Logo width={70} height={70} />
					<h1
						style={{
							fontWeight: 700,
							fontSize: '52px',
						}}
						className="text-white mt-2"
					>
						GLANCE
					</h1>
				</div>

				<h5 className=" text-white sans text-sm leading-5 font-bold">
					Education At A Glance
				</h5>

				<Button variant="secondary" onClick={() => signIn()}>
					LOGIN
				</Button>

				<DynamicVersion backendVersion={'0.3.0'} isLight={true} />
			</div>
		</>
	)
}

export default Index
