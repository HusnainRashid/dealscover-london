const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios');
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

const eventSchema = new mongoose.Schema({
  name: String,
});

const Event = mongoose.model("Event", eventSchema);

app.get("/events", async (req,res) => {
 try{
  const response = await axios.get(
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&startDateTime=2023-03-10T22:04:00Z&page=11&city=london&countryCode=GB"
  );

  const events = response.data._embedded.events;

  events.forEach(async (event) =>{
    const newEvent = new Event({
      name: event.name,
    });

    try {
      await newEvent.save();
      console.log(`saved event to the database: ${event.name}`);
    } catch(err){
      console.error(error)
    }
  });
  res.status(200).send('success');
} catch (error) {
  console.error(error);
  res.status(500).send('have a cuppa');
}

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
