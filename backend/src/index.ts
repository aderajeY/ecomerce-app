import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {UserRouter} from './routes/user';
const app = express();
app.use(cors())
app.use(express.json())
app.use('/user',UserRouter);
mongoose.connect('mongodb://127.0.0.1:27017/ecomerce');
const db = mongoose.connection;
db.on('error', console.error.bind(console, "mongodb not connected"));
db.once('open',()=>console.log('connected to mongodb'));
app.listen(5000, ()=> console.log("server running..."));
