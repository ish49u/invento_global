"use client";
import { useState, useEffect } from "react";

const categories = [
  "hardware-hub",
  "fasteners-and-screws",
  "handcrafted-bags",
  "copper-handicrafts",
];

// Comment type definition
interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
}

export default function Dashboard() {
  // === Login related state ===
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // Hardcoded credentials
  const validUsers = [
    { username: "inventoadminglobal", password: "ig$@9export" },
  ];

  const [category, setCategory] = useState("hardware-hub");
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageFiles: [] as File[],
    moreDetails: "", // <-- Added this
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<
    "products" | "comments"
  >("products");

  const [products, setProducts] = useState<any[]>([]);
  const [comments, setComments] = useState<ContactMessage[]>([]);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error" | null;
  } | null>(null);

  // Added state for selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  useEffect(() => {
    if (loggedIn) {
      // Fetch products to display (replace with your API endpoint)
      const fetchProducts = async () => {
        try {
          const response = await fetch(
            "https://inventoglobal.com/api/products"
          );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          setNotification({
            message: "Failed to load products.",
            type: "error",
          });
        }
      };
      fetchProducts();

      // Fetch comments
      const fetchComments = async () => {
        try {
          const response = await fetch("https://inventoglobal.com/api/contact");
          const data: ContactMessage[] = await response.json();
          setComments(data);
        } catch (error) {
          setNotification({
            message: "Failed to load comments.",
            type: "error",
          });
        }
      };
      fetchComments();
    }
  }, [loggedIn]);

  // Login handler
  const handleLogin = () => {
    const foundUser = validUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setLoggedIn(true);
      setNotification(null);
    } else {
      setNotification({
        message: "Invalid username or password",
        type: "error",
      });
    }
  };

  const resetForm = () => {
    setForm({ title: "", description: "", imageFiles: [], moreDetails: "" });
    setPreviewUrls([]);
    setEditId(null);
  };

  const handleAdd = async () => {
    if (!form.title || !form.description) {
      setNotification({
        message: "Title and Description are required.",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", category);
    formData.append("moreDetails", form.moreDetails);
    form.imageFiles.forEach((file) => {
      formData.append("images", file); // Must match backend field name
    });

    try {
      await fetch("https://inventoglobal.com/api/products", {
        method: "POST",
        body: formData,
      });
      setNotification({
        message: "Product added successfully!",
        type: "success",
      });
      resetForm();
      // Re-fetch products after adding
      const response = await fetch("https://inventoglobal.com/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setNotification({
        message: "Failed to add product. Please try again.",
        type: "error",
      });
    }

    // Hide the notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleUpdate = async () => {
    if (!editId || !form.title || !form.description) {
      setNotification({
        message: "Title and Description are required.",
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", category);
    formData.append("moreDetails", form.moreDetails);

    form.imageFiles.forEach((file) => {
      formData.append("images", file); // Must match backend field name
    });

    try {
      await fetch(`https://inventoglobal.com/api/products/${editId}`, {
        method: "PUT",
        body: formData,
      });
      setNotification({
        message: "Product updated successfully!",
        type: "success",
      });
      resetForm();
      // Re-fetch products after update
      const response = await fetch("https://inventoglobal.com/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setNotification({
        message: "Failed to update product. Please try again.",
        type: "error",
      });
    }

    // Hide the notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`https://inventoglobal.com/api/products/${id}`, {
        method: "DELETE",
      });
      setNotification({
        message: "Product deleted successfully!",
        type: "success",
      });
      // Re-fetch products after deletion
      const response = await fetch("https://inventoglobal.com/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setNotification({
        message: "Failed to delete product. Please try again.",
        type: "error",
      });
    }

    // Hide the notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  const handleEdit = (product: any) => {
    setForm({
      title: product.title,
      description: product.description,
      imageFiles: [],
      moreDetails: product.moreDetails || "",
    });

    setCategory(product.category);
    setEditId(product._id);

    // Generate preview URLs from product.images or product.image
    if (product.images && Array.isArray(product.images)) {
      setPreviewUrls(
        product.images.map((img: string) => `https://inventoglobal.com${img}`)
      );
    } else if (product.image) {
      setPreviewUrls([`https://inventoglobal.com${product.image}`]);
    } else {
      setPreviewUrls([]);
    }

    // Scroll to top when editing
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===== Render =====
  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-80">
          <h2 className="text-xl font-bold mb-6 text-center text-black">
            Login to Dashboard
          </h2>
          {notification && (
            <div
              className={`p-2 mb-4 rounded text-white ${
                notification.type === "error" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {notification.message}
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-black">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold text-black">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-red-900 text-white p-2 rounded hover:bg-red-700"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-screen pt-24">
      {/* Sidebar */}
      <div className="w-1/4 bg-red-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <button
          onClick={() => setSelectedSection("products")}
          className="bg-white text-black w-full p-2 rounded font-semibold mb-6"
        >
          Manage Products
        </button>
        <button
          onClick={() => setSelectedSection("comments")}
          className="bg-white text-black w-full p-2 rounded font-semibold"
        >
          Comments
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full p-8 overflow-y-auto bg-gray-100 text-black">
        {selectedSection === "products" ? "" : ""}

        {/* Notification */}
        {notification && (
          <div
            className={`p-4 mb-4 rounded text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}

        {selectedSection === "products" ? (
          <div>
            {/* Product Form */}
            <div className="bg-white p-6 rounded shadow mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {editId ? "Edit Product" : "Add New Product"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border p-2 rounded"
                  placeholder="Title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <input
                  className="border p-2 rounded"
                  placeholder="Description"
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
                <select
                  className="border p-2 rounded"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <input
                  className="border p-2 rounded"
                  type="file"
                  multiple
                  onChange={(e) => {
                    const files = e.target.files
                      ? Array.from(e.target.files)
                      : [];

                    setForm({
                      ...form,
                      imageFiles: files,
                    });

                    // Generate preview URLs
                    const urls = files.map((file) => URL.createObjectURL(file));
                    setPreviewUrls(urls);
                  }}
                />
              </div>

              {previewUrls.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {previewUrls.map((url, index) => (
                    <img
                      key={index}
                      src={
                        typeof url === "string" ? url : URL.createObjectURL(url)
                      }
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded border"
                    />
                  ))}
                </div>
              )}

              <div className="mt-4">
                {editId ? (
                  <>
                    <button
                      onClick={handleUpdate}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(editId)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleAdd}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Add Product
                  </button>
                )}
              </div>
            </div>

            {/* Category Buttons */}
            <div className="mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)} // Update selected category
                  className="text-sm px-2 py-1 bg-gray-500 text-white rounded mr-4"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Products by Selected Category */}
            {selectedCategory && (
              <h3 className="text-2xl font-bold mb-4">
                {selectedCategory} Products
              </h3>
            )}

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-4 rounded shadow hover:shadow-md transition"
                >
                  <h3 className="text-xs font-bold">{product.title}</h3>
                  <p className="text-xs text-gray-600 h-20">
                    {product.description}
                  </p>
                  {product.images &&
                  Array.isArray(product.images) &&
                  product.images.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {product.images.map((img: string, index: number) => (
                        <img
                          key={index}
                          src={`https://inventoglobal.com${img}`}
                          alt={`${product.title} image ${index + 1}`}
                          className="w-full h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  ) : product.image ? (
                    <img
                      src={`https://inventoglobal.com${product.image}`}
                      alt={product.title}
                      className="w-full h-20 object-cover mt-2 rounded"
                    />
                  ) : null}

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Comments List */}
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment._id} className="bg-white p-4 rounded shadow">
                  <p>
                    <strong>Name:</strong> {comment.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {comment.email}
                  </p>
                  <p>{comment.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
