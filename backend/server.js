require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://Jhanvi21:<db_password>@cluster0.ffhsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error:", err));

// Schema and Model
const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  eventDate: { type: Date, required: true },
  imageUrl: { type: String },
  message: { type: String },
  eventName: { type: String, required: true },
});

const Registration = mongoose.model("Registration", RegistrationSchema);

// Routes
app.post("/register", async (req, res) => {
  const { name, email, eventDate, imageUrl, message, eventName } = req.body;

  try {
    const registration = new Registration({
      name,
      email,
      eventDate,
      imageUrl,
      message,
      eventName,
    });

    await registration.save();
    res.status(201).send({ message: "Registration successful!" });
  } catch (err) {
    console.error("Error saving registration:", err);
    res.status(500).send({ message: "Error registering. Try again later." });
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("API is running.");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
