import express from "express";
import protectRoute from "../middleware/protectroutes.js";
import { getUsersForSidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/convo", protectRoute, getUsersForSidebar);

export default router;
