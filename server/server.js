const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

// CORS configuration to allow multiple origins
const allowedOrigins = ["https://inventoglobal.com", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);  // Allow the origin
      } else {
        callback(new Error("Not allowed by CORS"));  // Reject the origin
      }
    },
    methods: "GET,POST,PUT,DELETE",
  })
);

// Body parser middleware to handle JSON requests
app.use(express.json());

// Ensure uploads folder exists, and create it if necessary
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  try {
    fs.mkdirSync(uploadDir);
    console.log("Uploads directory created");
  } catch (err) {
    console.error("Error creating uploads directory:", err);
  }
}

// Serve static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
const MONGODB_URI = "mongodb+srv://invento-veekay:inventovee78@cluster0.pum7fkw.mongodb.net/inventoDB";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Import routes
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");


// Use routes
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/contact", contactRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
