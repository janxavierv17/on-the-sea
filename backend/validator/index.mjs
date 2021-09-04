import { validationResult } from "express-validator";

export const runValidation = (request, response, next) => {
  const errors = validationResult(request);

  var array = Object.keys(errors.array()).map(function (key) {
    return errors.array()[key].msg;
  });

  // if we have errors give a response status of 422 and a json.
  if (!errors.isEmpty()) {
    return response.status(422).json({
      errors: array,
    });
  }
  next();
};
