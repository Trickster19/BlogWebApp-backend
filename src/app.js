import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});
import express from "express";
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express();

app.use(cors({

    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.get("/",(req,res)=>{
    res.json({"messg":'hello Cutie'})
})
export default app;