import jwt, { Secret } from 'jsonwebtoken'

export default async (uniqueKey: string) => {
    return jwt.sign(
        { uniqueKey }, process.env.JWT_TOKEN_SECRET as Secret , {expiresIn: '7d'}
    )
}

