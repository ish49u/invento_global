const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
 images: { type: [String], required: true }, // Accept multiple images
});

module.exports = mongoose.model("Product", productSchema);
