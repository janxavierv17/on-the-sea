import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import Places from "./routes/places.mjs";
import env from "dotenv";
env.config();
const app = express();

async function init() {
  await mongoose.connect(
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
    console.log("We're connected tot our db cluster");
  });

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  app.use(cors());

  // Routes
  app.use(Places);

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`App listening at localhost:${port}`);
  });
}

init();
