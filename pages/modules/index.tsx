import React from 'react'

//import ModuleItem from '@/components/modules/ModuleListItem'
//import Layout from '@/components/Layout'

import { Layout } from '@/components/common/pages/layouts/layout/layout'
import { Button } from '@/components/common/button/button'

import Link from 'next/link'

import useAuth from '@/hooks/use_auth'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'

import { getUserByOpenID } from '@/scripts/get_user_by_open_id'

const ModulesPage = () => {
	const { jwt: token, user } = useAuth()

	const { data, error } = useSWR(
		{
			query: getUserByOpenID(user?.sub),
			token,
		},
		gqlFetcher
	)
	console.log(data)

	if (error) {
		console.log(error)
		throw new Error(error)
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
					data.user.plan.modules
						.filter((doc) => doc.role === 'STUDENT')
						.map((enrollment) => {
							return (
								<ModuleItem
									key={enrollment.module.id}
									module={enrollment.module}
								/>
							)
						})

					// console.log(data)
				}
			</div>
		</section>
	)
}

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModulesPage
