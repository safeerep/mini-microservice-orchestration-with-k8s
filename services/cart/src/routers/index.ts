import { Router } from "express";
import controllers from "../handlers/controllers";

export default () => {
    const router = Router()
    const {
        addToCart,
        getCartItems
    } = controllers;

    router.post('/add-to-cart', addToCart)
    router.get('/get-cart-items/:userId', getCartItems)

    return router;
}