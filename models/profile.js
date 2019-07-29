const mongoose = require("mongoose");


const profileSchema = mongoose.Schema({

  about: { 
    type: String, 
    required: true 
  },
 
  profileImage: { 
    type: String 
  }
 
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile };