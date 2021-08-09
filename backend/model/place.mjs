import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema
const placeSchema = new Schema({
  place: { type: String, required: false },
  title: { type: String, required: false },

  // Change the frontend code to receive the same as amenities
  beds: { type: String, required: false },
  guests: { type: String, required: false },
  costs: { type: String, required: false },
  bedRooms: { type: String, required: false },
  bathRooms: { type: String, required: false },
  typeOfPlace: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
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
  amenities: { type: [String], required: false },
  featuredImage: { type: String, required: false },
  images: { type: [String], required: false },
  bookedDates: { type: [Date], required: false },
  createdDate: { type: Date, default: Date() },
});

// Model
export default mongoose.model("places", placeSchema);
