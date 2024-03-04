import express from "express";

import { Login, Signup, Logout } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", Login);

router.post("/signup", Signup);

router.post("/logout", Logout);

export default router;
