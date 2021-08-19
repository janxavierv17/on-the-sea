import express from "express";

export const users = (request, response) => {
  console.log("Users routee", request.body);
  response.json({
    message: "Hello!",
  });
};

export const signUp = (request, response) => {
  console.log("Sign Up Route", request.body);
  response.json({
    message: "Hello!",
  });
};
