import { Request, Response } from "express";
import ordersCollection from "../../config/db/order.schema";

export const placeOrder = async ( req: Request, res: Response) => {
    try {
        const products = req.body.products;
        let payable: number = 0;
        products.forEach(( productObj: any) => {
            payable += productObj.price;
        });

        const newOrder = await ordersCollection.create(
            {
                ...req.body,
                total: payable
            }
        )

        return res.json({ success: true, newOrder, message: "successfully created new order"})
    } catch (error: any) {
        console.log(`an error happenended on placing order ${error}`);
        return res.json({ success: false, message: error.message})
    }
}