import { Request, Response } from "express";
import productsCollection from "../../config/db/product.schema";

export const getProducts = async ( req: Request, res: Response) => {
    try {
        const products = await productsCollection.find()
        if (products) {
            return res.json({ success: true, products, message: "successfully fetched all products"})
        }
        else {
            return res.json({ success: false, message: "there is no one product added yet"})
        }
    } catch (error: any) {
        console.log(`error occured ${error}`);
        return res.json({ success: false, message: error.message})
    }
}