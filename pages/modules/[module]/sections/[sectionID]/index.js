import React, { useState, useEffect } from 'react'
import VideoPlayer from '@/components/modules/VideoPlayer';

const ModuleSection = () => {

	const [ data, setData ] = useState(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true)
		fetch('/api/modules')
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			});
	}, []);
	

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>Content failed to load.</p>

	const section = data.sections[0];

	return (
		<section className="mx-auto container h-screen">
			<h1 className="my-3 text-3xl font-bold">{ data.name } - {section.name}</h1>
			<div className="flex h-4/5 gap-2 my-2">
				{/* Section content */}
				<div className="flex flex-col w-3/4 justify-between">
					<VideoPlayer path={section.content.url} />
					<div className="bg-gray-100">
						<h1 className="text-3xl font-bold mb-2">Transcript</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							vitae ipsam magnam nisi suscipit, sit, placeat nihil corporis
							omnis praesentium explicabo repudiandae obcaecati repellat ipsa.
							Doloribus voluptatem eligendi quibusdam deserunt! Lorem, ipsum
							dolor sit amet consectetur adipisicing elit. Blanditiis earum aut
							error optio corporis soluta, harum eligendi quae ea quidem ex
							consequuntur amet laborum ullam dignissimos, fugit nam quis iure!
						</p>
					</div>
				</div>
				{/* Section sidebar */}
				<aside className="bg-gray-100 h-full w-1/4 p-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
					nesciunt distinctio voluptatum dignissimos cumque amet dolorem odio
					accusantium. Atque totam soluta adipisci harum sequi culpa vel quis
					aperiam? Sequi, laudantium.
				</aside>
			</div>
			{/* Previous and Next buttons */}
			<div className="w-full flex justify-between items-center">
				<button className="bg-blue-600 px-5 py-3 rounded text-white">
					Previous
				</button>
				<button className="bg-blue-600 px-5 py-3 rounded text-white">
					Next
				</button>
			</div>
		</section>
	)
}

export default ModuleSection
