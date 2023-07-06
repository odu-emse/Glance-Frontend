import React, { useContext } from 'react'
import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'
import { ModuleItem } from '@/components/pages/modules/module/lessons/lesson/module_item/module_item'
import GlobalLoadingContext from '@/contexts/global_loading_context'
import { getListOfModulesForLearningPath } from '@/scripts/get_lp_by_plan_id'
import GlobalUserContext from '@/contexts/global_user_context'
import { Module } from '@/types/graphql'
import ModuleSidebar from '@/common/module_sidebar/module_sidebar'
import Head from 'next/head'

const GradebookPage = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)

	setLoading(true)

	const { data: session, status } = useSession()

	setLoading(false)

	return (
		<div>
			<Head>
				<title>Grades | GLANCE</title>
			</Head>
			<section className="stdcontainer">
				<header>
					<h1>GRADEBOOK</h1>
				</header>
				<div className="flex gap-3">Hello</div>
			</section>
		</div>
	)
}

GradebookPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default GradebookPage
