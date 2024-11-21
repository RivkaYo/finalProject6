var express = require("express");
const fs = require("fs");
var router = express.Router();
const path = require("path");

router.get("/", function (req, res) {
  res.send("respond with a resource. entered file page");
});

router.post("/", function (req, res) {
  const { username, fileName, folderName } = req.body;

  if (!username || !fileName || !folderName) {
    return res.status(400).send("Username and file name are required");
  }

  const filePath = path.join(
    __dirname,
    "..",
    "public",
    "files",
    username,
    folderName,
    fileName
  );
  console.log("filePath: ", filePath);
  try {
    fs.writeFileSync(filePath, "", { encoding: "utf8" });
    console.log("New file created successfully at", filePath);
    return res.status(201).send({ message: "File created successfully" });
  } catch (err) {
    console.error("Error creating file:", err);
    return res.status(500).send("Error creating file");
  }
});

module.exports = router;
