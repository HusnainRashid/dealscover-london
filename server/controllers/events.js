const Event = require("../models/event");
const TokenGenerator = require("../models/token_generator");

const EventsController = {
    Index: (req, res) => {
        Event.find(async (err, events) => {
          if (err) {
            throw err;
          }
          const token = await TokenGenerator.jsonwebtoken(req.user_id)
          res.status(200).json({ events: events, token: token });
        });
      },

      Find: async (req, res) => {
        const id = req.params.id;
        try {
          const event = await Event.findById(id);
          if (!event) {
            return res.status(404).json({ message: `Event not found` });
          }
          res.status(200).json(event);
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Error finding event" });
        }
      }
}

module.exports = EventsController;