'use client'
import React from 'react'
import Slider from "react-slick";
import Image from "next/image";

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
  };

  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
    "/image5.jpeg",
    "/image6.jpeg",
    "/image7.jpeg",
  ];

  const images2=[
    "/image8.jpeg",
    "/image9.jpeg",
    "/image10.jpeg",
    "/image11.jpeg",
    "/image12.jpeg",
    "/image13.jpeg",
    "/image14.jpeg",
  ]
  return (
    <div id='mission-vision' className=' items-center justify-items-center px-10 py-20 bg-cover bg-center space-y-5'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 bg-[#f3e9e4] rounded-2xl shadow-lg '> 
            <div  className='m-8 flex flex-col gap-8 items-center justify-items-center px-10 py-20 mb-16'>

                <div className='bg-brown-200 w-full flex flex-col items-center justify-center p-4'>
                    <h1 className='text-xl md:text-3xl font-bold leading-tight text-green-700'>
                        Our Mission
                    </h1>
                    <div className='mt-4 w-30 h-2 rounded-2xl bg-green-700'></div>
                </div>

                <div className='flex flex-col space-y-4 '>
                    <p className='text-md md:text-xl leading-relaxed text-justify'>
                        To empower dryland agro-pastoralists and farmers' cooperatives with knowledge and skills for
                        Sustainable farming and ecosystem regeneration
                    </p>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto my-10">
                <Slider {...settings}>
                    {images2.map((src, idx) => (
                    <div key={idx} className="relative w-full h-80">
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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-5 bg-[#f3e9e4] rounded-2xl shadow-lg'>
            <div className="w-full max-w-4xl mx-auto my-10">
                <Slider {...settings}>
                    {images.map((src, idx) => (
                    <div key={idx} className="relative w-full h-80">
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

            <div id='mission' className='m-8 flex flex-col gap-8 items-center justify-items-center px-10 py-20'>

                <div className='w-full flex flex-col items-center justify-center p-4'>
                    <h1 className='text-xl md:text-3xl font-bold leading-tight text-green-700'>
                        Our Vision
                    </h1>
                    <div className='mt-4 w-30 h-2 rounded-2xl bg-green-700'></div>
                </div>

                <div className='flex flex-col space-y-4 '>
                    <p className='text-md md:text-xl leading-relaxed text-justify'>
                        To be a leading resource center for dryland regeneration across Northern Kenya, promoting sustainable
                        and regenerative agriculture through education, research, and partnerships.

                    </p>
                </div>
            </div>

            
        </div>

        
    </div>
  )
}

export default Mission