import { check } from "express-validator";

// Run this checker in index.mjs
export const userSignupValidator = [
  check("name").not().isEmpty().withMessage("A name is required."),
  check("lastName").not().isEmpty().withMessage("Your last name is required."),
  check("email").isEmail().withMessage("An email is required."),
  check("password")
    .isLength(6)
    .withMessage("A password with minimum of 6 characters is required."),
];
