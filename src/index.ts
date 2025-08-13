import dotenv from "dotenv";
dotenv.config(); // Initialize enviornment variables

import express from "express";
import morgan from "morgan";

// Import internal modules
import routes from "../src/routes/index";
import connectDB from "./config/database";

connectDB(); // connect database

const app = express();
const PORT = process.env.PORT || 3001;

// common application middlewares
app.use(morgan("dev"));

app.use(routes); // All routes binded

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
