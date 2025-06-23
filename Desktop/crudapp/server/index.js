import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import route from "./routes/userRoute.js"
dotenv.config();

const app = express()
app.use(express.json());
app.use(cors());


const port = process.env.port || 7000
const URL = process.env.MONGOURL
app.use("/api",route)

app.listen(port,(req,res)=>{
    try {
        mongoose.connect(URL).then(console.log("Connected to MongoDB")).catch(error => console.log(error));
        console.log(`server is running on port ${port}`)
    } catch (error) {
        return res.send({status:0,response:error.message})
    }
})