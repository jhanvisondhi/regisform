const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  eventDate: Date,
  eventName: String,
  imageUrl: String,
  message: String,
});

module.exports = mongoose.model("Registration", RegistrationSchema);
