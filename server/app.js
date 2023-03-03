const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
const axios = require("axios");
// const router = express.Router();
const tokensRouter = require("./routes/tokens");
const usersRouter = require("./routes/users");
const apiEventsRouter = require("./routes/api_events");
const eventsRouter = require("./routes/events");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());



// setup for receiving JSON
app.use(express.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

// route setup
app.use("/tokens", tokensRouter);
app.use("/users", usersRouter);
app.use("/api/events", apiEventsRouter);
app.use("/events", eventsRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: "server error" });
});

// app.get("/events", async (req, res) =>{
//   try {
//     const events = await Event.find();
//     res.json(events);
//   }catch (error){
//     console.log(error);
//     res.status(500).send("Internal server error")
//   }
// })


module.exports = app;



