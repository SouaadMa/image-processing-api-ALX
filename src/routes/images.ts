import express, { Request, Response } from "express";
// import path
import path from "path";
import fs from "fs";
import sharp from "sharp";
const imagesRouter = express.Router();
express.static(path.join(__dirname, "/../../assets"));

const handleError = (err: Error, res: Response): void => {
  console.log(err);
  // check which error it is
  if (err.message.includes("Input file is missing")) {
    res.status(404).send("Original Image does not exist");
  } else res.status(405).send("Something went wrong with sharp");
};

// ?fileName=fjord&width=100&height=100
imagesRouter.get("/", (req: Request, res: Response) => {
  // validate filename parameter to be string
  if (typeof req.query.fileName !== "string") {
    res.status(400).send("fileName parameter is required");
    return;
  }
  if (isNaN(Number(req.query.width))) {
    res.status(400).send("width parameter is required to be a number");
    return;
  }
  if (isNaN(Number(req.query.height))) {
    res.status(400).send("height parameter is required to be a number");
    return;
  }

  const fileName = req.query.fileName;
  console.log(fileName);
  const width = Number(req.query.width);
  console.log(width);
  const height = Number(req.query.height);
  console.log(height);

  // show image in browser
  // res.sendFile(path.join(__dirname, "/../assets", "full", req.query.fileName + '.jpg'));

  // path of image
  const pathToOriginal = path.join(
    __dirname,
    "/../../assets",
    "full",
    fileName + ".jpg"
  );

  // check if image exists in thumb
  const pathToThumb = path.join(
    __dirname,
    "/../../assets",
    "thumb",
    fileName + width.toString() + height.toString() + ".jpg"
  );

  if (fs.existsSync(pathToThumb)) {
    console.log("image exists in thumb");
    res.status(500).sendFile(pathToThumb);
  } else {
    console.log("image does not exist in thumb, processing image");
    processImage(pathToOriginal, fileName, width, height, res);
  }
});

function processImage(
  pathToOriginal: string,
  fileName: string,
  width: number,
  height: number,
  res: Response
): void {
  sharp(pathToOriginal)
    .rotate()
    .resize(width, height)
    .jpeg({ mozjpeg: true })
    .toBuffer()
    .then((data) => {
      console.log("success resizing the image");
      // save the resized image
      fs.writeFileSync(
        path.join(
          __dirname,
          "/../../assets",
          "thumb",
          fileName + width.toString() + height.toString() + ".jpg"
        ),
        data
      );

      res
        .status(500)
        .sendFile(
          path.join(
            __dirname,
            "/../../assets",
            "thumb",
            fileName + width.toString() + height.toString() + ".jpg"
          )
        );
    })
    .catch((err) => {
      handleError(err, res);
    });
}

export default imagesRouter;
