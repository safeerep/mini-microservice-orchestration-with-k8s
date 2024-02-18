import { Request, Response } from 'express'
import usersCollection, { IUser } from '../../config/db/auth.schema'
import generateToken from '../../utils/jwt/generateToken'
import bcrypt from 'bcrypt'

export const login = async (req: Request, res: Response) :Promise <void> => {
    try {
        const userEmail: string = req.body.email;
        const userDetails: IUser | null = await usersCollection.findOne({ email: userEmail})
        if (userDetails) {
            const passwordMatching: boolean = await bcrypt.compare(req.body.password, userDetails.password);
            if (passwordMatching) {
                const jwtToken = await generateToken(String(userDetails._id))
                res.cookie('userToken', jwtToken, { maxAge: 7 * 24 * 60 * 60 * 1000 })
                res.json({success: true, message: 'user login successfull'})
            }
            else {
                throw new Error ('invalid credentials')
            }
        }
        else {
            throw new Error ('invalid credentials')
        }
    } catch (error: any) {
        res.json({success: false, message: error.message})
    }
}