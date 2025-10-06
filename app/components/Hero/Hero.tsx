import React from 'react'

const Hero = () => {
  return (
    <div
      id="hero"
      className=" w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center px-10 py-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('/Hero_bg.png')",
      }}
    >
    
      
      <div className="flex flex-col space-y-4 mt-16 ">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-green-700">
          Northern Dryland
        </h1>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Resource <br/> Centre
        </h1>

        <p className="mt-4 max-w-xl text-xl leading-relaxed text-white">
          The Northern Dryland Resource Centre (NORDREC), located in Bute Sub-county, Wajir County, Kenya,
          was established in 2020 and officially registered in 2025. Its mission is to advance sustainable dryland
          regeneration, combining training, research, and innovative practices to restore ecosystems and support
          local livelihoods.
        </p>
      </div>
    </div>
  )
}

export default Hero
