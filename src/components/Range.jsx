import Image from "next/image";

const categories = [
  { id: 1, name: "Dining", src: "/assets/home-images/range-1.png" },
  { id: 2, name: "Living", src: "/assets/home-images/range-2.png" },
  { id: 3, name: "Bedroom", src: "/assets/home-images/range-3.png" },
];

const Range = () => {
  return (
    <div className="flex flex-col items-center my-10">
      {/* Header Section */}
      <div className="w-full text-center mb-10">
        <h1 className="font-bold text-5xl pb-6">Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Categories Section */}
      <div className="flex gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center space-y-4"
          >
            <Image
              src={category.src}
              alt={category.name}
              width={300}
              height={300}
              className="rounded-lg object-cover"
            />
            <p className="text-xl font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Range;
