const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Create contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        error: {
          message: "All fields (name, email, message) are required.",
          code: "MISSING_FIELDS",
          missing: !name ? "Name" : !email ? "Email" : "Message",
        },
      });
    }

    console.log("Received contact data:", req.body); // Debug log

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact message saved successfully." });
  } catch (err) {
    console.error("Error saving contact:", err.stack);
    res.status(500).json({
      error: {
        message: "Failed to save contact message.",
        code: "INTERNAL_ERROR",
        details: err.stack,
      },
    });
  }
});

// Get all contact messages
router.get("/", async (_req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching contact messages:", err.stack);
    res.status(500).json({
      error: {
        message: "Failed to fetch contact messages.",
        code: "INTERNAL_ERROR",
        details: err.stack,
      },
    });
  }
});

module.exports = router;
