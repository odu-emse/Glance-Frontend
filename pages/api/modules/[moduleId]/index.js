import data from "../data";

export default function handler(req, res) {
  const { moduleId } = req.query;

  const mod = data[moduleId];
  if(!mod) {
    res.status(404).send("Not Found");
    return;
  }

  res.status(200).json(mod)
}
  