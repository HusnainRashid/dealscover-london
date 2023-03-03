const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
        trim: true
      },
      ticketmasterId: {
        type: String,
        required: true,
        unique: true
      },
      url: {
        type: String,
        required: true
      },
      postCode:{
        type: String,
        required: true
      }, 
      geoPoint: {
        type: [Number],
        required: true
      },
      venueId:{
        type: String
      },
      venueAddress:{
        type: String,
        required: true
      },
      description:{
        type: String, 
        required: true
      },
      genre:{
        type: String,
        required: true
      },
      subgenre:{
        type: String
      },
      accessibility:{
        type: String 
      },
      isFamilyFriendly:{
        type: String, 
        enum: ["yes", "no", "none"]
      },
      ageRestricted:{
        type: String
      },
      images:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image'
      }],
      priceRange: [{
        min: {
          type: Number, 
          required: true
        },
        max: {
          type: Number, 
          required: true
        },
        
      }],   
    })


const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
