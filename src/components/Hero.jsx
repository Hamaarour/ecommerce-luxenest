import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-64px)] bg-hero bg-cover bg-center bg-no-repeat flex items-center justify-end">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative z-10 bg-secondary h-fit mr-20 px-8 py-12 flex flex-col space-y-4 rounded-md max-w-2xl">
        <p className="text-sm font-semibold text-gray-600 tracking-widest uppercase">
          New Arrival
        </p>
        <h1 className="text-4xl leading-[45px] text-center md:text-6xl font-bold text-primary md:text-left md:leading-[65px]">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-left text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <Link href="/shop">
          <button className="text-sm bg-primary text-white py-2 px-6 mt-4 hover:bg-amber-700 transition duration-300 w-fit rounded-md">
            BUY NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
