//import "styles/pages/index.css"
import { Button } from '@/components/common/button/button'
import Head from 'next/head'

// background: rgb(32,68,152);
// background: linear-gradient(0deg, rgba(32,68,152,1) 0%, rgba(32,68,152,0.7) 100%);

const Index = () => {
	return (
		<>
			<Head>
				<title>ALMP</title>
			</Head>
			<div
			id="landing-box"
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgba(32,68,152,1) 0%, rgba(32,68,152,0.7) 100%), url('/images/student-gettin-outta-here.jpg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			>
				<a className="w-32" href="/login">
					<button
						type="button"
						className=" absolute top-8 right-20 h-11 w-24 inline-block rounded-md bg-white text-base font-semibold text-royalblue-300 uppercase drop-shadow-lg leading-normal hover:bg-gray-200">
						Login
					</button>
				</a>
				
			<div
				className="w-screen h-screen flex items-center justify-center flex-col"
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
			</div>
			</div>
		</>
	)
}

export default Index
