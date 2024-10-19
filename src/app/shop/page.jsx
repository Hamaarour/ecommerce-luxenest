"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "../data/products";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const ShopPage = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [itemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeView, setActiveView] = useState("grid");

  // Sort products based on selected option
  const sortedProducts = useMemo(() => {
    let sorted = [...PRODUCTS];
    switch (sortBy) {
      case "newest":
        // Assuming products have a dateAdded field. If not, you'll need to add it
        sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return sorted;
  }, [sortBy]);

  // Calculate pagination with sorted products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative h-48 bg-contact mb-12">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image src="/logo.png" width={60} height={50} alt="logo" />
          <h1 className="text-3xl font-bold mb-2">Shop</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-800">
              Home
            </a>
            <span>/</span>
            <span className="text-gray-500 font-bold">Shop</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b pb-4">
          <div className="flex items-center gap-4">
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
            </button>

            {/* View Options */}
            <div className="flex border rounded-lg">
              <button
                className={`px-4 py-2 ${
                  activeView === "grid" ? "bg-gray-100" : ""
                }`}
                onClick={() => setActiveView("grid")}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                </svg>
              </button>
              <button
                className={`px-4 py-2 border-l ${
                  activeView === "list" ? "bg-gray-100" : ""
                }`}
                onClick={() => setActiveView("list")}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Items Count */}
            <span className="text-gray-500 text-sm">
              Showing {indexOfFirstItem + 1}-
              {Math.min(indexOfLastItem, sortedProducts.length)} of{" "}
              {sortedProducts.length} items
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-full sm:w-48">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="w-full appearance-none border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <option value="newest">Newest Items</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>

        {/* Product Grid */}
        <div
          className={`${
            activeView === "grid"
              ? "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          } mb-8`}
        >
          {currentItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewType={activeView}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border ${
                currentPage === index + 1
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
