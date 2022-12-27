import express from "express";
import imagesRouter from "./routes/images";

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("Hello Udacity!");
});

app.listen(port, () => {
  console.log(`Image processing API listening at http://localhost:${port}`);
});

app.use("/images", imagesRouter);

export default app;
