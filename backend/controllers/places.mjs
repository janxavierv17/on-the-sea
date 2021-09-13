import Place from "../model/place.mjs";
// import { uploads } from "../helper/cloudinary.mjs";
import fs from "fs";

import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
});

export const getPlaces = async (request, response) => {
  // Get all places from our mongodb.
  const data = await Place.find({});
  // Return all places to the frontend for display.
  if (!data) {
    response
      .status(400)
      .send({ message: "Something went wrong. Try again later." });
    return;
  }

  response.status(200).send(data);
};

export const createPlace = async (request, response) => {
  try {
    // I need to get the data from the request body
    // destructure the data from the body.
    const {
      userID,
      place,
      typeOfPlace,
      kindOfSpace,
      street,
      city,
      state,
      postCode,
      country,
      guests,
      beds,
      bedRooms,
      bathRooms,
      title,
      description,
      costs,
      amenities,
    } = request.body;

    // Create a new instance of a model
    const placeData = new Place({
      userID,
      place,
      title,
      beds,
      guests,
      costs,
      bedRooms,
      bathRooms,
      typeOfPlace,
      description,
      kindOfSpace,
      location: {
        address: {
          street,
          city,
          state,
          postCode,
          country,
        },
      },
      amenities,
    });

    // Save that model
    const data = await placeData.save();
    console.log("Received data:", data);
    // Once model has successfuly saved. send a 200 response
    response.status(200).send(data);
  } catch (error) {
    response
      .status(500)
      .send({ message: "Something went wrong. Try again later." });
    console.log("Something went wrong.", error);
  }
};
export const updatePlace = async (request, response) => {
  try {
    // Get the id from the request parameters.
    const { id } = request.params;
    const {
      name,
      featuredImage,
      guests,
      rent,
      baths,
      beds,
      images,
      amenities,
      bookedDates,
      location,
      createdDate,
    } = request.body;

    // Check if the id exist in our database.
    if (!id) {
      response
        .status(400)
        .send({ message: "Something went wrong. Try again later." });
      return;
    }

    // Use mongoose to findByIdAndUpdate
    const place = await Place.findByIdAndUpdate(id, {
      name,
      featuredImage,
      guests,
      rent,
      baths,
      beds,
      images,
      amenities,
      bookedDates,
      location,
      createdDate,
    });

    console.log(place);

    response.status(200).send({ message: "Update successful." });
  } catch (error) {
    console.log("Something went wrong.", error);
  }
};

export const deletePlace = async (request, response) => {
  try {
    // I need to get the id from request parameters.
    const { id } = request.params;

    // If it exist perform delete.
    if (!id) {
      response
        .status(400)
        .send({ message: "Something went wrong. Try again later." });
      return;
    }

    // Delete that place with the id from MongoDB.
    const data = await Place.findByIdAndDelete(id);
    console.log("Deleted collection:", data);
    // Send a response to the client whether the delete is successful or not.
    response.status(200).send({ ok: true });
  } catch (error) {
    response
      .status(500)
      .send({ message: "Something went wrong. Try again later." });

    console.log("Something went wrong.", error);
  }
};

export const uploadPhoto = async (request, response) => {
  console.log("UploadPhoto route:", request.files);
  const uploader = async (path) => await uploads(path, "Images");
  if (request.files) {
    const urls = [];
    const files = request.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    response
      .status(200)
      .json({ message: "Uploaded Images successfully.", data: urls });
  } else {
    response
      .status(405)
      .json({ message: "Something went wrong with uploading your images." });
  }
};
