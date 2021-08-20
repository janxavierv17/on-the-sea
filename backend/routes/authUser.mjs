import { signUp, users } from "../controllers/authUser.mjs";

// Validator
import { userSignupValidator } from "../validator/auth.mjs";
import { runValidation } from "../validator/index.mjs";

import express from "express";
const router = express.Router();

router.get("/api/v1/signup", users);
router.post("/api/v1/signup", userSignupValidator, runValidation, signUp);

export default router;
