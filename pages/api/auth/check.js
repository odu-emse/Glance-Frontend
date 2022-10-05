import { OAuth2Client } from 'google-auth-library';

async function refreshAuthToken(token) {

}

export default async function handler(req, res) {
	const token = req.cookies?.auth;
	if (token === undefined) {
		res.status(401).send('Unauthorized');
		return;
	}

	const client = new OAuth2Client(process.env.GOOGLE_ID);
	try {
		const response = await client.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_ID,
		});
		res.status(200).json(response);
	} catch (e) {

		// The users token is invalid. Try to refresh first
		const refreshToken = req.cookies?.refresh;
		if(refreshToken === undefined) {
			res.status(401).send('Unauthorized');
			return;
		}

		const id_token = await refreshAuthToken(refreshToken);
		
		
	}
}
