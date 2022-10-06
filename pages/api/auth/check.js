import { OAuth2Client } from 'google-auth-library';

export default async function handler(req, res) {
	const { token } = req.query;

	if(token === undefined || token === null) {
		res.status(401).send('Unauthorized');
		return;
	}

	try {
		const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_ID);
		const response = await client.verifyIdToken({
			idToken: token,
			audience: process.env.NEXT_PUBLIC_GOOGLE_ID,
		});
		res.status(200).json(response.getPayload());
		return;
	} catch (e) {
		res.status(401).send('Unauthorized');
		return;
	}
}
