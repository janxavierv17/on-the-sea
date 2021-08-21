import User from "../model/user.mjs";
import express from "express";

export const users = (request, response) => {
  console.log("Users routee", request.body);
  response.json({
    message: "Hello!",
  });
};

export const signUp = async (request, response) => {
  // console.log('REQ BODY ON SIGNUP', req.body);
  const { name, lastName, email, password } = request.body;

  await User.findOne({ email }).exec((err, user) => {
    if (user) {
      return response.status(400).json({
        error:
          "This email is already taken. Please use a different email address.",
      });
    }
  });

  let newUser = new User({ name, lastName, email, password });

  await newUser.save((err, success) => {
    if (err) {
      console.log("Something went wrong with signing up.", err);
      return response.status(400).json({
        error: err,
      });
    }
    response.json({
      message: "Signup success! Please signin",
    });
  });
};
