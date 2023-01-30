import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `{
        login(code: "${req.query.code}") {
          id_token,
          refresh_token
        }
      }`,
		}),
		credentials: 'include',
		cache: 'no-cache',
	})

	if (!response.ok) {
		console.log(await response.text())
		res.status(400).send('Error')
		return
	}

	const body = await response.json()
	if (body.errors !== undefined) {
		console.log(body)
		res.status(400).send('Error')
		return
	}

	res.setHeader(
		'Set-Cookie',
		`auth=${body.data.login.id_token}; Secure; HttpOnly;`
	)
	res.setHeader(
		'Set-Cookie',
		`refresh=${body.data.login.refresh_token}; Secure; HttpOnly;`
	)

	res.redirect('/')
}
