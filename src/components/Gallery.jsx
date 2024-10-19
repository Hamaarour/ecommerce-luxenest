"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = [
    [
      "https://images.unsplash.com/photo-1685637619794-4f463ae79b3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1649373123712-bc9b39c527e8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533673662755-98c661c601a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvcm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcm5pdHVyZSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1651185410553-ef2ec59e52e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZvcm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybml0dXJlJTIwaG9tZSUyMHNxdWlyZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybml0dXJlJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3Dg",
      "https://images.unsplash.com/photo-1551133988-ad26c02243e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ybml0dXJlJTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcm5pdHVyZSUyMGhvbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1581404554128-5032fe7874be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    ],
  ];

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold text-center mb-2">OUR GALLERY</h1>
      <h4 className=" text-primary text-lg font-medium text-center mb-12">
        Discover beautiful moments
      </h4>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((src, imageIndex) => (
              <motion.div
                key={`${columnIndex}-${imageIndex}`}
                layoutId={`container-${columnIndex}-${imageIndex}`}
                onClick={() => setSelectedId(`${columnIndex}-${imageIndex}`)}
                className="cursor-pointer aspect-square "
              >
                <motion.img
                  src={src}
                  alt={`gallery-photo-${columnIndex}-${imageIndex}`}
                  className="w-full h-full rounded-lg object-cover flex-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {selectedId !== null && (
        <motion.div
          layoutId={`container-${selectedId}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setSelectedId(null)}
        >
          <motion.img
            src={
              images[parseInt(selectedId.split("-")[0])][
                parseInt(selectedId.split("-")[1])
              ]
            }
            alt={`gallery-photo-${selectedId}`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
