/**
 * This page displays all modules
 */
import useSWR from 'swr'
import ModuleItem from '@/components/modules/ModuleItem'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { getUserByOpenID } from '@/scripts/get_user_by_open_id'
import gqlFetcher from '@/utils/gql_fetcher'
import useAuth from '@/hooks/use_auth'
import { ModuleCard, Button } from 'emse-ui'

const AllModules = () => {
	const { jwt: token, user } = useAuth()
	const { data, error } = useSWR(
		{
			query: getUserByOpenID(user?.sub),
			token,
		},
		gqlFetcher
	)

	if (error) return <p>Failed to load content...</p>
	if (!data || !data?.user) return <p>Loading...</p>

	console.log(data)

	return (
		<div className="p-5">
			<Link href="/modules" passHref>
				<Button label="Back to enrolled modules" />
			</Link>
			<hr className="mt-4 mb-4" />
			<h1 className="text-4xl mb-2 font-bold">All Available Modules</h1>
			<p className="text-gray-600 text-light mb-4">
				A list of all the modules currently available
			</p>
			<div className="grid gap-3">
				{data.user.plan.modules.map((enrollment) => {
					// return <ModuleItem role={enrollment.role} key={enrollment.module.id} data={enrollment.module} />;
					console.log(enrollment.module)
					return (
						<ModuleCard
							module={enrollment.module}
							completion={false}
						/>
					)
				})}
			</div>
		</div>
	)
}

AllModules.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default AllModules
