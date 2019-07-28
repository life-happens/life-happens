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
  location: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  inspirationalPhoto: { 
    type: String 
  }
 
});

const Event = mongoose.model("Event", eventSchema);

module.exports = { Event };
