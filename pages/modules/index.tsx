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
import ModuleSidebar from '@/common/module_sidebar/module_sidebar';

const ModulesPage = () => {
	const { setLoading } = useContext(GlobalLoadingContext)
	const { user } = useContext(GlobalUserContext)
	const [expanded, setExpanded] = React.useState<boolean>(false)
	setLoading(true)

	const [selection, setSelection] = React.useState<string>(null)

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
			<div className="flex gap-3">
				<div className={`${expanded ? "w-2/3" : "w-full"} flex-none transition-all`}>
				{data.modulesFromLearningPath.map((enrollment, index) => {
					return (
						<div className="mb-4" key={index} onClick={() => setSelection(enrollment.id)}>
							<ModuleItem data={enrollment} role={'STUDENT'} expanded={expanded} handleExpansion={setExpanded} selected={enrollment.id === selection && expanded} />
						</div>
					)
				})}
				</div>
				{expanded && (
					<ModuleSidebar data={
						data.modulesFromLearningPath.find((enrollment) => enrollment.id === selection)
					} handleExpansion={setExpanded} />
				)}
			</div>
		</section>
	)
}

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModulesPage
