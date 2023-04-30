import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '@/components/common/pages/layouts/layout/layout';
import { Button } from '@/components/common/button/button';
import { ContentLoader } from '@/components/pages/modules/module/lessons/lesson/content_type/content_loader';
import useSWR from 'swr';
import gqlFetcher from '@/utils/gql_fetcher';
import { useContext } from 'react';
import GlobalLoadingContext from '@/contexts/global_loading_context';
import { SidebarLessons } from '@/components/common/pages/sidebar/sidebar_lessons/sidebar_lessons';
import { getModuleByIDForFlow } from '@/scripts/get_module_by_id';
import Loading from '@/common/loader/loader';
import RequestFailed from '@/pages/errors/request_failed/request_failed';
import { Collection, Module, Section } from '@/types/graphql';
import GlobalUserContext from '@/contexts/global_user_context';

const ModuleSection = () => {
	const { user } = useContext(GlobalUserContext);

	const router = useRouter();
	const { moduleId } = router.query;

	const { data, error } = useSWR({
			query: getModuleByIDForFlow,
			variables: {
				moduleID: moduleId,
				planID: user.plan.id
			}
		},
		gqlFetcher,
	) as {
		data: {
			moduleFlowFromLearningPath: {
				currentSection: Section;
				nextModule: Module
				currentModule: Module
				previousModule: Module
				nextCollection: Collection
				currentCollection: Collection
				previousCollection: Collection
			}
		}
		error: Error
	};

	if (error) {
		return (
			<RequestFailed
				title='Failed to load module'
				subtitle='Please try again later'
			/>
		);
	}

	if (!data) return <Loading />;

	const primaryContent = data.moduleFlowFromLearningPath.currentModule.content.find(v => v.primary) || data.moduleFlowFromLearningPath.currentModule.content[0]

	return (
		<section className='flex'>
			<div className='SectionContent stdcontainer grow flex-col'>
				<header>
					<h4 className='mb-6'>
						<Link href={`/sections/${data.moduleFlowFromLearningPath.currentSection.id}`} passHref>
							<a
								title={`Return to the home page of "${data.moduleFlowFromLearningPath.currentSection.sectionName}"`}
							>
								{data.moduleFlowFromLearningPath.currentSection.sectionName}
							</a>
						</Link>
						&nbsp;&nbsp;<strong>//</strong>&nbsp;&nbsp;
						{data.moduleFlowFromLearningPath.currentCollection.name}
					</h4>
					<h3>{data.moduleFlowFromLearningPath.currentModule.name}</h3>
				</header>

				<div className='flex h-4/5 gap-2 my-2'>
					{/* Section content  */}
					<ContentLoader type={primaryContent.type} data={data.moduleFlowFromLearningPath.currentModule.content} />
				</div>
				{/* Previous and Next buttons */}
				<div className='w-full flex justify-between items-center'>
					{data.moduleFlowFromLearningPath.previousModule !== null && (
						<Link
							href={`/modules/${data.moduleFlowFromLearningPath.previousModule.id}/view`}
							passHref
						>
							<Button>Previous</Button>
						</Link>
					)}
					<div className='grow'></div>
					{data.moduleFlowFromLearningPath.nextModule !== null && (
						<Link
							href={`/modules/${data.moduleFlowFromLearningPath.nextModule.id}/view`}
							passHref
						>
							<Button>Next</Button>
						</Link>
					)}
					{
						!data.moduleFlowFromLearningPath.nextModule && !data.moduleFlowFromLearningPath.nextCollection ? (
							<Link href={`/sections/${data.moduleFlowFromLearningPath.currentSection.id}`} passHref>
								<Button>Return to section</Button>
							</Link>
						) : null
					}
				</div>
			</div>
			{/* Section sidebar */}
			<aside className='SectionSidebar bg-white h-full w-1/4 sticky top-0'>
				<SidebarLessons
					open={true}
					handle={() => console.log('toggled')}
					data={data.moduleFlowFromLearningPath.currentCollection.modules}
					property={'name'}
					url={'id'}
				/>
			</aside>
		</section>
	);
};

ModuleSection.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default ModuleSection;
