import { Request, Response } from "express";
import cartsCollection, { ICart } from "../../config/db/cart.schema";

export const addToCart = async (req: Request, res: Response) => {
    try {
        // first we will check that the user have already in carts collection or not;
        const userId = req.body.userId;
        const isCartExisting = await cartsCollection.findOne({ userId: userId });

        if (isCartExisting) {
            // if there, cart is existing?, we have to check for the product is already existing there or not
            // if yes we have increment count
            // else we can push it to products array;
            const isProductExisting = isCartExisting.products.filter((product: any) => {
                return product.productId === req.body.productId;
            })

            // if product is existing there?, the zero th position of array includes that product info
            if (isProductExisting.length) {
                const updatedCartDocument: ICart | any = await cartsCollection.findOneAndUpdate(
                    {
                        userId: userId,
                        'products.productId': req.body.productId
                    }, {
                        $inc: {
                            'products.$.price': req.body.price,
                            total: req.body.price
                        }
                    }, {
                        new: true
                    }
                )
                return res.json({ success: true, cart: updatedCartDocument, message: "successfully updated cart"})
            } else {
                isCartExisting.products.push({
                    productId: req.body.productId,
                    price: req.body.price
                })
                isCartExisting.total = isCartExisting.total + req.body.price;
                isCartExisting.save()
                return res.json({ success: true, cart: isCartExisting, message: "successfully updated cart"})
            }
        } else {
            const newCartDocument = await cartsCollection.create({
                userId,
                products: [
                    {
                        productId: req.body.productId,
                        price: req.body.price
                    }
                ],
                total: req.body.price
            })
            return res.json({ success: true, cart: newCartDocument, message: "successfully created cart"})
        }
    } catch (error: any) {
        console.log(`an error during adding item to cart ${error}`);
        return res.status(503).json({ success: false, message: error.message })
    }
} 