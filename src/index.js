import mongoose from "mongoose";
import express from "express";
import { DB_Name } from "/Users/dpthynair/Downloads/Code/YourPlaylist_Backend/src/constants.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("ERRR: MongoDB Connection Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port  ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error", error);
    throw error;
  }
})();
