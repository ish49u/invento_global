"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

type Product = {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
};

const categories = [
  "hardware-hub",
  "fasteners-and-screws",
  "handcrafted-bags",
  "copper-handicrafts",
];

const categoryIcons: { [key: string]: string } = {
  "hardware-hub": "/products/hardware_tools.jpg",
  "fasteners-and-screws": "/products/fastner.jpeg",
  "handcrafted-bags": "/products/handmade_bags.jpg",
  "copper-handicrafts": "/products/copper.jpg",
};

const categoryLabels: { [key: string]: string } = {
  "hardware-hub": "Hardware Hub",
  "fasteners-and-screws": "Fasteners & Screws",
  "handcrafted-bags": "Handcrafted Bags",
  "copper-handicrafts": "Copper Handicrafts",
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("hardware-hub");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://inventoglobal.com/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <Head>
        <title>
          Invento Screws, Hardware & Fasteners | Invento by Vee Kay Enterprises
        </title>
        <meta
          name="description"
          content="Discover premium screws, fasteners, brass hardware, and copper products by Invento — Invento by Vee Kay Enterprises. Trusted manufacturers and exporters in India."
        />
        <meta
          name="keywords"
          content="Invento screws, Invento, Invento by Vee Kay Enterprises, brass hinges, fasteners, hardware, copperware, hardware exporters India"
        />
        <meta
          property="og:title"
          content="Invento Screws & Hardware Products"
        />
        <meta
          property="og:description"
          content="High-quality screws, fasteners, and hardware from Invento by Vee Kay Enterprises — crafted with precision for industrial and commercial needs."
        />
        <meta
          property="og:image"
          content="https://www.inventoglobal.com/cover.jpg"
        />
        <meta
          property="og:url"
          content="https://www.inventoglobal.com/products"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="px-8 md:px-32 lg:py-24 lg:pt-24 pt-24 py-0">
        {/* Header */}
        <div className="flex items-center justify-center lg:mb-12 mb-6">
          <div className="text-black italic w-full text-center">
            <h2 className="lg:text-4xl text-2xl font-bold mb-4">
              Discover Our Finest Creation
            </h2>
            <p className="lg:text-lg text-sm text-gray-600">
              "Carefully crafted and curated just for you"
            </p>
          </div>
        </div>

        {/* Category Selection */}
        <div className="grid grid-cols-4 lg:grid-cols-4 gap-4 lg:mb-20 mb-10">
          {categories.map((cat) => (
            <div
              key={cat}
              className={`cursor-pointer flex flex-col items-center justify-center lg:p-4 p-2 font-bold rounded-lg border shadow-sm transition hover:shadow-md hover:bg-gray-500 ${
                selectedCategory === cat
                  ? "bg-primary text-secondary"
                  : "bg-white text-black"
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1); // reset to page 1 on category change
              }}
            >
              <div className="lg:w-14 lg:h-14 w-7 h-7 lg:mb-2 mb-0 rounded-full overflow-hidden flex items-center justify-center bg-white border">
                <img
                  src={categoryIcons[cat]}
                  alt={`${cat} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="lg:text-sm text-xs text-center font-medium">
                {categoryLabels[cat]}
              </p>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 gap-4">
          {paginatedProducts.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl shadow-md flex flex-col items-center text-center bg-white hover:shadow-lg transition"
            >
              <div className="lg:w-full w-[50%] lg:h-44 h-24 lg:mb-4 mb-2 overflow-hidden border-2 border-gray-200">
                <img
                  src={`https://inventoglobal.com/${product.image}`}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:p-4 p-2 lg:h-[50px] h-[25px]">
                <h2 className="lg:text-lg text-sm font-semibold text-black mb-0">
                  {product.title}
                </h2>
              </div>
              <div className="lg:h-[110px] h-[75px] flex flex-col justify-between">
                <p className="text-black lg:text-sm text-xs lg:mb-2 mb-1 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex justify-center">
                  <button
                    className="text-primary text-xs w-20 mt-1 mb-4 no-underline"
                    onClick={() => setActiveProduct(product)}
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="px-4 lg:pb-4 pb-2">
                <button className="bg-primary w-full text-white lg:px-4 px-2 py-2 rounded-lg hover:bg-opacity-80">
                  Get this product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal for Full Description */}
      {activeProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-[90%] p-6 relative animate-scaleIn">
            <button
              onClick={() => setActiveProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-black">
              {activeProduct.title}
            </h3>
            <p className="text-gray-800 text-sm whitespace-pre-wrap">
              {activeProduct.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
