import express from "express";
import { sendMessage, getMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectroutes.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessage);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
