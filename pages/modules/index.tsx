import React from 'react'

// import ModuleItem from '@/components/modules/ModuleListItem'
// import Layout from '@/components/Layout'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { Button } from '@/components/common/button/button'

import Link from 'next/link'
import { useSession } from 'next-auth/react'


import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'

import { getUserByOpenID } from '@/scripts/get_user_by_open_id'
import { ModuleItem } from '@/components/pages/modules/module/lessons/lesson/module_item/module_item'

const ModulesPage = () => {

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading' ? { query: getUserByOpenID(session.openId), token: session.idToken } : null,
		gqlFetcher
	)

	if (status === 'loading') return <p>Loading...</p>
	if (error) { 
		console.log(error)
		return <p>Error...</p>
	}
	
	if (!data || !data?.user) {
		return <div>Loading...</div>
	}

	return (
		<section className="gap-1 md:px-10 w-full flex flex-col md:flex-row">
			<div className="flex flex-col md:w-full w-3/4">
				<div className="flex items-center justify-between">
					<h1 className="text-7xl opacity-50 font-black text-gray-400">
						My Modules
					</h1>
					<Link href={`/modules/all`} passHref={true}>
						<Button>View All Modules</Button>
					</Link>
				</div>

				{
					data.user[0].plan.modules
						.filter((doc) => doc.role === 'STUDENT')
						.map((enrollment, index) => {
							return <ModuleItem key={index} data={enrollment.module} role={enrollment.role} />
						})
				}

			</div>
		</section>
	)
}

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModulesPage
