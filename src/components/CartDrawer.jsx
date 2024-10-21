import React from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = ({
  isOpen,
  onClose,
  items,
  type = "cart",
  onRemove,
  onUpdateQuantity,
}) => {
  const title = type === "cart" ? "Shopping Cart" : "Favorites";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-[400px] bg-white shadow-2xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header - fixed height */}
              <div className="flex-none flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List - scrollable */}
              <div className="flex-1 min-h-0 overflow-y-auto py-4">
                {items.length === 0 ? (
                  <div className="text-center text-gray-500 mt-10">
                    No items in {type === "cart" ? "cart" : "favorites"}
                  </div>
                ) : (
                  <div className="space-y-4 px-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-gray-600">{item.price} MAD</p>

                          {type === "cart" && (
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-1 hover:bg-gray-200 rounded"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  onUpdateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-1 hover:bg-gray-200 rounded"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          )}
                        </div>

                        <button
                          onClick={() => onRemove(item.id)}
                          className="p-2 hover:bg-gray-200 rounded-full self-start"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer - fixed height */}
              {type === "cart" && items.length > 0 && (
                <div className="flex-none border-t p-6 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>
                      {items.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )}
                      MAD
                    </span>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Checkout
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full border border-black py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
