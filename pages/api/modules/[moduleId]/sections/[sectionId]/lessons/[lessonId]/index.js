import data from "../../../../../data";

export default function handler(req, res) {
    const { moduleId, sectionId, lessonId } = req.query;

    const mod = data[moduleId];
    if(!mod) {
      res.status(404).send("Module Not Found");
      return;
    }

    const section = mod.sections[sectionId];
    if(!section) {
      res.status(404).send("Section Not Found");
      return;
    }

    const lesson = section.lessons[lessonId];
    if(!lesson) {
      res.status(404).send("Lesson Not Found");
      return;
    }

    res.status(200).json(lesson)
}