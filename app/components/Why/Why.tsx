import React from 'react'

const Why = () => {
  return (
    <div
      id="why"
      className="w-full bg-[#c49a6c] grid grid-cols-1 md:grid-cols-2 justify-center items-center px-6 sm:px-10 md:px-20 py-16 md:py-24 gap-10 md:gap-16"
    >
      {/* Left Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-14 flex flex-col justify-center items-center text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#c49a6c] leading-tight md:leading-snug">
          Why Establish <br className="hidden sm:block" /> NORDREC?
        </h1>
      </div>

      {/* Right Text Section */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-black text-sm sm:text-sm font-semibold leading-relaxed">
        <p className="hover:text-yellow-100 transition duration-300">
          🌱 Strengthen food supply systems to mitigate drought impacts
        </p>
        <p className="hover:text-yellow-100 transition duration-300">
          📚 Build knowledge on the interplay of resources, communities, and external factors
        </p>
        <p className="hover:text-yellow-100 transition duration-300">
          🤝 Promote participatory investments targeting local priorities
        </p>
        <p className="hover:text-yellow-100 transition duration-300">
          🌍 Address drought and land degradation risks
        </p>
      </div>
    </div>
  )
}

export default Why
