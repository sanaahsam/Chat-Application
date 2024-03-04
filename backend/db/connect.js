import mongoose from "mongoose";

export default async function ConnectMongoDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
}
