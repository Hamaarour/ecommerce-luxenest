// data/products.js
export const PRODUCTS = [
  {
    id: 1,
    name: "Syltherine",
    description:
      "Experience ultimate comfort with our signature café chair. Crafted with premium beechwood and featuring ergonomic metal supports, this piece combines Moroccan artisanal tradition with modern design. Perfect for both residential and commercial spaces.",
    price: 2500,
    originalPrice: 3500,
    images: [
      "/assets/products-image/p1.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
    ],
    discount: 30,
    isNew: false,
    specifications: [
      { name: "Category", value: "Chair" },
      { name: "Material", value: "Beechwood, Brushed Steel" },
      { name: "Style", value: "Modern Moroccan" },
      { name: "Dimensions", value: "H: 85cm, W: 54cm, D: 58cm" },
      { name: "Weight Capacity", value: "150 kg" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Ahmed M.",
        comment: "Absolutely stunning chair! The craftsmanship is exceptional.",
        date: "2024-03-15",
      },
      {
        rating: 4,
        author: "Sofia L.",
        comment: "Beautiful design and very comfortable. Perfect for my café.",
        date: "2024-02-28",
      },
    ],
  },
  {
    id: 2,
    name: "Lunar Lounger",
    description:
      "Elevate your lounging experience with our Lunar Lounger. Upholstered in high-quality velvet and built on a sturdy steel frame, this piece exudes modern elegance, perfect for living rooms or sophisticated lounges.",
    price: 4800,
    originalPrice: 6000,
    images: [
      "/assets/products-image/p2.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
    ],
    discount: 20,
    isNew: true,
    specifications: [
      { name: "Category", value: "Sofa" },
      { name: "Material", value: "Velvet, Steel" },
      { name: "Style", value: "Contemporary" },
      { name: "Dimensions", value: "H: 75cm, W: 180cm, D: 85cm" },
      { name: "Seating Capacity", value: "3 People" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Nora A.",
        comment: "A luxurious addition to my home! The velvet feels amazing.",
        date: "2024-04-10",
      },
      {
        rating: 4,
        author: "Karim D.",
        comment:
          "Stylish and comfortable, though the delivery took a bit long.",
        date: "2024-03-25",
      },
    ],
  },
  {
    id: 3,
    name: "Orion Coffee Table",
    description:
      "This sleek coffee table, with its minimalist glass top and solid oak legs, adds a touch of sophistication to any modern living room. Its compact design makes it ideal for smaller spaces.",
    price: 1900,
    originalPrice: 2500,
    images: [
      "/assets/products-image/p3.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
    ],
    discount: 24,
    isNew: false,
    specifications: [
      { name: "Category", value: "Coffee Table" },
      { name: "Material", value: "Glass, Oak" },
      { name: "Style", value: "Minimalist" },
      { name: "Dimensions", value: "H: 45cm, W: 90cm, D: 50cm" },
      { name: "Weight Capacity", value: "100 kg" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Layla K.",
        comment: "Perfect size for my apartment, and the design is stunning!",
        date: "2024-05-02",
      },
      {
        rating: 3,
        author: "Youssef F.",
        comment: "Nice table but not as sturdy as I hoped.",
        date: "2024-04-12",
      },
    ],
  },
  {
    id: 4,
    name: "Celestial Floor Lamp",
    description:
      "Illuminate your space with the Celestial Floor Lamp. Its sleek, arched design and adjustable brightness make it a practical and stylish choice for modern interiors.",
    price: 1200,
    originalPrice: 1500,
    images: [
      "/assets/products-image/p4.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
      "/assets/products-image/p1-1.png",
      "/assets/products-image/p1-2.png",
    ],
    discount: 20,
    isNew: true,
    specifications: [
      { name: "Category", value: "Lighting" },
      { name: "Material", value: "Metal, Fabric Shade" },
      { name: "Style", value: "Modern" },
      { name: "Dimensions", value: "H: 180cm, Shade Diameter: 50cm" },
      { name: "Brightness", value: "Adjustable" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Maya E.",
        comment:
          "Looks amazing in my living room, and the adjustable light is great!",
        date: "2024-06-01",
      },
      {
        rating: 4,
        author: "Omar R.",
        comment: "Very stylish, but it’s a bit taller than I expected.",
        date: "2024-05-20",
      },
    ],
  },
  {
    id: 5,
    name: "Lunar Pendant Light",
    description:
      "Bring elegance to your home with the Lunar Pendant Light. Featuring a round, frosted glass design and adjustable cord, this light adds a soft glow to any room.",
    price: 800,
    originalPrice: 1000,
    images: [
      "/assets/products-image/p5.png",
      "/assets/products-image/p2-1.png",
      "/assets/products-image/p2-2.png",
    ],
    discount: 20,
    isNew: false,
    specifications: [
      { name: "Category", value: "Lighting" },
      { name: "Material", value: "Glass, Steel" },
      { name: "Style", value: "Minimalist" },
      { name: "Dimensions", value: "Diameter: 40cm, Adjustable Cord" },
      { name: "Light Source", value: "LED Bulb Included" },
    ],
    reviews: [
      {
        rating: 4,
        author: "Sophia L.",
        comment: "Beautiful design, perfect for my dining area!",
        date: "2024-04-15",
      },
      {
        rating: 5,
        author: "James T.",
        comment: "Great quality, the lighting is soft and warm.",
        date: "2024-05-10",
      },
    ],
  },
  {
    id: 6,
    name: "Solar Arc Floor Lamp",
    description:
      "The Solar Arc Floor Lamp features a curved silhouette that casts a warm, diffused light. Its sleek, contemporary design makes it a standout piece in any room.",
    price: 1100,
    originalPrice: 1350,
    images: [
      "/assets/products-image/p6.png",
      "/assets/products-image/p3-1.png",
      "/assets/products-image/p3-2.png",
    ],
    discount: 18,
    isNew: true,
    specifications: [
      { name: "Category", value: "Lighting" },
      { name: "Material", value: "Brushed Steel" },
      { name: "Style", value: "Contemporary" },
      { name: "Dimensions", value: "H: 170cm, Shade Diameter: 45cm" },
      { name: "Brightness", value: "Non-dimmable" },
    ],
    reviews: [
      {
        rating: 4,
        author: "Lara B.",
        comment: "Love the design, but wish it had dimmable lights.",
        date: "2024-07-22",
      },
      {
        rating: 5,
        author: "Kyle M.",
        comment: "Perfect for my study corner, adds a nice ambiance.",
        date: "2024-08-03",
      },
    ],
  },
  {
    id: 7,
    name: "Stellar Desk Lamp",
    description:
      "Compact and versatile, the Stellar Desk Lamp is ideal for workspaces. It features a pivoting head for directional lighting and a sleek matte finish.",
    price: 350,
    originalPrice: 450,
    images: [
      "/assets/products-image/p7.png",
      "/assets/products-image/p4-1.png",
      "/assets/products-image/p4-2.png",
    ],
    discount: 22,
    isNew: false,
    specifications: [
      { name: "Category", value: "Lighting" },
      { name: "Material", value: "Aluminum" },
      { name: "Style", value: "Modern" },
      { name: "Dimensions", value: "H: 50cm, Base Diameter: 20cm" },
      { name: "Adjustable Head", value: "Yes" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Alex H.",
        comment: "Perfect size for my desk and really bright.",
        date: "2024-02-19",
      },
      {
        rating: 4,
        author: "Dana W.",
        comment: "Great for tasks, but I wish it came in more colors.",
        date: "2024-03-11",
      },
    ],
  },
  {
    id: 8,
    name: "Nova Table Lamp",
    description:
      "The Nova Table Lamp blends a classic silhouette with modern materials. Featuring a marble base and a fabric shade, it provides a warm and cozy light for any space.",
    price: 550,
    originalPrice: 650,
    images: [
      "/assets/products-image/p5.png",
      "/assets/products-image/p5-1.png",
      "/assets/products-image/p5-2.png",
    ],
    discount: 15,
    isNew: true,
    specifications: [
      { name: "Category", value: "Lighting" },
      { name: "Material", value: "Marble, Fabric" },
      { name: "Style", value: "Classic" },
      { name: "Dimensions", value: "H: 60cm, Shade Diameter: 30cm" },
      { name: "Bulb Type", value: "Incandescent" },
    ],
    reviews: [
      {
        rating: 5,
        author: "Emily F.",
        comment: "Such a classy addition to my living room!",
        date: "2024-01-25",
      },
      {
        rating: 3,
        author: "Michael P.",
        comment: "Beautiful but a bit too heavy to move around.",
        date: "2024-02-10",
      },
    ],
  },
];

// Helper function to get a product by ID
export const getProductById = (id) => {
  return PRODUCTS.find((product) => product.id === Number(id)) || null;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: false,
  }).format(price);
};
