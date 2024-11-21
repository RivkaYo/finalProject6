var express = require("express");
const fs = require("fs");
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource. entered folder page");
});

router.post("/", function (req, res) {
  const { username, folderName } = req.body;

  if (!username || !folderName) {
    return res.status(400).send("Username and folder name are required");
  }

  const folderPath = path.join(
    __dirname,
    "..",
    "public",
    "files",
    username,
    folderName
  );
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating folder:", err);
      return res.status(500).send("Error creating folder");
    }

    console.log("New folder created successfully at", folderPath);
    return res.status(201).send({ message: "Folder created successfully" });
  });
});

module.exports = router;
