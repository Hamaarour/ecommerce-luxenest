"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  // Take only the first 8 products
  const displayProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl text-center font-bold mb-10 uppercase">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/shop">
          <button className="bg-primary text-white py-3 px-6 font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none">
            Show more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
