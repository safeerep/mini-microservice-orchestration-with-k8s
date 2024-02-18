import { Request, Response } from "express";
import cartsCollection from "../../config/db/cart.schema";

export const getCartItems = async ( req: Request, res: Response) => {
    try {
        // we will get userId in params
        const userId: string = req.params.userId;
        const userCart = await cartsCollection.findOne({ userId: userId})

        return res.json({ success: true, userCart, message: 'successfully fetched cart items of the user'})
    } catch (error) {
        console.log(`something went wrong during fetching all cart items ${error}`);
        return res.json
    }
}