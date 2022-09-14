import data from "./dataGen";

export default function handler(req, res) {
  res.status(200).json(data)
}
  