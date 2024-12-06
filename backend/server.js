require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");

// Initialize Firebase Admin
const serviceAccount = require("./nist-a4a42-firebase-adminsdk-ca537-0cf2e15861.json"); // path to your Firebase private key JSON file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Using Express built-in JSON middleware

// Routes
app.post("/register", async (req, res) => {
  const { name, email, eventDate, imageUrl, message, eventName } = req.body;

  // Log incoming data for debugging
  console.log("Received data:", req.body);

  // Simple validation for required fields
  if (!name || !email || !eventDate || !eventName) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    // Firestore document data
    const registrationData = {
      name,
      email,
      eventDate,
      imageUrl,
      message,
      eventName,
      timestamp: admin.firestore.FieldValue.serverTimestamp(), // Automatically adds server timestamp
    };

    // Save registration to Firestore
    await db.collection("registrations").add(registrationData);

    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error("Error saving registration:", err);
    res.status(500).json({ message: "Error registering. Try again later." });
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
