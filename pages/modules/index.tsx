import React, { useContext } from 'react'

// import ModuleItem from '@/components/modules/ModuleListItem'
// import Layout from '@/components/Layout'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'

import { getUserByOpenID } from '@/scripts/get_user_by_open_id'
import { ModuleItem } from '@/components/pages/modules/module/lessons/lesson/module_item/module_item'
import GlobalLoadingContext from '@/contexts/global_loading_context'

const ModulesPage = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	setLoading(true)

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading'
			? { query: getUserByOpenID(session.openId), token: session.idToken }
			: null,
		gqlFetcher
	)

	if (status === 'loading') return
	if (error) {
		console.log(error)
		setLoading(false)
		return (
			<p>
				There was an issue loading this page... Please check your
				internet connection and try again.
			</p>
		)
	}

	if (!data || !data?.user) return

	setLoading(false)

	return (
		<section className="stdcontainer">
			<header>
				<h1>Modules</h1>
			</header>
			<div>
				{data.user[0].plan.modules.map((enrollment, index) => {
					return (
						<div className="mb-4" key={index}>
							<ModuleItem
								data={enrollment.module}
								role={enrollment.role}
							/>
						</div>
					)
				})}
			</div>
		</section>
	)
}

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModulesPage
