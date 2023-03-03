const User = require("../models/user");

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
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: `User not found` });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error finding user" });
    }
  }
};
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
