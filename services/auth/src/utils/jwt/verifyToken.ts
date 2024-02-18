import jwt, { Secret } from 'jsonwebtoken'

export default async (token: string) => {
    try {
        const secret: Secret = process.env.JWT_TOKEN_SECRET || "";
        jwt.verify(token, secret, (err: any, decodedUser: any) => {
            if (err) {
                return false;
            }
            return true;
        });
    } catch (error) {
        console.log(`an error occured ${error}`);
        return false;
    }
}