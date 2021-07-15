import express from "express";
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    ok: true,
  });
});

app.listen(port, () => {
  console.log(`App listening at localhost:${port}`);
});
