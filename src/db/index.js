import mongoose from "mongoose";

import { DBNAME } from "../constants.js";


const connectDB = async () => {

    try {

        const currentInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`);

        console.log(`Connected to MongoDB: ${currentInstance.connection.host}`);
    } catch (error) {
        console.log('error connecting to db', error);
    }


}

export default connectDB;