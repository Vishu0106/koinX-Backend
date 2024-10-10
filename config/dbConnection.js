import mongoose from "mongoose";

const DB_NAME = process.env.DB_NAME || "crypto";
const connectDB = async () => {
    try {
      const connectInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDb connected DB host : ${connectInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ",error);
        process.exit(1)
    }
}

export default connectDB