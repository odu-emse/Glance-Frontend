// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const authCodeQuery = (code) => {
  const payload = {
      query: `{
          login(code: "${code}")
      }`
  }

  return payload
}

export default async function handler(req, res) {

  const response = {
    ok: true,
    status: "OK" 
  }
  
  if(!response.ok) {
    res.status(400).send("Error");
    return;
  }

  //const body = await response.json();
  //console.log(body)
  //res.redirect("/");
  res.status(200).send("Hello")
}
