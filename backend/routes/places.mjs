import express from "express";
const router = express.Router();
import {
  getPlaces,
  createPlace,
  updatePlace,
  deletePlace,
  uploadPhoto,
} from "../controllers/places.mjs";

// Places routes

router.get("/api/v1/places", getPlaces);
router.post("/api/v1/places", createPlace);
router.post("/api/v1/upload", uploadPhoto);
router.put("/api/v1/places/:id", updatePlace);
router.delete("/api/v1/places/:id", deletePlace);

export default router;
