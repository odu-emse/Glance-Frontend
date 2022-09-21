import React from 'react';
import { useState, useMemo } from 'react';
import ModuleItem from '@/components/modules/ModuleListItem';
import Layout from '@/components/Layout';

const ModulesPage = () => {
	const [loading, setLoading] = useState(true);
	const [modules, setModules] = useState({});

	const getModuleData = async () => {
		const res = await fetch('/api/users/1/modules/enrolled');
		const data = await res.json();
		return data;
	};

	useMemo(async () => {
		const data = await getModuleData();
		setModules(data);
		setLoading(false);
	}, []);

	return loading ? (
		<h1>Loading...</h1>
	) : (
		<section className="gap-1 md:px-10 w-full flex flex-col md:flex-row">
			<div className="flex flex-col md:w-full w-3/4">
				<h1 className="text-7xl opacity-50 font-black text-gray-400">
					My Modules
				</h1>
				{modules.map((module) => {
					return <ModuleItem key={module.id} module={module} />;
				})}
			</div>
		</section>
	);
};

ModulesPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default ModulesPage;
