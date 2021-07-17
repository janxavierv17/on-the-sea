import express from "express";
const router = express.Router();
import { createPlace } from "../controllers/places.mjs";
// Places routes
router.post("/api/v1/create-place", createPlace);

export default router;
