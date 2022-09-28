import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ModuleNavigation from '@/components/modules/ModuleSidebar/ModuleNavigation';
import Layout from '@/components/Layout';
import ContentLoader from '@/components/modules/content_type/ContentLoader';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher';

const ModuleSection = () => {
	//const [data, setData] = useState(null);

	const router = useRouter();
	let { moduleId, sectionId, lessonId } = router.query;
	
	const { data, errors } = useSWR(`/api/modules/${moduleId}`, fetcher);
	if(!data) return <p>Loading...</p>
	if(errors) return <p>Content failed to load...</p>

	const section = data?.sections[sectionId];
	const lesson = section?.lessons[lessonId];

	if(!section || !lesson) return <p>Content failed to load...</p>

	let nextPage = null;
	let prevPage = null;

	if (lesson.next !== null)
		nextPage = `/modules/${moduleId}/sections/${sectionId}/lessons/${lesson.next}`;
	if (lesson.prev !== null)
		prevPage = `/modules/${moduleId}/sections/${sectionId}/lessons/${lesson.prev}`;
	if (lesson.next === null && section.next !== null)
		nextPage = `/modules/${moduleId}/sections/${section.next}/lessons/${
			data.sections[section.next].headLesson
		}`;
	if (lesson.prev === null && section.prev !== null)
		prevPage = `/modules/${moduleId}/sections/${section.prev}/lessons/${
			data.sections[section.prev].tailLesson
		}`;

	return (
		<section className="mx-auto container h-screen">
			<h1 className="my-3 text-3xl font-bold">
				{data.name} - {lesson.name}
			</h1>
			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content */}
				<ContentLoader type={lesson.type} data={lesson.content} />

				{/* Section sidebar */}
				<aside className="bg-white h-full w-1/4">
					<ModuleNavigation data={data} selected={lessonId} />
				</aside>
			</div>
			{/* Previous and Next buttons */}
			<div className="w-full flex justify-between items-center">
				{prevPage !== null && (
					<Link href={prevPage} passHref>
						<a className={`bg-blue-600 px-5 py-3 rounded text-white`}>
							Previous
						</a>
					</Link>
				)}

				{nextPage !== null && (
					<Link href={nextPage} passHref>
						<a className={`bg-blue-600 px-5 py-3 rounded text-white`}>Next</a>
					</Link>
				)}
			</div>
		</section>
	);
};

ModuleSection.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export default ModuleSection;
