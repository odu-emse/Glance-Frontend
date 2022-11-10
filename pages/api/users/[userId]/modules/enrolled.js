import data from '../../../modules/data';

export default function handler(req, res) {
	// 1. Get userx ID
	// const { userId } = req.query;

	// 2. Get plan from user

	let mockData = [];
	for (let index = 0; index < 5; index++) {
		const rand = Math.floor(Math.random() * 22);
		mockData.push(data[rand]);
	}

	// 3. Display
	res.status(200).json(mockData);
}
