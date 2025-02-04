import mongoose from "mongoose";
import express from "express";
import { DB_Name } from "/Users/dpthynair/Downloads/Code/YourPlaylist_Backend/src/constants.js";
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config();
const app = express();

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: MongoDB Connection Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
  });
