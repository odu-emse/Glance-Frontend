// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        login(code: "${req.query.code}")
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

  res.redirect("/");
}
