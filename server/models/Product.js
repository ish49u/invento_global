const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
});

// ✅ THIS LINE ensures it doesn't reuse the old schema
module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
