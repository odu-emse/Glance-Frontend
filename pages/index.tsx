//import "styles/pages/index.css"
import { Button } from '@/components/common/button/button'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Anchor } from '@/components/common/links/anchor/anchor'

// background: rgb(32,68,152);
// background: linear-gradient(0deg, rgba(32,68,152,1) 0%, rgba(32,68,152,0.7) 100%);

const Index = () => {
	const { data: session, status } = useSession()
	const [isLoading, setLoading] = useState(true)

	return (
		<>
			<Head>
				<title>ALMP</title>
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
				<h1
					style={{
						color: '#FFFFFF',
						fontWeight: 700,
						fontSize: '4em',
					}}
					className="select-none"
				>
					ALMP
				</h1>
				<span
					className="flex items-center gap-4 sans"
					style={{
						color: '#FFFFFF',
					}}
				>
					<small className="m-0 p-0">API Version 0.3.5</small>
					<span>&bull;</span>
					<small className="m-0 p-0">FE Version 0.3.0</small>
				</span>

				<Anchor className="w-32 no-underline"
				onClick={() => setLoading((status === "authenticated"))}
				path = {isLoading ? "/modules" : "/"}>
					<Button
					variant="white"
					>
					<p className="m-0">LOGIN</p>
					</Button>
				</Anchor>
			</div>
		</>
		
	)
}

export default Index


