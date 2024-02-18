import { Request, Response } from "express";
import productsCollection, { IProduct } from "../../config/db/product.schema";

export const addProduct = async ( req: Request, res: Response) => {
    try {
        // not taking images as files, but taking some public images url;
        const newProduct: IProduct|any = await productsCollection.create(req.body)
        if (newProduct) {
            return res.json({ success: true, product: newProduct, message: 'successfully added new product'})
        }
        else throw new Error('something went wrong')
    } catch (error: any) {
        console.log(`an error occured ${error}`);
        res.json({ success: false, message: error.message})
    }
}