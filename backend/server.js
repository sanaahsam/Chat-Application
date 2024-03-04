import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectMongoDb from "./db/connect.js";
import messsageRoutes from "./routes/messageRouter.js";
import authRoutes from "./routes/AuthRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { server, app } from "./socket/socketio.js";

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/message", messsageRoutes);

server.listen(PORT, async () => {
  await ConnectMongoDb();
  console.log(`server running on ${PORT}`);
});
