const express = require("express");
const router = express.Router();

// ✅ Hardcoded admin credentials
const ADMIN_USERNAME = "ig@#@$39@#@";
const ADMIN_PASSWORD = "@#@#@98@$@232";

// Admin login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
