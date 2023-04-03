//import "styles/pages/index.css"
import { Button } from '@/components/common/button/button'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Logo } from '@/components/common/svg/logo'

// background: rgb(32,68,152);
// background: linear-gradient(0deg, rgba(32,68,152,1) 0%, rgba(32,68,152,0.7) 100%);

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

				<Link href={'/login'} passHref>
					<Button variant="white" className="m-5">
						<p className="m-0 text-sm">LOGIN</p>
					</Button>
				</Link>

				<span className="sans font-bold absolute bottom-1 left-3 gap-4 sans text-white text-sm">
					<small className="m-0 p-0">API Version 0.3.5</small>
					<span className="mx-1">&bull;</span>
					<small className="m-0 p-0">FE Version 0.3.0</small>
				</span>
			</div>
		</>
	)
}

export default Index
