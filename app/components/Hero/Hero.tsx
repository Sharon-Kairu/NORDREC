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
      <div className="flex flex-col justify-center space-y-6 text-center md:text-left max-w-2xl">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-green-700">
          Northern Dryland
        </h1>
        <h1 className="text-xl md:text-5xl font-bold leading-tight">
          Resource Centre
        </h1>

        <p className="mt-2 text-md md:text-lg leading-relaxed text-white">
          The Northern Dryland Resource Centre (NORDREC), located in Bute Sub-county, Wajir County, Kenya,
          was established in 2020 and officially registered in 2025. Its mission is to advance sustainable dryland
          regeneration, combining training, research, and innovative practices to restore ecosystems and support
          local livelihoods.
        </p>
      </div>

      {/* Right Side: Approach & Goal */}
      <div className="flex flex-col justify-center space-y-8 max-w-xl text-white">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Approach</h2>
          <p className="text-md leading-relaxed">
            Promote sustainable land use, water conservation, agroforestry, and community participation.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Goal</h2>
          <p className="text-md leading-relaxed">
            A hub for innovation and knowledge, contributing to environmental conservation, food security,
            and economic empowerment in Northern Kenya and beyond.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
