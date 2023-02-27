const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const debug = require("debug")("london_budget:server");
const http = require("http");
const app = express();
const port = process.env.PORT || 8080;
const mongoDbUrl =
  process.env.MONGODB_URL || "mongodb://localhost/london_budget"; // consider changing the database if you don't want to interfere with the current user collection

app.use(cors());

mongoose.connect(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("connected to database");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "john doe",
  email: "johndoe@email.com",
  age: 33,
});

newUser.save(function (err, user) {
  if (err) return console.error(err);
  console.log(user.name + " saved to the database.");
});

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Now listening on " + bind);
  debug("Listening on " + bind);
}
