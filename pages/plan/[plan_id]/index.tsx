import React from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'

function PlanOfStudyIndexPage() {
	const panelCount = ['Modules', 'Communities', 'Grades', 'Account']
	const { data: session } = useSession()
	return (
		<section className="flex flex-col stdcontainer">
			<div className="flex flex-col mb-5">
				<h1 className="mb-3">plan of study</h1>
				<h2 className="">
					Hi, <span className="uppercase">{session.user.name}</span>!
					Check out...
				</h2>
			</div>
			<div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-7">
				{panelCount.map((panel, index) => (
					<PlanOfStudyPanel
						key={index}
						title={panel}
						body={
							'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quasi, quo? A accusamus, debitis distinctio eos, est ipsam labore mollitia necessitatibus nemo odio odit perferendis quaerat quam quis repellendus sunt?'
						}
					/>
				))}
			</div>
		</section>
	)
}

const PlanOfStudyPanel = ({ title, body }) => {
	return (
		<div className="col-span-1 row-span-1 h-64 border border-wgray rounded-sm p-3">
			<h3>{title}</h3>
			<p>{body}</p>
		</div>
	)
}

PlanOfStudyIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default PlanOfStudyIndexPage
