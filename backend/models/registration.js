const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],  // Validation: Name is required
    trim: true,                            // Ensures no leading or trailing spaces
  },
  email: {
    type: String,
    required: [true, "Email is required"], // Validation: Email is required
    unique: true,                          // Ensures email uniqueness
    lowercase: true,                       // Converts email to lowercase before saving
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please fill a valid email address"], // Regex validation
  },
  eventDate: {
    type: Date,
    required: [true, "Event date is required"], // Validation: Event date is required
  },
  eventName: {
    type: String,
    required: [true, "Event name is required"], // Validation: Event name is required
    trim: true,                                // Ensures no leading or trailing spaces
  },
  imageUrl: {
    type: String,
    validate: {
      validator: function (v) {
        // Optional: Validate if the image URL is a valid URL
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(v);
      },
      message: "Invalid image URL", // Validation: Ensures image URL is valid
    },
  },
  message: {
    type: String,
    default: "", // Default empty string if no message provided
    trim: true,   // Ensures no leading or trailing spaces
  },
});

// Export the Registration model
module.exports = mongoose.model("Registration", RegistrationSchema);
