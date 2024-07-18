import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js'

const app = express();

dotenv.config();
app.use(express.json())

mongoose
.connect(
  process.env.MONGO
)
.then(
    ()=>{console.log('MongoDb is connected')}
).catch((err)=>{
    console.log(err);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/auth',authRoute)
