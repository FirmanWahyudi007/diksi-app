import mongoose from "mongoose";

const connectionUrl =
  process.env.MONGODB_URI ||
  "mongodb+srv://diksiapp:X4cOFBuixL4aGFUW@cluster0.jv7vaxo.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(connectionUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
