import React from 'react'
import Image from 'next/image'

const Objectives = () => {
  return (
    <div id="objectives" className="w-full flex flex-col items-center justify-center mt-6 sm:mt-8">
      
      {/* Title */}
      <div className="p-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700">
          Our Objectives
        </h1>
        <div className="mt-3 sm:mt-4 w-24 sm:w-32 h-1.5 mx-auto rounded-2xl bg-green-700"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-10 py-10 sm:py-16 bg-cover bg-center">

        {/* Card Template */}
        {[
          {
            id: 1,
            img: "/Reclamation.jpeg",
            text: "Empower rural communities to reclaim degraded lands"
          },
          {
            id: 2,
            img: "/agric_practices.jpeg",
            text: "Develop and promote sustainable agricultural practices"
          },
          {
            id: 3,
            img: "/comm_resilience.jpeg",
            text: "Enhance community resilience to climate change"
          }
        ].map(({ id, img, text }) => (
          <div
            key={id}
            className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center bg-[#f3e9e4] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10"
          >
            {/* Number */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700">{id}</h1>

            {/* Image */}
            <div className="relative w-full h-40 sm:h-48 md:h-56 flex justify-center items-center">
              <Image
                src={img}
                alt={`Objective ${id}`}
                fill
                className="object-contain mix-blend-multiply rounded-xl"
              />
            </div>

            {/* Text */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              {text}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Objectives
