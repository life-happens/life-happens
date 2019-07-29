const mongoose = require("mongoose");


const ticketSchema = mongoose.Schema({

  title: { 
    type: String, 
    required: true 
  },
 
  price: { 
    type: Number,
    default: 0 
  }
 
});

const Tickets = mongoose.model("Tickets", ticketSchema);

module.exports = { Tickets };