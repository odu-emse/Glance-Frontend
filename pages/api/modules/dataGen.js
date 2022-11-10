import randomSentence from 'random-sentence';
import { nanoid } from 'nanoid';

function numberToLetter(num) {
	const remainder = num % 26;
	const stack = Math.floor(num / 26) - 1;
	let out = `${(stack >= 0) ? String.fromCharCode(97 + stack) : ''}${String.fromCharCode(97 + remainder)}`;
	return out.toUpperCase();
}

function generateLesson(lessonCount) {
	const type = getRandomArbitrary(1,3) === 1 ? 'video' : 'pdf';

	let content = {}
	if(type == "pdf") {
		content.url = "http://localhost:3000/pdf/pdf1.pdf"
	} else {
		content.url = `http://localhost:3000/videos/video${getRandomArbitrary(1, 16)}.mp4`,
		content.transcript = randomSentence({ min: 200, max: 300 })
	}

	return {
		id: nanoid(),
		name: `Lesson ${numberToLetter(lessonCount)}`,
		type: type,
		content: content,
		next: null,
		prev: null,
	};
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function generateSection(lessonCount) {
	let finalLessons = {};

	const numberOfLessons = Math.random() * 10 + 1;
	let lastLesson = null;
	let firstLesson = null;

	for (let i = 0; i < numberOfLessons; i++) {
		let lesson = generateLesson(lessonCount + i);
		lesson.prev = lastLesson != null ? lastLesson.id : null;

		if (lastLesson != null) {
			lastLesson.next = lesson.id;
		}

		finalLessons[lesson.id] = lesson;
		lastLesson = lesson;

		if (firstLesson == null) {
			firstLesson = lesson;
		}
	}

	return {
		id: nanoid(),
		name: randomSentence({ min: 3, max: 6 }),
		lessons: finalLessons,
		next: null,
		prev: null,
		headLesson: firstLesson.id,
		tailLesson: lastLesson.id,
	};
}

function generateModule(i) {
	let lessonCount = 0;
	let finalSections = {};
	const numberOfSections = Math.random() * 10 + 1;
	let lastSection = null;
	let firstSection = null;
	for (let i = 0; i < numberOfSections; i++) {
		let section = generateSection(lessonCount);
		section.prev = lastSection != null ? lastSection.id : null;

		if (lastSection != null) {
			lastSection.next = section.id;
		}

		finalSections[section.id] = section;
		lastSection = section;

		if (firstSection == null) {
			firstSection = section;
		}

		lessonCount += Object.values(section.lessons).length;
	}

	let objectives = [];
	for (let index = 0; index < 7; index++) {
		const moduleObjective = randomSentence({ min: 4, max: 9 });
		objectives.push(moduleObjective);
	}

	return {
		id: nanoid(),
		name: `Module ${numberToLetter(i)}`,
		instructor: "Joel DeSante",
		dependencies: [],
		description: randomSentence({ min: 15, max: 35 }),
		objectives,
		sections: finalSections,
		headSection: firstSection.id,
		tailSection: lastSection.id,
	};
}

let data = [];
const numberOfModules = Math.random() * 50 + 1;
for (let i = 0; i < numberOfModules; i++) {
	let mod = generateModule(i);
	data.push(mod);
}

export default data;
