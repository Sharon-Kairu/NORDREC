import React from 'react'

const Why = () => {
  return (
    <div id='why' className="w-full bg-[#c49a6c] grid grid-cols-1 md:grid-cols-2 justify-center items-center px-8 py-20 md:px-20 gap-10">
      
      
      <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 flex flex-col justify-center items-center transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#c49a6c] leading-snug">
          Why Establish <br /> NORDREC?
        </h1>
      </div>

      
      <div className="flex flex-col gap-6 text-lg text-green-700 font-semibold leading-relaxed">
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
