import { Router, Request, Response } from "express";
import controllers  from '../handlers/controllers'

export default () => {
    const router = Router()
    const {
        login,
        signUp
    } = controllers;

    router.get(`/`, (req: Request, res: Response) => {
        res.send('ok safee, fine')
    })
    
    router.post('/sign-up', signUp) 
    router.post('/login', login) 

    return router;
}