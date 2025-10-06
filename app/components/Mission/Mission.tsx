'use client'
import React from 'react'
import Slider from "react-slick"
import Image from "next/image"

const Mission = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }

  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
    "/image6.jpeg",
    "/image7.jpeg",
  ]

  const images2 = [
    "/image8.jpeg",
    "/image9.jpeg",
    "/image10.jpeg",
    "/image11.jpeg",
    "/image12.jpeg",
    "/image13.jpeg",
    "/image14.jpeg",
  ]

  return (
    <div id="mission-vision" className="px-4 sm:px-6 md:px-10 py-10 md:py-20 bg-cover bg-center space-y-8">
      
      {/* --- Mission Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3e9e4] rounded-2xl shadow-lg">
        
        {/* Text side */}
        <div className="m-4 sm:m-6 md:m-8 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center md:text-left md:items-start px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16">
          <div className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-700">
              Our Mission
            </h1>
            <div className="mt-3 w-20 sm:w-28 h-1.5 rounded-2xl bg-green-700"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            To empower dryland agro-pastoralists and farmers' cooperatives with knowledge and skills for
            sustainable farming and ecosystem regeneration.
          </p>
        </div>

        {/* Image slider */}
        <div className="w-full max-w-3xl mx-auto my-6 sm:my-8 md:my-10">
          <Slider {...settings}>
            {images2.map((src, idx) => (
              <div key={idx} className="relative w-full h-48 sm:h-60 md:h-80">
                <Image 
                  src={src} 
                  alt={`Slide ${idx}`} 
                  fill 
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* --- Vision Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f3e9e4] rounded-2xl shadow-lg">
        
        {/* Image slider */}
        <div className="w-full max-w-3xl mx-auto my-6 sm:my-8 md:my-10 order-1 md:order-none">
          <Slider {...settings}>
            {images.map((src, idx) => (
              <div key={idx} className="relative w-full h-48 sm:h-60 md:h-80">
                <Image 
                  src={src} 
                  alt={`Slide ${idx}`} 
                  fill 
                  className="object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Text side */}
        <div className="m-4 sm:m-6 md:m-8 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center md:text-left md:items-start px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-16">
          <div className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-700">
              Our Vision
            </h1>
            <div className="mt-3 w-20 sm:w-28 h-1.5 rounded-2xl bg-green-700"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            To be a leading resource center for dryland regeneration across Northern Kenya, promoting sustainable
            and regenerative agriculture through education, research, and partnerships.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Mission
