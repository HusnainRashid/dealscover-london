const User = require("../models/user");
const Event = require("../models/event");

const UsersController = {
  Create: (req, res) => {
    console.log("express is listening");
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "User created successfully" });
      }
    });
  },

  Find: async (req, res) => {
    const email = req.query.email;
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        res.status(500).json({ message: "Error finding the right user" });
      } else if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(201).json({ user });
      }
    });
  },
  // addToFavourite: async (req, res) => { 
  //   const favourite_event = Event.findById({_id: req.body._id}, async (err) => {
  //     if (err) {
  //       throw err;
  //     } else {
  //       if (!favourite_event.events.includes(req.event_id)) {
  //         req.body.events;
  //         req.body.events.push(favourite_event);

  //         const token = await TokenGenerator.jsonwebtoken(req.user_id)
  //         res.status(201).json({message: "event added to favourites", token: token, events: req.body.events})
        }
  //     }
  //   });
  // }



//     try {
//       const user = await User.findUser{(email: email)};
//       if (!user) {
//         return res.status(404).json({ message: `User not found` });
//       }
//       res.json(user);
//       return res.status(200).json({ message: "User found successfully" });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Error finding user" });
//     }
//   },
// };

module.exports = UsersController;
