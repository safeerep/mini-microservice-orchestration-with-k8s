import { Request, Response } from 'express'
import usersCollection, { IUser } from '../../config/db/auth.schema'
import generateToken from '../../utils/jwt/generateToken'
import bcrypt from 'bcrypt'

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log(`here`, req.body);
        
        req.body.password = bcrypt.hashSync(req.body.password, 10)
        const { email, password }: IUser = req.body;

        const newUser: IUser | any = await usersCollection.create({ email, password });
        console.log(newUser);
        
        if (newUser) {
            const jwtToken = await generateToken(String(newUser?._id))
            res.cookie('userToken', jwtToken, { maxAge: 7 * 24 * 60 * 60 * 1000 })
            res.json({ success: true, message: 'successfully signed up' })
        } else {
            throw new Error('something went wrong')
        }
    } catch (error: any) {
        if (error && error.code === 11000) {
            res.json({ success: false, message: 'already registered user credentials' })
        } else {
            res.json({ success: false, message: 'something went wrong' })
        }
    }
}