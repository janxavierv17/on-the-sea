import User from "../model/user.mjs";

// Sending email
import jwt from "jsonwebtoken";
import sendGridMail from "@sendgrid/mail";
// -------
import express from "express";
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

export const users = (request, response) => {
  console.log("Users routee", request.body);
  response.json({
    message: "Hello!",
  });
};

export const signIn = async (request, response) => {
  try {
    // Check if the user details exists in our database.
    const { email, password } = request.body;
    await User.findOne({ email }).exec((error, user) => {
      if (error || !user) {
        console.log("Details does not exist.");
        return response.status(400).json({
          message: "This user email does not exist. Please register.",
        });
      }
      // Authenticate this user
      // Authenticate is a method that can be found in the User Model Schema.
      // Check the entered password and compare it our our database

      if (!user.authenticate(password)) {
        return response.status(400).json({
          message: "This email and password does not match.",
        });
      }
      // Generate a token with an expiry date. The JWT token is used for authentication
      // to allow access to our protected routes.
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { _id, firstName, lastName, email, role } = user;
      return response.json({
        token,
        user: { _id, firstName, lastName, email, role },
      });
    });
  } catch (error) {
    console.log("Something went wrong with Sign In:", error);
  }
};

// This is the first step on saving user's account
export const signUp = async (request, response) => {
  // Encode our user that just registered using JWT.
  // If the email does not exist proceed, else stop.
  // Send a verification email. The verification email will take our user to our frontend page.
  // That frontend page will grab the encoded JWT. We then make a request to our backend and save the user's information.

  try {
    const { firstName, lastName, email, password } = request.body;
    await User.findOne({ email }).exec((err, user) => {
      if (user) {
        return response.status(400).json({
          message:
            "This email is already taken. Please use a different email address.",
        });
      }

      const token = jwt.sign(
        { firstName, lastName, email, password },
        process.env.JWT_ACTIVATE,
        { expiresIn: "10m" }
      );

      const sendEmail = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `On the sea`,
        html: `
        <h1>Let's verify your account. </h1>
        <p>${process.env.NODE_HOST}/authenticate/activate/${token}</p>
        <hr/>
        <p>Your link is active for 10 minutes. After that, you will need to resend the verification email.</p>
        `,
      };

      sendGridMail
        .send(sendEmail)
        .then((sent) => {
          return response.json({
            message: `Email has been sent to ${email}. Follow the instructions to activate your acccount.`,
          });
        })
        .catch((error) => {
          console.log("Something went wrong with Send Grid", error);
          return response.json({
            message: error.message,
          });
        });
    });
  } catch (error) {
    console.log("Signup Error:", error);
  }
};

// This is the second step to saving the user's account
export const accountActivation = (request, response) => {
  const { token } = request.body;
  console.log("Activate Account: ", token);
  if (token) {
    jwt.verify(token, process.env.JWT_ACTIVATE, function (error, decodedToken) {
      if (error) {
        console.log("Account activation error:", error);
        return response.status(401).json({
          error: "Activation link has expired. Please sign up again.",
        });
      }

      const { firstName, lastName, email, password } = jwt.decode(token);
      console.log("Details:", firstName, lastName, email, password);
      const userDetails = new User({ firstName, lastName, email, password });

      userDetails.save((error, user) => {
        if (error) {
          console.log("Saving user in activation link had an error: ", error);
          return response.status(401).json({
            message:
              "Saving user in activation link had an error. Try again later. ",
          });
        }

        return response.json({
          message: "Register successful.",
        });
      });
    });
  } else {
    return response.json({
      message: "Token does not exist. Try again later.",
    });
  }
};
