"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, User, Heart, ShoppingCart } from "lucide-react";
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
  const [showTooltip, setShowTooltip] = useState("");
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
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
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Github"
              className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() =>
                window.open(
                  "https://github.com/Hamaarour/ecommerce-luxenest",
                  "_blank"
                )
              }
              onMouseEnter={() => setShowTooltip("Source Code")}
              onMouseLeave={() => setShowTooltip("")}
            >
              <Github size={20} />
              {showTooltip && (
                <span className="absolute -left-10 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2">
                  {showTooltip}
                </span>
              )}
            </button>
            <button
              aria-label="User account"
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User size={20} />
            </button>
            <button
              aria-label="Favorites"
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative"
              onClick={() => setIsFavoritesOpen(!isFavoritesOpen)}
            >
              <Heart size={20} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favorites.length}
                </span>
              )}
            </button>
            <button
              aria-label="Shopping cart"
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <div className="flex space-x-4 px-3 py-2">
                  <button
                    aria-label="Search"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() =>
                      window.open(
                        "https://github.com/Hamaarour/ecommerce-luxenest",
                        "_blank"
                      )
                    }
                    onMouseEnter={() => setShowTooltip("Source Code")}
                    onMouseLeave={() => setShowTooltip("")}
                  >
                    <Github size={20} />
                  </button>
                  <button
                    aria-label="User account"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <User size={20} />
                  </button>
                  <button
                    aria-label="Favorites"
                    className="text-gray-400 hover:text-gray-500 relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsFavoritesOpen(true);
                    }}
                  >
                    <Heart size={20} />
                    {favorites.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {favorites.length}
                      </span>
                    )}
                  </button>
                  <button
                    aria-label="Shopping cart"
                    className="text-gray-400 hover:text-gray-500 relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCartOpen(true);
                    }}
                  >
                    <ShoppingCart size={20} />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        {cart.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cart Drawer */}
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
              useStore.getState().updateCartItemQuantity(id, quantity);
            }}
          />
        )}
      </AnimatePresence>

      {/* Favorites Drawer */}
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
