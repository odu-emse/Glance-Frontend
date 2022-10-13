import React, { useContext } from 'react';
import ModuleItem from '@/components/modules/ModuleListItem';
import Layout from '@/components/Layout';
import useSWR from 'swr';
import gqlFetcher from '@/utils/gqlFetcher';
import { getUserByOpenID } from '@/scripts/getUserByOpenID';
import Link from 'next/link';
import AuthenticationContext from '@/contexts/AuthenticationContext';

const ModulesPage = () => {
	const { jwt: token, user } = useContext(AuthenticationContext);

	const { data, error } = useSWR(
		{
			query: getUserByOpenID(user?.sub),
			token,
		},
		gqlFetcher
	);

	if(error) {
		console.log(error);
		return <p>There was an unexpected error. Please try again.</p>
	}

	return !data ? (
		<div>Loading...</div>
	) : (
		<section className="gap-1 md:px-10 w-full flex flex-col md:flex-row">
			<div className="flex flex-col md:w-full w-3/4">
				<div className='flex items-center justify-between'>
				<h1 className="text-7xl opacity-50 font-black text-gray-400">
					My Modules
				</h1>
					<Link href={`/modules/all`} passHref={true}>
						<a className="rounded-full border font-semibold py-3 px-7">
						View All Modules
						</a>
					</Link>
				</div>
				{data.user.plan.modules.filter((doc) => doc.role === "STUDENT").map((enrollment) => {
					return <ModuleItem key={enrollment.module.id} module={enrollment.module} />;
				})}
			</div>
		</section>
	);
};

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default ModulesPage;
