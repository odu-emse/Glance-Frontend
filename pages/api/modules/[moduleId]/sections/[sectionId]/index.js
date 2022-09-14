import data from "../../../data";

export default function handler(req, res) {
    const { moduleId, sectionId } = req.query;

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

    res.status(200).json(section)
  }