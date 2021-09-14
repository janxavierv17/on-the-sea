import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Places from "./routes/places.mjs";
import AuthUser from "./routes/auth.mjs";
import formidableMiddleware from "express-formidable";
dotenv.config();

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.19coz.mongodb.net/on-the-sea?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.once("open", function () {
  console.log("We're connected to our DB cluster");
});

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

if (process.env.NODE_DEV) {
  app.use(cors({ origin: process.env.NODE_HOST }));
}

app.use(formidableMiddleware({ multiples: true }));

// Routes
app.use(Places);
app.use(AuthUser);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App listening at localhost:${port}`);
});
