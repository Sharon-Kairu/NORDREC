import React from 'react'
import Image from 'next/image'

const Areas = () => {
  return (
    <div id='areas' className='m-10'>
      {/* Section Header */}
      <div className='flex flex-col justify-center items-center gap-4 my-20'>
        <h1 className='text-4xl text-green-700 font-bold'>Thematic Areas</h1>
        <div className='h-2 w-20 bg-green-700 rounded-2xl'></div>
      </div>

      {/* Cards Grid */}
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-2 m-4'>
        
        {/* Training */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/training.jpeg" 
              alt="Training and Capacity Building" 
              fill
              className="object-cover rounded-lg p-3"
            />
          </div>
          <h1 className="text-green-700 text-3xl font-bold">Training & Capacity Building</h1>
          <p className="text-xl font-semibold">
            Hands-on training in beekeeping, sustainable land management, soil conservation,
            water management, and agroforestry.
          </p>
        </div>

        {/* Sustainable Food */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/sustainable food.jpeg" 
              alt="Sustainable Food Supplies" 
              fill
              className="object-cover rounded-lg p-3"
            />
          </div>
          <h1 className="text-green-700 text-3xl font-bold">Sustainable Food Supplies</h1>
          <p className="text-xl font-semibold">
            Promote soil health, rainwater harvesting, crop diversity, and drought-resistant farming practices.
          </p>
        </div>

        {/* Rainwater Harvesting */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/image5.jpeg" 
              alt="Rainwater Harvesting" 
              fill
              className="object-cover rounded-lg p-3"
            />
          </div>
          <h1 className="text-green-700 text-3xl font-bold">Rainwater Harvesting</h1>
          <p className="text-xl font-semibold">
            Support reliable water sources through efficient collection and storage methods.
          </p>
        </div>

        {/* Research */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/research.jpeg" 
              alt="Research on Sustainable Livelihoods in ASALS" 
              fill
              className="object-cover rounded-lg p-3"
            />
          </div>
          <h1 className="text-green-700 text-3xl font-bold">
            Research on sutainable livelyhoods in ASALs
          </h1>
          <p className="text-xl font-semibold">
            Conducting studies and generating knowledge to support sustainable practises in ASALs
          </p>
        </div>

        {/* Biodiversity */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/biodiversity.jpeg" 
              alt="Biodiversity Conservation" 
              fill        
              className='object-cover rounded-lg p-3'
            />
          </div>
          <h1 className='text-green-700 text-3xl font-bold'>Biodiversity</h1>
          <p className='text-xl font-semibold'>
            Advocate for preserving ecosystems critical for food security, climate stability, and economic growth.
          </p>
        </div>

        {/* Land Regeneration */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/land_regeneration.jpeg" 
              alt="Land Regeneration" 
              fill
              className='object-cover rounded-lg p-3'
            />
          </div>
          <h1 className='text-green-700 text-3xl font-bold'>Land Regeneration</h1>
          <p className='text-xl font-semibold'>
            Implement regenerative agriculture to rebuild soil health, enhance water retention, and sequester carbon.
          </p>
        </div>

        {/* Dryland Strategies */}
        <div className="bg-[#f3e9e4] flex flex-col items-center justify-between p-10 rounded-2xl shadow-lg text-center h-full">
          <div className="relative w-[350px] h-[250px]">
            <Image 
              src="/dryland_strategies.jpeg" 
              alt="Dryland Strategies" 
              fill 
              className='object-cover rounded-lg p-3'
            />
          </div>
          <h1 className='text-green-700 text-3xl font-bold'>Dryland Strategies</h1>
          <p className='text-xl font-semibold'>
            Promote soil tillage, windbreaks, and mulching to conserve water and improve crop resilience.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Areas
