import React from 'react'

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center px-10 py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Hero_bg.png')",
      }}
    >
      {/* Left Side: Title & Description */}
      <div className="flex flex-col space-y-6  ">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-green-700">
          Northern Dryland
        </h1>
        <h1 className="text-xl md:text-5xl font-bold leading-tight">
          Resource Centre
        </h1>

        <p className="mt-2 text-md md:text-xl leading-relaxed text-white">
          The Northern Dryland Resource Centre (NORDREC), headquartered in Wajir with a satellite office in Nairobi and 
          demonstration farms in Bute and Habaswein sub-counties of Wajir County, Kenya, was founded in 2020 and officially 
          registered in 2025. The Centre’s mission is to promote sustainable dryland regeneration through integrated training, research, 
          and innovative practices that restore ecosystems and strengthen local livelihoods. 
        </p>
      </div>

      {/* Right Side: Approach & Goal */}
      <div className="flex flex-col justify-center space-y-8 max-w-xl text-white">
        <div>
          
          <p className="text-md md:text-2xl leading-relaxed"><span className='text-green-700 font-bold text-lg md:text-3xl '>Approach: </span>
            Promote sustainable land use, water conservation, agroforestry, and community participation.
          </p>
        </div>

        <div>
          
          <p className="text-md md:text-2xl leading-relaxed"><span className='text-black font-bold text-lg md:text-3xl'>Goal: </span>
            A hub for innovation and knowledge, contributing to environmental conservation, food security,
            and economic empowerment in Northern Kenya and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
