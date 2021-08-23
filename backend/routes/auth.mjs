import {
  signIn,
  signUp,
  users,
  accountActivation,
} from "../controllers/auth.mjs";

// Validator
import {
  userSigninValidator,
  userSignupValidator,
} from "../validator/auth.mjs";
import { runValidation } from "../validator/index.mjs";

import express from "express";
const router = express.Router();

router.get("/api/v1/signup", users);
router.post("/api/v1/signin", userSigninValidator, runValidation, signIn);
router.post("/api/v1/signup", userSignupValidator, runValidation, signUp);
router.post("/api/v1/account-activation", accountActivation);

export default router;
