import { OAuth2Client } from 'google-auth-library';

export default async function handler(req, res) {

  const token = req.cookies?.refresh;
  if(token === undefined) {
    res.status(401).send("No refresh token found.");
    return;
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        refresh(code: "${token}")
      }`
    }),
    credentials: 'include',
    cache: 'no-cache',
  })
  
  if(!response.ok) {
    console.log(await response.text())
    res.status(400).send("Error");
    return;
  }

  const body = await response.json();
  if(body.errors !== undefined) {
    console.log(body)
    res.status(400).send("Error");
    return;
  }

  const client = new OAuth2Client(process.env.GOOGLE_ID);
	try {
		const response = await client.verifyIdToken({
			idToken: body.data.refresh,
			audience: process.env.GOOGLE_ID,
		});
    res.setHeader("Set-Cookie", `auth=${body.data.refresh}; Secure; HttpOnly;`);
		res.status(200).json(response);
	} catch (e) {
		res.status(401).send('Unauthorized');
	}
}
