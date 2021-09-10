import { validationResult } from "express-validator";
import User from "../model/user.mjs";
export const runValidation = (request, response, next) => {
  const errors = validationResult(request);

  // if we have errors give a response status of 422 and a json.
  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: errors.array()[0].msg,
    });
  }
  next();
};

export const isUserCreator = async (request, response, next) => {
  console.log("isUserCreator Function fired.");
  try {
    const user = await User.findById(request.user._id).exec();
    if (!user.role.includes("Creator")) {
      return response.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.log("isCreator Error: ", error);
  }
};
