import express from "express";
import formidable from "express-formidable";
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
router.put("/api/v1/places/:id", updatePlace);
router.delete("/api/v1/places/:id", deletePlace);
router.post(
  "/api/v1/upload",
  formidable({ maxFileSize: 5 * 1024 * 1024 }),
  uploadPhoto
);

export default router;
