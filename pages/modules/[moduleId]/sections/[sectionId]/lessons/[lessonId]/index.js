import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import VideoContent from '@/components/modules/ContentType/VideoContent';
import ModuleNavigation from '@/components/modules/ModuleSidebar/ModuleNavigation';
import PDFContent from '@/components/modules/ContentType/PDFContent';

const ModuleSection = () => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(true);

	const router = useRouter();
	let { moduleId, sectionId, lessonId } = router.query;

	useEffect(() => {
		if (!moduleId || !sectionId || !lessonId) {
			return;
		}
		setLoading(true);
		fetch(`/api/modules/${moduleId}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, [moduleId, sectionId, lessonId]);

	const section = data?.sections[sectionId];
	const lesson = section?.lessons[lessonId];

	if (isLoading) return <p>Loading...</p>;
	if (!data || !section || !lesson) return <p>Content failed to load.</p>;

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

	let content = null;
	if (lesson.type == 'pdf') {
		content = <PDFContent url={lesson.content.url} />;
	} else {
		content = (
			<VideoContent
				url={lesson.content.url}
				transcript={lesson.content.transcript}
			/>
		);
	}

	return (
		<section className="mx-auto container h-screen">
			<h1 className="my-3 text-3xl font-bold">
				{data.name} - {lesson.name}
			</h1>
			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content */}

				{/* 
					TODO: USE DYNAMIC IMPORTS HERE!!!!! REDUCE FILE SIZE!!!!! YES. I AM SCREAMING!!!!
					https://nextjs.org/docs/advanced-features/dynamic-import
				 */}

				{content}

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

export default ModuleSection;
