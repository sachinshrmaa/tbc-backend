import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connected !! DB HOST: ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
