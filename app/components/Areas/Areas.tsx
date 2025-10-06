import React from "react";
import Image from "next/image";

const Areas = () => {
  const areas = [
    {
      title: "Training & Capacity Building",
      img: "/training.jpeg",
      text: "Hands-on training in beekeeping, sustainable land management, soil conservation, water management, and agroforestry.",
    },
    {
      title: "Sustainable Food Supplies",
      img: "/sustainable food.jpeg",
      text: "Promote soil health, rainwater harvesting, crop diversity, and drought-resistant farming practices.",
    },
    {
      title: "Rainwater Harvesting",
      img: "/image5.jpeg",
      text: "Support reliable water sources through efficient collection and storage methods.",
    },
    {
      title: "Research on Sustainable Livelihoods in ASALs",
      img: "/research.jpeg",
      text: "Conducting studies and generating knowledge to support sustainable practices in ASALs.",
    },
    {
      title: "Biodiversity",
      img: "/biodiversity.jpeg",
      text: "Advocate for preserving ecosystems critical for food security, climate stability, and economic growth.",
    },
    {
      title: "Land Regeneration",
      img: "/land_regeneration.jpeg",
      text: "Implement regenerative agriculture to rebuild soil health, enhance water retention, and sequester carbon.",
    },
    {
      title: "Dryland Strategies",
      img: "/dryland_strategies.jpeg",
      text: "Promote soil tillage, windbreaks, and mulching to conserve water and improve crop resilience.",
    },
  ];

  return (
    <div id="areas" className="px-4 sm:px-8 lg:px-12 py-10 sm:py-16">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-green-700 font-bold text-center">
          Thematic Areas
        </h1>
        <div className="h-1.5 sm:h-2 w-20 sm:w-24 bg-green-700 rounded-2xl"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {areas.map((area, index) => (
          <div
            key={index}
            className="bg-[#f3e9e4] flex flex-col items-center text-center p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4">
              <Image
                src={area.img}
                alt={area.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Title */}
            <h1 className="text-green-700 text-lg sm:text-2xl font-bold mb-2">
              {area.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-gray-800">
              {area.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Areas;
