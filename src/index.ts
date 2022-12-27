import express from "express";
const path = require("path");
const imagesRouter = require("./routes/images");

const app = express();
const port = 3000;
express.static(path.join(__dirname, "/../assets"));

app.get("/api", (req, res) => {
  res.send("Hello Udacity!");
});

app.listen(port, () => {
  console.log(`Image processing API listening at http://localhost:${port}`);
});

app.use("/images", imagesRouter);

const myFunc = (num: number): number => {
  return num * num;
};

export default app;
