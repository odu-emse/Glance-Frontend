import React, { useContext } from 'react'

// import ModuleItem from '@/components/modules/ModuleListItem'
// import Layout from '@/components/Layout'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { ModuleItem } from '@/components/pages/modules/module/lessons/lesson/module_item/module_item'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { getListOfModulesForLearningPath } from '@/scripts/get_lp_by_plan_id'
import GlobalUserContext from '@/contexts/global_user_context'
import { Module } from '@/types/graphql'

const ModulesPage = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	setLoading(true)

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading'
			? {
					query: getListOfModulesForLearningPath,
					variables: {
						planID: user.plan.id,
					},
					token: session.idToken,
			  }
			: null,
		gqlFetcher
	) as {
		data: {
			modulesFromLearningPath: Array<Module>
		}
		error: Error
	}

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

	if (!data) return

	setLoading(false)

	return (
		<section className="stdcontainer">
			<header>
				<h1>Modules</h1>
			</header>
			<div>
				{data.modulesFromLearningPath.map((enrollment, index) => {
					return (
						<div className="mb-4" key={index}>
							<ModuleItem data={enrollment} role={'STUDENT'} />
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
