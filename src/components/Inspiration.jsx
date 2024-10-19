"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/styles/swiper.css";

const rooms = [
  {
    id: "01",
    name: "Bed Room",
    title: "Inner Peace",
    img: "/assets/inspiration/ins-1.png",
  },
  {
    id: "02",
    name: "Living Room",
    title: "Stylish Comfort",
    img: "/assets/inspiration/ins-1.png",
  },
  {
    id: "03",
    name: "Kitchen",
    title: "Culinary Haven",
    img: "/assets/inspiration/ins-1.png",
  },
  {
    id: "04",
    name: "Bathroom",
    title: "Serene Oasis",
    img: "/assets/inspiration/ins-1.png",
  },
];

const Inspiration = () => {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex % rooms.length;
    setActiveRoom(rooms[newIndex]);
  };

  return (
    <div className="bg-secondary my-6 md:my-12 min-h-screen md:h-[80vh] flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col gap-5 justify-center p-6 md:ml-20 md:max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-textPrimary">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <button className="text-white bg-primary py-2 px-4 w-fit rounded-md">
          Explore More
        </button>
      </div>

      {/* Right Section with Swiper */}
      <div className="flex-1 h-full flex flex-col md:flex-row gap-4 overflow-hidden p-6 md:p-0">
        {/* Dynamic Image (Active Room) */}
        <div className="relative flex items-center h-64 md:h-full w-full md:w-[350px] overflow-hidden rounded-lg mb-4 md:mb-0">
          <Image
            src={activeRoom.img}
            alt={activeRoom.name}
            className="object-cover h-56 w-full md:h-5/6 "
            width={300}
            height={150}
          />
          <div className="absolute bg-white py-2 md:py-4 px-4 md:px-6 bottom-4 md:bottom-12 left-4 shadow-lg">
            <div className="flex items-center text-xs md:text-sm text-gray-500">
              <span>{activeRoom.id}</span>
              <span className="border-l-[1px] border-black h-4 md:h-5 mx-2 md:mx-3"></span>
              <p>{activeRoom.name}</p>
            </div>
            <p className="font-bold text-lg md:text-xl">{activeRoom.title}</p>
          </div>
        </div>

        {/* Swiper Component */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper w-full"
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
          {rooms.map((room) => (
            <SwiperSlide
              key={room.id}
              className="relative overflow-hidden rounded-lg"
            >
              <Image
                src={room.img}
                alt={room.name}
                className="object-cover h-48 md:h-4/6 w-full"
                width={300}
                height={150}
              />
              <div className="absolute bg-white py-2 md:py-4 px-4 md:px-6 bottom-4 md:bottom-6 left-4 shadow-lg">
                <div className="flex items-center text-xs md:text-sm text-gray-500">
                  <span>{room.id}</span>
                  <span className="border-l-[1px] border-black h-4 md:h-5 mx-2 md:mx-3"></span>
                  <p>{room.name}</p>
                </div>
                <p className="font-bold text-lg md:text-xl">{room.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Inspiration;
