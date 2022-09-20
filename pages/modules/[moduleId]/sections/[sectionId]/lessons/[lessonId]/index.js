import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import VideoPlayer from '@/components/modules/VideoPlayer';
import ModuleNavigation from '@/components/modules/ModuleSidebar/ModuleNavigation';

const ModuleSection = () => {

	const [ data, setData ] = useState(null);
	const [isLoading, setLoading] = useState(true);
	
	const router = useRouter();
	let { moduleId, sectionId, lessonId } = router.query;

	useEffect(() => {
		if (!moduleId || !sectionId || !lessonId) {
			return;
		}
		setLoading(true)
		fetch(`/api/modules/${moduleId}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			}).catch((error => {
				setLoading(false);
			}));
	}, [moduleId, sectionId, lessonId]);

	const section = data?.sections[sectionId];
	const lesson = section?.lessons[lessonId];

	if (isLoading) return <p>Loading...</p>
	if (!data || !section || !lesson) return <p>Content failed to load.</p>

	let nextPage = null;
	let prevPage = null;

	if(lesson.next !== null) nextPage = `/modules/${moduleId}/sections/${sectionId}/lessons/${lesson.next}`;
	if(lesson.prev !== null) prevPage = `/modules/${moduleId}/sections/${sectionId}/lessons/${lesson.prev}`;
	if(lesson.next === null && section.next !== null) nextPage = `/modules/${moduleId}/sections/${section.next}/lessons/${data.sections[section.next].headLesson}`;
	if(lesson.prev === null && section.prev !== null) prevPage = `/modules/${moduleId}/sections/${section.prev}/lessons/${data.sections[section.prev].tailLesson}`;

	return (
		<section className="mx-auto container h-screen">
			<h1 className="my-3 text-3xl font-bold">{ data.name } - { lesson.name }</h1>
			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content */}
				<div className="flex flex-col w-3/4 justify-between">
					<VideoPlayer path={lesson.content.url} />
					<div className="bg-gray-100">
						<h1 className="text-3xl font-bold mb-2">Transcript</h1>
						<p>
							{ lesson.content.transcript }
						</p>
					</div>
				</div>
				{/* Section sidebar */}
				<aside className="bg-white h-full w-1/4">
					<ModuleNavigation data={data} selected={lessonId} />
				</aside>
			</div>
			{/* Previous and Next buttons */}
			<div className="w-full flex justify-between items-center">
				{ prevPage !== null &&
					<Link href={prevPage} passHref>
						<a className={`bg-blue-600 px-5 py-3 rounded text-white`}>Previous</a>
					</Link> 
				}

				{ nextPage !== null &&
					<Link href={nextPage} passHref>
						<a className={`bg-blue-600 px-5 py-3 rounded text-white`}>Next</a>
					</Link>
				}
			</div>
		</section>
	)
}

export default ModuleSection
