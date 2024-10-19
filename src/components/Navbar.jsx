"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, User, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../app/store/store";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const cart = useStore((state) => state.cart);
  const favorites = useStore((state) => state.favorites);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex gap-2 items-center">
            <Image src="/logo.png" width={40} height={30} alt="logo" />
            <Link href="/" className="text-2xl font-bold text-gray-900">
              LuxeNest
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="text-gray-500 hover:text-gray-900">
              Shop
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-gray-400 hover:text-gray-500"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="User account"
              className="text-gray-400 hover:text-gray-500"
            >
              <User size={20} />
            </button>
            <button
              aria-label="Favorites"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
            >
              <Heart size={20} />
            </button>
            <button
              aria-label="Shopping cart"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cart}
            type="cart"
            onRemove={(id) => useStore.getState().removeFromCart(id)}
            onUpdateQuantity={(id, quantity) => {
              if (quantity < 1) return;
              // Implement quantity update in your store
              useStore.getState().updateCartItemQuantity(id, quantity);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFavoritesOpen && (
          <CartDrawer
            isOpen={isFavoritesOpen}
            onClose={() => setIsFavoritesOpen(false)}
            items={favorites}
            type="favorites"
            onRemove={(id) => useStore.getState().removeFromFavorites(id)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
