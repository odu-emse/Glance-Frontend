/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Layout } from '@/common/pages/layouts/layout/layout';
import { useRouter } from 'next/router';
import gql_fetcher from '@/utils/gql_fetcher';
import useSWR from 'swr';
import getLPbyPlanID from '@/scripts/get_lp_by_plan_id';
import RequestFailed from '@/pages/errors/request_failed/request_failed';
import Loader from '@/components/util/loader';
import { CollectionPath, LearningPath, Module, Path, SectionPath } from '@/types/index';
import GlobalUserContext from '@/contexts/global_user_context';
import { Button } from '@/common/button/button';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Link from 'next/link';

function PathIndexPage() {
	const router = useRouter();
	const { user: account } = useContext(GlobalUserContext);
	const [collapseSection, setCollapseSection] = React.useState(0);
	const sectionRef = React.useRef(null);
	const { path_id } = router.query;
	const { data, error } = useSWR(
		getLPbyPlanID(account.plan.id, path_id as string),
		gql_fetcher,
	) as {
		data: { learningPath: Array<LearningPath> }
		error: Error
	};

	if (error)
		return (
			<RequestFailed
				title={'An error occurred'}
				subtitle={'While retrieving your Learning Paths'}
			/>
		);

	if (!data)
		return (
			<div className='flex justify-center items-center stdcontainer h-screen'>
				<Loader textColor='royalblue' />
			</div>
		);

	const LP = data.learningPath[0].paths[0];

	return (
		<section className="stdcontainer">
			<div className="flex gap-4 items-center justify-start my-4">
				<Button onClick={() => router.back()}>Back</Button>
				<h1>Path to {LP.course.name}</h1>
			</div>
			<div className="flex gap-1 items-start">
				<div className="flex-none w-2/3">
					<ul className="list-none m-0">
						{LP.course.sections.map((section, index) => {
							return (
								<li key={index}>
									<div
										className="flex gap-1 items-center justify-start mb-2.5 cursor-pointer"
										onClick={() =>
											setCollapseSection(
												collapseSection === index
													? null
													: index
											)
										}
										ref={sectionRef}
									>
										{collapseSection !== index ? (
											<FaPlus />
										) : (
											<FaMinus />
										)}
										<h3 className="cursor-pointer mb-0">
											{section.name}
										</h3>
									</div>
									{collapseSection === index && (
										<ul className="list-none">
											{section.collections.map(
												(collection, index) => {
													return (
														<li key={index}>
															<h4>
																{
																	collection.name
																}
															</h4>
															<ul className="list-none divide-y">
																{collection.modules.map(
																	(
																		module,
																		index
																	) => {
																		return (
																			<li
																				key={
																					index
																				}
																			>
																				<div className="flex gap-2 items-center justify-start">
																					<h5>
																						{
																							module.moduleName
																						}
																					</h5>
																					<h6>
																						{
																							module.moduleNumber
																						}
																					</h6>
																				</div>
																				<p className="sans">
																					{
																						module.description
																					}
																				</p>
																				<div className="my-3">
																					{module
																						.parentModules
																						.length >
																						0 && (
																						<>
																							<h5 className="sans">
																								Recommended
																								to
																								complete
																								first
																							</h5>
																							<div className="flex gap-1">
																								{module.parentModules.map(
																									(
																										parentModule,
																										index
																									) => {
																										return (
																											<div
																												className="flex gap-2 bg-wgray rounded px-2 py-1 sans text-sm"
																												key={
																													index
																												}
																											>
																												<h5>
																													{
																														parentModule.moduleName
																													}
																												</h5>
																												<h6>
																													{
																														parentModule.moduleNumber
																													}
																												</h6>
																											</div>
																										)
																									}
																								)}
																							</div>
																						</>
																					)}
																				</div>
																				<div className="my-3">
																					{module
																						.subModules
																						.length >
																						0 && (
																						<>
																							<h5 className="sans">
																								Possible
																								next
																								steps...
																							</h5>
																							<div className="flex gap-1">
																								{module.subModules.map(
																									(
																										subModule,
																										index
																									) => {
																										return (
																											<div
																												className="flex gap-2 bg-wgray rounded px-2 py-1 sans text-sm"
																												key={
																													index
																												}
																											>
																												<h5>
																													{
																														subModule.moduleName
																													}
																												</h5>
																												<h6>
																													{
																														subModule.moduleNumber
																													}
																												</h6>
																											</div>
																										)
																									}
																								)}
																							</div>
																						</>
																					)}
																				</div>
																			</li>
																		)
																	}
																)}
															</ul>
														</li>
													)
												}
											)}
										</ul>
									)}
								</li>
							)
						})}
					</ul>
				</div>
				<aside className="flex-1 w-1/3 flex flex-col gap-3 border border-r-0 border-gray-300 relative h-screen overflow-y-scroll bg-white transition-all p-3">
					<Button className="w-fit mx-auto">
						Edit Learning Path
					</Button>
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
			</div>
		</section>
	);
}

PathIndexPage.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default PathIndexPage;
