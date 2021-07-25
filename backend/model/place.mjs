import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema
const placeSchema = new Schema({
  place: { type: String, required: true },
  title: { type: String, required: true },
  beds: { type: String, required: true },
  guests: { type: String, required: true },
  costs: { type: String, required: true },
  bedRooms: { type: String, required: true },
  bathRooms: { type: String, required: true },
  typeOfPlace: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  kindOfSpace: {
    type: String,
    required: false,
  },
  location: {
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postCode: { type: String },
      country: { type: String },
      coordinates: { lat: Number, lng: Number, required: false },
    },
  },
  // I'm not sure how type:[String] works.
  amenities: { type: [String], required: false },
  featuredImage: { type: String, required: false },
  images: { type: [String], required: false },
  bookedDates: { type: [Date], required: false },
  createdDate: { type: Date, default: Date() },
});

// Model
export default mongoose.model("places", placeSchema);
