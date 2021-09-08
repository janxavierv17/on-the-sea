import { validationResult } from "express-validator";

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
