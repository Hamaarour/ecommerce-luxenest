"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share, CheckCheck } from "lucide-react";
import { formatPrice } from "../app/data/products";
import { toast } from "sonner";
import useStore from "../app/store/store";

const ProductCard = ({ product }) => {
  const {
    name,
    description,
    price,
    originalPrice,
    images,
    discount,
    isNew,
    id,
  } = product;

  const [isShared, setIsShared] = useState(false);
  const [showTooltip, setShowTooltip] = useState("");

  // Get store actions and state
  const {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
  } = useStore();

  // Check if product is in favorites
  const isFavorite = favorites.some((item) => item.id === id);

  // Check if product is in cart
  const isInCart = cart.some((item) => item.id === id);

  // Handle favorite toggle
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(id);
      toast.info("Removed from favorites");
    } else {
      addToFavorites(product);
      toast.success("Added to favorites!");
    }
  };

  // Handle share button click
  const handleShareClick = async () => {
    const url = `${window.location.origin}/products/${id}`;

    try {
      await navigator.clipboard.writeText(url);
      setIsShared(true);
      toast.success("Link copied to clipboard!");

      setTimeout(() => {
        setIsShared(false);
      }, 2000);
    } catch (err) {
      console.error("Error copying link:", err);
      toast.error("Failed to copy link");
    }
  };


  // Handle Add to Cart
  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(id);
      toast.info("Removed from cart");
    } else {
      addToCart({ ...product, quantity: 1 });
      toast.success("Added to cart!");
    }
  };

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50 relative">
      <div className="relative aspect-[4/4] w-full">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm z-10">
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 bg-emerald-500 text-white px-2 py-1 rounded-full text-sm z-10">
            New
          </span>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/products/${id}`}
            className="bg-white text-black px-6 py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-100"
          >
            View Product
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg hover:text-primary transition-all">
          {name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 pb-4 flex items-center gap-4">
        <button
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-lg transition-colors w-full sm:w-auto ${isInCart
              ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800"
            }`}
        >
          {isInCart ? "Remove from cart" : "Add to cart"}
        </button>

        <div className="flex items-center gap-2 text-gray-600">
          <button
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            onClick={handleFavoriteClick}
            onMouseEnter={() => setShowTooltip("favorite")}
            onMouseLeave={() => setShowTooltip("")}
            className="relative hover:text-black transition-colors duration-300"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${isFavorite
                  ? "fill-red-500 text-red-500 scale-110"
                  : "hover:scale-110"
                }`}
            />
            {showTooltip === "favorite" && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </span>
            )}
          </button>

          <button
            aria-label="Copy product link"
            onClick={handleShareClick}
            onMouseEnter={() => setShowTooltip("share")}
            onMouseLeave={() => setShowTooltip("")}
            className="relative hover:text-black transition-colors duration-300"
          >
            {isShared ? (
              <CheckCheck className="w-5 h-5 text-green-500 animate-bounce" />
            ) : (
              <Share className="w-5 h-5 hover:scale-110 transition-transform duration-300" />
            )}
            {showTooltip === "share" && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                {isShared ? "Copied!" : "Copy link"}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
