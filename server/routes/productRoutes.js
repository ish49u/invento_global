const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create product with image upload
router.post("/", upload.array("images", 10), async (req, res) => {
  try {
    const { title, description, category } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        error: {
          message: "Title and description are required.",
          code: "MISSING_FIELDS",
        },
      });
    }

    // ✅ THIS IS THE FIX
    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

    const product = new Product({
      title,
      description,
      category,
      images: imagePaths, // 🔁 Store array of images
    });

    await product.save();

    res.status(201).json(product);
  } catch (err) {
    console.error("Error creating product:", err.stack);
    res.status(500).json({
      error: {
        message: "Failed to create product.",
        code: "INTERNAL_ERROR",
      },
    });
  }
});

// Update product (does not update image here)
router.put("/:id", upload.array("images", 10), async (req, res) => {
  try {
    const updatedData = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
    };

    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map((file) => `/uploads/${file.filename}`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: "Failed to update product." });
  }
});


// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Failed to delete product." });
  }
});

module.exports = router;
