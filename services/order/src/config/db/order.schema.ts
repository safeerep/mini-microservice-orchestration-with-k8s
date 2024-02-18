import mongoose, { Schema, Types } from "mongoose";

export interface IOrder extends Document {
    _id?: string;
    userId: string;
    products: string[];
    total: number;
}
const orderSchema: Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    products: [
        {
            productId: Schema.Types.ObjectId,
            price: Number
        }
    ],
    total: {
        type: Number,
        required: true
    }
});

export default mongoose.model("orders", orderSchema);