import mongoose from 'mongoose'

const MONGO_URI: string = process.env.MONGO_URI || '';

export default () => {
    mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`db connected with the order service successfully`);
    }). catch ((err: any) => {
        console.log(`something went wrong during connecting with order service ${err}`);
    })
}