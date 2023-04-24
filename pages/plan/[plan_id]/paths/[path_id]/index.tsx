/* eslint-disable camelcase */
import React, { useContext } from 'react'
import { Layout } from '@/common/pages/layouts/layout/layout'
import { useRouter } from 'next/router'
import gql_fetcher from '@/utils/gql_fetcher'
import useSWR from 'swr'
import getLPbyPlanID from '@/scripts/get_lp_by_plan_id'
import RequestFailed from '@/pages/errors/request_failed/request_failed'
import Loader from '@/components/util/loader'
import {
	CollectionPath,
	LearningPath,
	Module,
	Path,
	SectionPath,
} from '@/types/index'
import GlobalUserContext from '@/contexts/global_user_context'
import { Button } from '@/common/button/button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Link from 'next/link'

function PathIndexPage() {
	const router = useRouter()
	const { user: account } = useContext(GlobalUserContext)
	const [collapseSection, setCollapseSection] = React.useState(0)
	const sectionRef = React.useRef(null)
	const { path_id } = router.query
	const { data, error } = useSWR(
		getLPbyPlanID(account.plan.id, path_id as string),
		gql_fetcher
	) as {
		data: { learningPath: Array<LearningPath> }
		error: Error
	}

	if (error)
		return (
			<RequestFailed
				title={'An error occurred'}
				subtitle={'While retrieving your Learning Paths'}
			/>
		)

	if (!data)
		return (
			<div className="flex justify-center items-center stdcontainer h-screen">
				<Loader textColor="royalblue" />
			</div>
		)

	const LP = data.learningPath[0].paths[0]

	return (
		<section className="stdcontainer">
			<div className="flex gap-4 items-center justify-start my-4">
				<Button onClick={() => router.back()}>Back</Button>
				<h1>Path to {LP.course.name}</h1>
			</div>
			<div className="flex gap-1 items-start">
				<div className="flex-none w-2/3">
					<ul className="list-none m-0">
						{LP.course.sections.map((section, index) => (
							<SectionCard
								section={section}
								key={index}
								collapseIndex={collapseSection}
								sectionIndex={index}
								handleCollapse={setCollapseSection}
								sectionPointer={sectionRef}
							/>
						))}
					</ul>
				</div>
				<LPSidebar LP={LP} />
			</div>
		</section>
	)
}

const SectionCard = ({
	section,
	sectionIndex,
	collapseIndex,
	handleCollapse,
	sectionPointer,
}: {
	section: SectionPath
	sectionIndex: number
	collapseIndex: number
	handleCollapse: React.Dispatch<React.SetStateAction<number | null>>
	sectionPointer: React.MutableRefObject<HTMLDivElement>
}) => {
	return (
		<li key={sectionIndex}>
			<div
				className="flex gap-1 items-center justify-start mb-2.5 cursor-pointer"
				onClick={() =>
					handleCollapse(
						collapseIndex === sectionIndex ? null : sectionIndex
					)
				}
				ref={sectionPointer}
			>
				{collapseIndex !== sectionIndex ? <FaPlus /> : <FaMinus />}
				<h3 className="cursor-pointer mb-0">{section.name}</h3>
			</div>
			{collapseIndex === sectionIndex && (
				<ul className="list-none">
					{section.collections.map((collection, index) => {
						return (
							<CollectionCard
								collection={collection}
								key={index}
							/>
						)
					})}
				</ul>
			)}
		</li>
	)
}

const CollectionCard = ({ collection }: { collection: CollectionPath }) => {
	return (
		<li>
			<h4>{collection.name}</h4>
			<ul className="list-none divide-y">
				{collection.modules.map((module, index) => (
					<ModuleCard key={index} module={module} />
				))}
			</ul>
		</li>
	)
}

const ModuleCard = ({ module }: { module: Module }) => {
	return (
		<li>
			<div className="flex gap-2 items-center justify-start">
				<Link href={`/modules/${module.id}`}>
					<a>{`${module.moduleName} - ${module.moduleNumber}`}</a>
				</Link>
			</div>
			<p className="sans mt-0">{module.intro}</p>
			<h5 className="sans">Description</h5>
			<p className="sans mt-0">{module.description}</p>
			<h5 className="sans">Objectives</h5>
			<ul className="mt-0">
				{module.objectives.map((item, index) => (
					<li className="sans" key={index}>
						{item}
					</li>
				))}
			</ul>
			<ModuleTagList
				title={'Topics covered'}
				listData={module.keywords}
				elementName={null}
				elementLink={null}
			/>
			<ModuleTagList
				title={'Recommended to complete first'}
				listData={module.parentModules}
				elementName={'moduleName'}
				elementLink={'id'}
			/>
			<ModuleTagList
				title={'Possible next steps...'}
				listData={module.subModules}
				elementName={'moduleName'}
				elementLink={'id'}
			/>
		</li>
	)
}

const ModuleTagList = ({
	title,
	listData,
	elementName,
	elementLink,
}: {
	title: string
	listData: Array<Module | string>
	elementName: string
	elementLink: string
}) => {
	if (listData.length === 0) return null
	return (
		<div className="my-3">
			<h5 className="sans">{title}</h5>
			<div className="flex gap-1">
				{listData.map((item, index) => {
					if (typeof item === 'string') {
						return (
							<span
								className="flex gap-2 bg-wgray rounded px-2 py-1 sans text-sm w-fit"
								key={index}
							>
								<h6>{item}</h6>
							</span>
						)
					}
					return (
						<Link
							href={`/modules/${item[elementLink]}`}
							key={index}
						>
							<a className="flex gap-2 bg-wgray rounded border-2 border-wgray px-2 py-1 sans text-sm w-fit no-underline cursor-pointer hover:bg-white hover:border-wgray transition-all">
								<h6 className="hover:text-royalblue">
									{item[elementName]}
								</h6>
							</a>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

const LPSidebar = ({ LP }: { LP: Path }) => {
	return (
		<aside className="flex-1 w-1/3 flex flex-col gap-3 border border-r-0 border-gray-300 relative h-screen overflow-y-scroll bg-white transition-all p-3">
			<Button className="w-fit mx-auto">Edit Learning Path</Button>
			<div className="flex gap-1 items-center">
				<h4>Hours satisfied:</h4>
				<time
					className={`${
						LP.hoursSatisfies < LP.course.carnegieHours
							? 'text-red-500'
							: 'text-royalblue'
					}`}
				>
					{LP.hoursSatisfies}
				</time>
			</div>
			<div className="flex gap-1 items-center">
				<h4>Status:</h4>
				<span className="text-sm py-1 rounded-md bg-wgray sans font-semibold px-2 inline-block w-fit">
					{LP.status}
				</span>
			</div>
			<div className="">
				<h3>Learning outcomes</h3>
				<ul className="mt-0">
					{LP.learningOutcomes.map((lo, index) => {
						return (
							<li key={index} className="sans">
								{lo}
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	)
}

PathIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default PathIndexPage
