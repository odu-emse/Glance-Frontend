import { useRouter } from 'next/router'
import { Layout } from '@/components/common/pages/layouts/layout/layout'

import Link from 'next/link'

import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import gqlFetcher from '@/utils/gql_fetcher'

import { getModuleByID } from '@/scripts/get_module_by_id'
import { Button } from '@/components/common/button/button'

const Module = () => {
	const router = useRouter()
	const { moduleId } = router.query

	const { data: session, status } = useSession()
	const { data, error } = useSWR(
		status !== 'loading'
			? { query: getModuleByID(moduleId), token: session.idToken }
			: null,
		gqlFetcher
	)

	if (status === 'loading') return <p>Loading...</p>
	if (error) {
		console.log(error)
		return <p>Error...</p>
	}

	if (!data || !data?.module) {
		return <div>Loading...</div>
	}

	const _module = data.module[0]
	console.log(_module)

	return (
		<div>
			<div className="mx-auto max-w-7xl py-4 px-4 w-3/4 sm:w-full xl:w-2/3">
				<DefaultModule module={_module} />
			</div>
		</div>
	)
}

const addModule = async (e) => {
	e.preventDefault()
}

const DefaultModule = ({ module }) => {
	const instructors = module.members?.filter(
		(member) => member.role === 'TEACHER'
	)
	return (
		<div className="flex xl:flex-row flex-col-reverse">
			<div className="xl:w-2/3 w-full sm:mb-4 sm:mr-0 lg:mb-0 lg:mr-5">
				<h1 className="text-3xl font-bold mb-2">{module.moduleName}</h1>
				<p className="mb-4">
					Instructed by{' '}
					{instructors.map((instructor) => {
						return (
							<span key={instructor.id}>
								<a
									className="underline"
									href={`/users/${instructor.id}`}
								>
									{instructor.plan.student.firstName}{' '}
									{instructor.plan.student.lastName}
								</a>
							</span>
						)
					})}
				</p>
				<p className="text-sm opacity-50">{module.intro}</p>
				<div className="border shadow-md rounded-sm py-3 px-4 bg-gray-50 border-gray-50">
					<h3 className="text-lg font-bold">Module objectives</h3>
					<ul className="list-disc">
						{/* {module.objectives.map((objective, objIndex) => { */}
						{/*	return ( */}
						{/*		<li className="ml-5" key={objIndex}> */}
						{/*			{objective} */}
						{/*		</li> */}
						{/*	); */}
						{/* })} */}
					</ul>
				</div>
				<div className="border shadow-md rounded-sm py-3 px-4 mt-3 bg-gray-50 border-gray-50">
					<h3 className="text-lg font-bold">Module description</h3>
					<p>{module.description}</p>
				</div>
				<div className="border shadow-md rounded-sm py-3 px-4 mt-3 bg-gray-50 border-gray-50">
					<h3 className="text-lg font-bold">Requirements</h3>
					<p>{module.description}</p>
				</div>
			</div>
			<div className="xl:w-1/3 w-full xl:border border-gray-50 px-3 py-4 rounded-sm xl:shadow-md">
				{/* TODO: we need to get content delivery working to get this fixed */}
				{/* <img
						src={`${content.href}/story_content/thumbnail.jpg`}
						alt={`${module.moduleName} module thumbnail`}
						className="w-full"
				/> */}
				<div className="module--housing--inclusion">
					<h5 className="mt-3 text-lg font-bold">
						This module includes:{' '}
					</h5>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <Youtube /> */}
						</div>
						{module.duration} hours on demand video
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <Book /> */}
						</div>
						{module.numSlides} interactive slides
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <Download /> */}
						</div>
						Downloadable resources
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <Smartphone /> */}
						</div>
						Available on mobile devices
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <Repeat /> */}
						</div>
						Lifetime access
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* <LifeBuoy /> */}
						</div>
						On-demand helping professionals
					</span>
					<span className="flex mt-3 font-light items-center">
						<div className="text-gray-400 mr-3">
							{/* } <Award /> */}
						</div>
						Certificate of completion
					</span>
				</div>
				<div className="d-flex flex-column my-3">
					<Link
						href={`/modules/${module.id}/collections/AAA/lessons/BBB`}
					>
						<Button>Open Module</Button>
					</Link>
					<button
						className="border-2 border-blue-300 rounded py-2 px-4 w-full mt-3"
						onClick={addModule}
					>
						Favorite
					</button>
				</div>
			</div>
		</div>
	)
}

Module.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default Module
