import { OAuth2Client } from "google-auth-library";

export default async function handler(req, res) {

    const token = req.cookies?.auth;
    if (token === undefined) {
        res.status(401).send("Unauthorized");
        return;
    }

    const client = new OAuth2Client(process.env.GOOGLE_ID);    
    try {
        await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_ID,  
        });
    } catch(e) {
        res.status(401).send("Unauthorized");
        return;
    }
    
    res.status(200).send("OK"); 
}
  