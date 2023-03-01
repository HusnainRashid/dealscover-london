const User = require("../models/user");
// const Event = require("../models/event");
const TokenGenerator = require("../models/token_generator");

const SessionsController = {
  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then(async (user) => {
      if (!user) {
        console.log("auth error: user not found");
        res.status(401).json({ message: "auth error" });
      } else if (user.password !== password) {
        console.log("auth error: passwords do not match");
        res.status(401).json({ message: "auth error" });
      } else {
        const token = await TokenGenerator.jsonwebtoken(user.id);
        res.status(201).json({ token: token, message: "OK" });
      }
    });
  },
  // addToFavourites: (req, res) => {
  //   const event = req.body.event;

  //   Event.findOne({ event: event }).then(async (user) => {
  //     if (!user) {
  //       console.log("favourites error: event not found in the favourites");
  //       res.status(401).json({ message: "favourites error" });
  //     } else if (user.event !== event) {
  //       console.log("favourites error: event does not match the favourites");
  //       res.status(401).json({ message: "auth error" });
  //     } else {
  //       const token = await TokenGenerator.jsonwebtoken(event.id);
  //       res.status(201).json({ token: token, message: "OK" });
  //     }
  //   });
  // },
};

module.exports = SessionsController;
