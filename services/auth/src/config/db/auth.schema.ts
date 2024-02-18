import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    _id?: string;
    email: string;
    password: string;
}

const authSchema: Schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export default mongoose.model("users", authSchema)