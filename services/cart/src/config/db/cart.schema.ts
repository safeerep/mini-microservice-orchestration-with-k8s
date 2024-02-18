import mongoose, { Schema } from "mongoose";

export interface IProduct {
    productId: string;
    price: string;
}

export interface ICart extends Document {
    _id?: string;
    userId: string;
    products: IProduct[];
    total: number;
}

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    total: {
        type: Number,
        default: 0,
    }
});

export default mongoose.model("carts", cartSchema);