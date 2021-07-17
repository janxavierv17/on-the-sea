import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema
const placeSchema = new Schema({
  name: { type: String, required: true },
  featuredImage: { type: String, required: false },
  guests: { type: Number, required: true },
  rent: { type: String, required: true },
  baths: { type: Number, required: true },
  beds: { trype: Number, required: true },
  images: { type: [String], required: false },
  amenities: { type: [String], required: false },
  bookedDates: { type: [Date], required: false },
  location: { address: String, coordinates: { lat: Number, lng: Number } },
  createdDate: { type: Date, default: Date() },
});

// Model
export default mongoose.model("places", placeSchema);
