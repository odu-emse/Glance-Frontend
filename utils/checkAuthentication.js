import { OAuth2Client } from "google-auth-library";

export default async function checkAuthentication(req) {

    const token = req.cookies?.auth;
    if (token === undefined) {
        return false;
    }

    const client = new OAuth2Client(process.env.GOOGLE_ID);    
    try {
        await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_ID,  
        });
    } catch(e) {
        return false;
    }
    
    return true;
}