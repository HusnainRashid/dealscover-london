const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
      name: { 
        type: String
      },
      description: {
        type: String
      },
      genre: {
        type: String
      },
      URL: {
        type: String
      },
      image: {
        type: String
      },
      start_datetime: { 
        type: Date
      },
      postal_code: {
        type: String
      },
      address_line_one: {
        type: String
      },
      price: {
        type: Integer
      },
      legal_age_restriction: {
        type: Boolean
      }

    })


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;