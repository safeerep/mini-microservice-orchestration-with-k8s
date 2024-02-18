import mongoose, { Schema } from "mongoose";

export interface IProduct extends Document {
    _id?: string;
    productName: string;
    description: string;
    productImages: string[];
    price: number;
}

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    productImages: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    }
});

export default mongoose.model("products", productSchema);