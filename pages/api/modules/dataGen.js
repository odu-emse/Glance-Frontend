import randomSentence from "random-sentence";
import { nanoid } from "nanoid";

function generateLesson() {
    return {
        id: nanoid(),
        name: randomSentence({min: 3, max: 6}),
        type: "video",
        content: {
            url: "http://localhost:3000/videos/video1.mp4",
            transcript: randomSentence({ min: 20, max: 80 })
        },
        next: null,
        prev: null
    }
}

function generateSection() {

    let finalLessons = {};

    const numberOfLessons = (Math.random() * 10) + 1;
    let lastLesson = null;
    let firstLesson = null;

    for(let i = 0; i < numberOfLessons; i++) {
        let lesson = generateLesson()
        lesson.prev = lastLesson != null ? lastLesson.id : null;
        
        if(lastLesson != null) {
            lastLesson.next = lesson.id;
        }

        finalLessons[lesson.id] = lesson;
        lastLesson = lesson

        if (firstLesson == null) {
            firstLesson = lesson;
        }
    }

    return {
        id: nanoid(),
        name: randomSentence({min: 3, max: 6}),
        lessons: finalLessons,
        next: null,
        prev: null,
        headLesson: firstLesson.id,
        tailLesson: lastLesson.id
    }
}

function generateModule() {

    let finalSections = {};

    const numberOfSections = (Math.random() * 10) + 1;
    let lastSection = null;
    let firstSection = null;
    for(let i = 0; i < numberOfSections; i++) {
        let section = generateSection()
        section.prev = lastSection != null ? lastSection.id : null;

        if(lastSection != null) {
            lastSection.next = section.id;
        }

        finalSections[section.id] = section;
        lastSection = section

        if(firstSection == null) {
            firstSection = section;
        }
    }

    return {
        id: nanoid(),
        name: randomSentence({min: 3, max: 6}),
        dependancies: [],
        sections: finalSections,
        headSection: firstSection.id,
        tailSection: lastSection.id
    }
}

let data = {}
const numberOfModules = (Math.random() * 50) + 1;
for(let i = 0; i < numberOfModules; i++) {
    let mod = generateModule();
    data[mod.id] = mod;
}


export default data;