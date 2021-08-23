import mongoose from "mongoose";
import crypto from "crypto";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true, required: true, max: 32 },
    lastName: { type: String, trim: true, required: true, max: 32 },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      unique: true,
    },
    // Save password as hashed password.
    hashed_password: {
      type: String,
      required: true,
    },
    // The strength of our hash.
    salt: { type: String },
    role: {
      type: String,
      default: "subscriber",
    },
    // Generate a token for password resets to verify if the user exists.
    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Virtual fill that takes a password from the frontend, hashes and saves the password to our database.
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

// methods
userSchema.methods = {
  authenticate: function (plainText) {
    // returns a true or false.
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) {
      return;
    }

    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      console.log("Something went wrong.", error);
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

export default mongoose.model("User", userSchema);
