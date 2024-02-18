import { Request, Response } from "express";
import productsCollection from "../../config/db/product.schema";

export const getOneProduct = async ( req: Request, res: Response) => {
    try {
        const productId: string = req.params.productId
        const product = await productsCollection.findById( productId);
        if (product) {
            return res.json({ success: true, product, message: "successfully fetched a specific product's details"})
        }
        else {
            return res.json({ success: false, message: "invalid product id or product is not existing"})
        }
    } catch (error: any) {
        console.log(`error occured ${error}`);
        return res.json({ success: false, message: error.message})
    }
}