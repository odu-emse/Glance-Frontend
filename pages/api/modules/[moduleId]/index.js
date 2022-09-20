import data from '../data';

export default function handler(req, res) {
	const { moduleId } = req.query;

	const mod = data.reduce((acc, curr) => {
		if (curr.id === moduleId) {
			acc = curr;
		}
		return acc;
	});
	if (!mod) {
		res.status(404).send('Not Found');
		return;
	}

	res.status(200).json(mod);
}
