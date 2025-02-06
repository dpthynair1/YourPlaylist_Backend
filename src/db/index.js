import mongoose, { mongo } from "mongoose";
import { DB_Name } from "../constants.js";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );

    console.log(`\n MongoDb connected!! DB host:${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDb connection failed", error);
    process.exit(1);
  }
};

export default connectDb;
