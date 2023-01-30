import { OAuth2Client } from 'google-auth-library'
import { NextApiRequest, NextApiResponse } from 'next'

/* 

	FIXME: Make this a POST request!
	Using a query string is secure but also prone to accidents!
	See https://stackoverflow.com/questions/323200/is-a-https-query-string-secure

	TL;DR Post bodies won't be logged which avoids exposing JWTs in server logs.

*/

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { token } = req.query

	if (token === undefined || token === null) {
		res.status(401).send('Unauthorized')
		return
	}

	try {
		const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_ID)
		const response = await client.verifyIdToken({
			idToken: token,
			audience: process.env.NEXT_PUBLIC_GOOGLE_ID,
		})
		res.status(200).json(response.getPayload())
		return
	} catch (e) {
		res.status(401).send('Unauthorized')
		
	}
}
