import { Router } from "express";
import controllers from "../handlers/controllers";

export default () => {
    const router = Router();
    const {
        placeOrder
    } = controllers;

    router.use('/order')
    router.post('/place-order', placeOrder)
    
    return router;
}