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

	return (
		<div className="m-1">
			<hr />
			<div>{lessons}</div>
		</div>
	);
};

export default Section;
