import React from 'react'

const Implementation = () => {
  return (
    <div id='implementation' className='w-full bg-[#c49a6c] grid grid-cols-1 md:grid-cols-2'>

        <div className='bg-white m-10 p-10 rounded-2xl flex justify-center items-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#c49a6c]  p-10 md:p-16'>
                Strategic <br/> Implementation
            </h1>
        </div>

        <div className='text-white flex flex-col gap-6 text-lg font-semibold leading-relaxed m-10 p-10'>
            <p className="hover:text-yellow-100 transition duration-300">
                Collaborate with donors to support local needs and climate adaptation.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
                Encourage community-led, sustainable projects.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
               Respect local customs to ensure smooth implementation.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
                 Uphold democratic governance and accountability in management.
            </p>
        </div>


    </div>
  )
}

export default Implementation