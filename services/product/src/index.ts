import dotenv from 'dotenv'
dotenv.config();
import express, { Express } from "express";
import cookieParser from "cookie-parser"
import router  from "./routers";
import dbConnect from './config/db/db.config';
dbConnect();

const app: Express = express()
const PORT: number = Number(process.env.PORT)
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true}))
app.use(`/api/v1`, router())

app.listen(PORT, () => {
    console.log(`product service connected successfully`);
})