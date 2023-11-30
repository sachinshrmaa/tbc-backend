import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

import { connectDB } from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port:${process.env.PORT} http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
