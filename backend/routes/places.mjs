import express from "express";
const router = express.Router();
import { createPlace, deletePlace } from "../controllers/places.mjs";

// Places routes
router.post("/api/v1/create-place", createPlace);
router.delete("/api/v1/place/:id", deletePlace);

export default router;
