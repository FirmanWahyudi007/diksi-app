import mongoose from "mongoose";
//connect to mongodb
const connectionUrl =
  "mongodb+srv://firmanwa:oI0pndHSagrC7uMm@cluster0.m8exwf5.mongodb.net/testdb?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI || connectionUrl
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("Error Encountered: ", err);
    process.exit(1);
  }
};
export default connectDB;
