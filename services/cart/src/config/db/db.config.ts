import mongoose from 'mongoose'

const MONGO_URI: string = process.env.MONGO_URI || '';

export default () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`db connected with the cart service successfully`);
    }). catch ((err: any) => {
        console.log(`something went wrong during connecting with db in cart service ${err}`);
    })
}