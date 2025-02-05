import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERRR: MongoDB Connection Error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀  Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed", err);
  });
