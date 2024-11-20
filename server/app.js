<<<<<<< HEAD
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
=======
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
>>>>>>> 4fd4e1bf7d5aba6ad52e4732b5da64a74b600468

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var folderpageRouter = require("./routes/folderpage");

var app = express();

<<<<<<< HEAD
app.use(cors())

app.use(logger('dev'));
=======
app.use(logger("dev"));
>>>>>>> 4fd4e1bf7d5aba6ad52e4732b5da64a74b600468
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/folderpage", folderpageRouter);

module.exports = app;
