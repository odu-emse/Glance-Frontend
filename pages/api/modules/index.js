import data from "./data";

export default function handler(req, res) {
  console.log("OI")
  res.status(200).json(data)
}
  