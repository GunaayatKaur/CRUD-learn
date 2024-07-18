import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnction = async() => {
    const MONGODB_URL = process.env.MONGODB_URL;
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("DB Connected successfully!");
    } catch (error) {
        console.log("Error while connecting to MongoDB ", error);
    }
};

export default DBConnction;