import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema
const placeSchema = new Schema({
  name: { type: String, required: true },
  guests: { type: Number, required: true },
  rent: { type: Number, required: true },
  baths: { type: Number, required: true },
  beds: { type: Number, required: true },
  featuredImage: { type: String, required: false },
  images: { type: [String], required: false },
  amenities: { type: [String], required: false },
  bookedDates: { type: [Date], required: false },
  location: {
    address: { type: String, required: true },
    coordinates: { lat: Number, lng: Number, required: false },
  },
  createdDate: { type: Date, default: Date() },
  typeOfPlace: {
    type: String,
    required: true,
  },
  typeOfPlaceDescription: {
    type: String,
    required: false,
  },
  kindOfSpace: {
    type: String,
    required: false,
  },
});

// Model
export default mongoose.model("places", placeSchema);
