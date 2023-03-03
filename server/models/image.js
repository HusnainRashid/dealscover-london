const mongoose = require('mongoose');


const ImageSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event',
    required: true 
  }, 
  small: {
    type: String, 
    required: true
  }, 
  medium:{
    type: String,
    required: true
  }
});

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;