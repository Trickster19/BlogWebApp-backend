import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});
import connectDB from "./db/index.js";
import app from "./app.js"

connectDB()
.then(()=>{
    const PORT=process.env.PORT||8000;

    app.on("error",(err)=>{
        console.log("ERROR : ",err);
        throw err;
    })
    
    app.listen(PORT,()=>{

        console.log(`Server is running at PORT ${PORT}`);
        
    })
});