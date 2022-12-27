const express = require("express");
import app from "../index";
import { Request, Response } from "express";
const router = express.Router();

const path = require("path");
const fs = require("fs");
import sharp from "sharp";

const handleError = (err: Error, res: Response) => {
  res.status(500).contentType("text/plain").end("Oops! Something went wrong!");
};

//?fileName=fjord&width=100&height=100
router.get("/", (req: Request, res: Response) => {
  console.log(req.query.fileName);
  console.log(req.query.width);
  console.log(req.query.height);

  //show image in browser
  //res.sendFile(path.join(__dirname, "/../assets", "full", req.query.fileName + '.jpg'));

  //save path of image
  const pathToOriginal = path.join(
    __dirname,
    "/../assets",
    "full",
    req.query.fileName + ".jpg"
  );

  sharp(pathToOriginal)
    .rotate()
    .resize(200)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((data) => {
      console.log("success resizing the image");
      fs.writeFileSync(
        path.join(
          __dirname,
          "/../assets",
          "thumb",
          req.query.fileName + ".jpg"
        ),
        data
      );
      res.sendFile(
        path.join(__dirname, "/../assets", "thumb", req.query.fileName + ".jpg")
      );
    })
    .catch((err) => {
      handleError(err, res);
    });
});

module.exports = router;
