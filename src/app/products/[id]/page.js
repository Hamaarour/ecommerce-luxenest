"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Heart,
  Share2,
  Star,
  StarHalf,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import { PRODUCTS, getProductById, formatPrice } from "../../data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlistActive, setIsWishlistActive] = useState(false);

  const sizes = ["S", "M", "L", "XL"];
  const colors = [
    { name: "Charcoal", class: "bg-gray-900" },
    { name: "Ocean", class: "bg-blue-600" },
    { name: "Sahara", class: "bg-amber-700" },
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = getProductById(id);
        if (!foundProduct) throw new Error("Product not found");
        setProduct(foundProduct);
        // Set default color and size
        if (colors.length > 0) setSelectedColor(colors[0]);
        // if (sizes.length > 0) setSelectedSize(sizes[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      color: selectedColor?.name,
      size: selectedSize,
      image: product.images[0],
    };
    console.log("Adding to cart:", cartItem);
    // Add your cart logic here
  };

  const toggleWishlist = () => {
    setIsWishlistActive(!isWishlistActive);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(
          <StarHalf
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  const getRelatedProducts = () => {
    return PRODUCTS.filter((p) => p.id !== parseInt(id)).slice(0, 4);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {error || "Product Not Found"}
          </h1>
          <p className="text-gray-600">
            Please try another product or return to the shop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:text-gray-900">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/shop" className="hover:text-gray-900">
              Shop
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-bold">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={product.images[selectedImageIndex]}
              alt={`${product.name} - View ${selectedImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {product.discount && (
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                New
              </span>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 ${
                  selectedImageIndex === index ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover hover:opacity-80 transition-opacity"
                  sizes="25vw"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Price Section */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-3xl font-bold">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.discount && (
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                Save {product.discount}%
              </span>
            )}
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex">{renderStars(4.5)}</div>
            <span className="text-gray-600">4.5 (128 reviews)</span>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Color</h3>
            <div className="flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor?.name === color.name
                      ? "ring-2 ring-offset-2 ring-gray-900"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          {/* <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Size</h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div> */}

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quantity</h3>
            <div className="flex items-center border rounded-lg w-fit">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`p-3 border rounded-lg ${
                isWishlistActive
                  ? "bg-red-50 border-red-200"
                  : "hover:bg-gray-50"
              }`}
            >
              <Heart
                className={`w-6 h-6 ${
                  isWishlistActive ? "text-red-500 fill-red-500" : ""
                }`}
              />
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-50">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          {/* Shipping Information */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-gray-600" />
                <div>
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-sm text-gray-600">Orders over 1000 DH</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gray-600" />
                <div>
                  <h4 className="font-medium">Secure Payment</h4>
                  <p className="text-sm text-gray-600">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-gray-600" />
                <div>
                  <h4 className="font-medium">Easy Returns</h4>
                  <p className="text-sm text-gray-600">30 Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Tabs */}
          <div className="border-t pt-8">
            <div className="flex gap-8 border-b">
              {["description", "specifications", "reviews"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 px-2 capitalize ${
                    activeTab === tab
                      ? "border-b-2 border-gray-900 font-medium"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="py-6">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-gray-600">{product.description}</p>
                </div>
              )}
              {activeTab === "specifications" && (
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.specifications?.map((spec, index) => (
                    <div key={index} className="border-b pb-4">
                      <dt className="font-medium text-gray-900">{spec.name}</dt>
                      <dd className="mt-1 text-gray-600">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {product.reviews?.map((review, index) => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-gray-600">|</span>
                        <span className="font-medium">{review.author}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <span className="text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getRelatedProducts().map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
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

export default ProductPage;
