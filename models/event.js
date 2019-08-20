const mongoose = require("mongoose");


const eventSchema = mongoose.Schema({

  name: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  time: {
    type: String
  },
  location: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  inspirationalPhoto: { 
    type: Array 
  },
  ticketTitle: {
    type: String
  },
  ticketPrice: {
    type: String
  },
  ticketDescription: {
    type: String
  },
  discDate: {
    type: Date
  },
  percentOff: {
    type: Number 
  }
 
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
