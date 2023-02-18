/**
 * This page displays all modules
 */

// FIXME: Move me to components?

/*





This page is not working...
It displays all the users modules but not ALL modules like it should.
FIXME: I need to be fixed but im not important enough because Im not part of module flow...








*/

import useSWR from 'swr'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { getUserByOpenID } from '@/scripts/get_user_by_open_id'

import gqlFetcher from '@/utils/gql_fetcher'

import { Button } from '@/components/common/button/button'
import { ModuleCard } from '@/components/common/module_card/module_card'

const AllModules = () => {
	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading'
			? { query: getUserByOpenID(session.openId), token: session.idToken }
			: null,
		gqlFetcher
	)

	if (status === 'loading') return <p>Loading...</p>
	if (error) {
		console.log(error)
		return <p>Error...</p>
	}

	console.log(data)

	if (!data || !data?.user) {
		return <div>Loading...</div>
	}

	return (
		<div className="p-5">
			<Link href="/modules" passHref>
				<Button>Back to enrolled modules</Button>
			</Link>
			<hr className="mt-4 mb-4" />
			<h1 className="text-4xl mb-2 font-bold">All Available Modules</h1>
			<p className="text-gray-600 text-light mb-4">
				A list of all the modules currently available
			</p>
			<div className="grid gap-3">
				{data.user[0].plan.modules.map((enrollment, index) => {
					// return <ModuleItem role={enrollment.role} key={enrollment.module.id} data={enrollment.module} />;
					console.log(enrollment.module)
					return (
						<ModuleCard
							moduleName={enrollment.module.moduleName}
							parentCourse={''}
							moduleNumber={enrollment.module.moduleNumber}
							percentageCompleted={0}
							currentTopic={''}
							primaryLink={''}
							primaryLinkLabel={'OOOOOO'}
							secondaryLink={''}
							secondaryLinkLabel={'AAAAAAA'}
							completion={false}
							key={index}
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
