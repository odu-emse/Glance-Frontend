import { useState } from 'react';
import Lesson from './Lesson';

function generateLessons(data, selected, moduleId) {
	let lessons = [];
	let nextLesson = data.headLesson;
	while (nextLesson !== null) {
		const lessonData = data.lessons[nextLesson];
		nextLesson = lessonData.next;
		lessons.push(
			<Lesson
				data={lessonData}
				selected={selected}
				moduleId={moduleId}
				sectionId={data.id}
			/>
		);
	}

	return lessons;
}

const Section = ({ data, selected, moduleId }) => {
	const lessons = generateLessons(data, selected, moduleId);
	let [isCollapsed, setCollapsed] = useState(false);

	return (
		<div className="m-1">
			<hr />
			{/* <p onClick={ () => { setCollapsed(!isCollapsed) } } className="font-medium select-none bg-slate-200 p-2 cursor-pointer">{ data.name }</p> */}
			<div>{lessons}</div>
		</div>
	);
};

export default Section;
