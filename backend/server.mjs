import express from "express";
import mongoose from "mongoose";
import Places from "./routes/places.mjs";
const app = express();

async function init() {
  await mongoose.connect(
    "mongodb+srv://janxavierv17:jan123456@cluster0.19coz.mongodb.net/on-the-sea?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

  const db = mongoose.connection;
  if (db.readyState === 1) {
    console.log("We're connected.");
  }

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(Places);

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`App listening at localhost:${port}`);
  });
}

init();
