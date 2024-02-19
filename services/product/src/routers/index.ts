import { Router, Request, Response } from "express";
import controllers from "../handlers/controllers";

export default ( ) => {
    const router = Router()
    const {
        addProduct,
        getOneProduct,
        getProducts
    } = controllers;

    router.use('/product')
    router.post('/add-product', addProduct)
    router.get('/get-one-product/:productId', getOneProduct)
    router.get('/get-products', getProducts)

    return router;
}