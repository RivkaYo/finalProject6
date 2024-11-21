var express = require("express");
var router = express.Router();
var fs = require("fs");
const path = require('path');


/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/login", function (req, res) {
  // Read the users from the database
  fs.readFile("./public/database/db.json", "utf8", function (error, data) {
    if (error) {
      console.log("error ", error);
      return res.status(500).send("Internal Server Error");
    } else {
      let allusers = JSON.parse(data);
      let arr = allusers.users;
      // Check if the user exists
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].username === req.body.username) {
          // If password matches, log the user in
          if (arr[i].password === req.body.password) {
            console.log("Logged in successfully");
            return res
              .status(200)
              .json({ message: "Login successful", user: arr[i] });
          } else {
            console.log("Password mismatch");
            return res.status(400).json({ message: "Incorrect password" });
          }
        }
      }

      // If user doesn't exist, create new user
      const newUser = {
        userId: arr.length + 1, // Or generate a unique user ID
        username: req.body.username,
        password: req.body.password,
      };
      arr.push(newUser);

      // Save the updated user list back to the file
      allusers.users = arr;


    
      fs.mkdir(`./public/files/${req.body.username}/folder1`, { recursive: true }, (err) => {
        if (err) {
          return console.error('Error creating folder:', err);
        }
        console.log('New folder created successfully!');
      });




      fs.writeFile(
        "./public/database/db.json",
        JSON.stringify(allusers),
        function (err) {
          if (err) {
            console.log("Error saving new user:", err);
            return res.status(500).send("Internal Server Error");
          } else {
            console.log("New user added successfully!");
            return res
              .status(201)
              .json({ message: "New user created", user: newUser });
          }
        }
      );
    }
  });
});

router.get("/:username", function (req, res) {
  let username = req.params.username;
  console.log("username: ", username);
  fs.readdir(`./public/files/${username}`, (error, data) => {
    if (error) {
      console.log("error: ", error);
      throw error;
    } else res.send(data);
  });
});

router.get("/:username/:foldername", function (req, res) {
  let username = req.params.username;
  console.log('username: ', username);
  let foldername = req.params.foldername;
  console.log('foldername: ', foldername);

  fs.readdir(`./public/files/${username}/${foldername}`, (error, data) => {
    if (error) {
      console.log('error: ', error);
      throw error
    } else res.send(data)
  })
})

router.get("/:username/:foldername/:filename", function (req, res) {
  let username = req.params.username;
  console.log('username: ', username);
  let foldername = req.params.foldername;
  console.log('foldername: ', foldername);
  let filename = req.params.filename;
  console.log('filename: ', filename);
  fs.readFile(`./public/files/${username}/${foldername}/${filename}`, (error, data) => {
    if (error) {
      console.log('error: ', error);
      throw error
    } else res.send(data)
  })
})


module.exports = router;
