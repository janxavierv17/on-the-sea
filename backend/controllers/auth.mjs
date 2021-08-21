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

    const token = jwt.sign(
      { name, lastName, email, password },
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

    sendGridMail.send(sendEmail).then((sent) => {
      console.log("Send Grid: ", sent);
      return response
        .json({
          message: `Email has been sent to ${email}. Follow the instructions to activate your acccount.`,
        })
        .catch((error) => {
          console.log("Something went wrong with Send Grid", error);
          return response.json({
            message: error.message,
          });
        });
    });
  });

  // let newUser = new User({ name, lastName, email, password });
  // await newUser.save((err, success) => {
  //   if (err) {
  //     console.log("Something went wrong with signing up.", err);
  //     return response.status(400).json({
  //       error: err,
  //     });
  //   }
  //   response.json({
  //     message: "Signup success! Please signin",
  //   });
  // });
};

// Encode our user that just registered using JWT.
// If the email does not exist proceed, else stop.
// Send a verification email. The verification email will take our user to our frontend page.
// That frontend page will grab the encoded JWT. We then make a request to our backend and save the user's information.
