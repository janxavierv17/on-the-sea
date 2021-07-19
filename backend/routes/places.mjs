import express from "express";
const router = express.Router();
import {
  getPlaces,
  createPlace,
  updatePlace,
  deletePlace,
} from "../controllers/places.mjs";

// Places routes

// Edit route names later ...
router.get("/api/v1/places", getPlaces);
router.post("/api/v1/create-place", createPlace);
router.put("/api/v1/update-place/:id", updatePlace);
router.delete("/api/v1/place/:id", deletePlace);

export default router;
