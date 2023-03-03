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
      }
}

module.exports = EventsController;