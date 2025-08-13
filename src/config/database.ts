import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error("MONGO_URI variable is not defined.");
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connecting MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
