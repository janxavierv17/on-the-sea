import { signUp, users } from "../controllers/authUser.mjs";

import express from "express";
const router = express.Router();

router.get("/api/v1/signup", users);
router.post("/api/v1/signup", signUp);

export default router;
