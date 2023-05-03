import React from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { Button } from '@/common/button/button'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SettingsPage = (props) => {
	const router = useRouter()
	const { user } = router.query
	return (
		<div className="m-11">
			<Head>
				<title>Settings | GLANCE</title>
			</Head>
			<h1>Settings</h1>
			<Button className="mt-5" onClick={() => history.back()}>
				Back
			</Button>
			<section>
				<div className="my-2">
					<h2 className="mb-1 uppercase" id="plan">
						Plan of Study
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
				<div className="my-2">
					<h2 className="my-1 uppercase" id="watched">
						Watched Threads
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
				<div className="my-2">
					<h2 className="my-1 uppercase" id="feedback">
						Feedbacks
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
				<div className="my-2">
					<h2 className="my-1 uppercase" id="connection">
						Connections
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
				<div className="my-2">
					<h2 className="my-1 uppercase" id="privacy">
						Privacy
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
				<div className="my-2">
					<h2 className="my-1 uppercase" id="notification">
						Notification
					</h2>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Error est inventore ipsam magnam minus mollitia
						omnis quibusdam ratione voluptas voluptate. Ab
						consectetur dolorem doloremque iste nisi sint?
						Consectetur, et, facere.
					</div>
				</div>
			</section>
		</div>
	)
}

SettingsPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}
export default SettingsPage
