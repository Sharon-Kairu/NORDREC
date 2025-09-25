import React from 'react'

const Goals = () => {
  return (
    <div className='w-full bg-[#c49a6c] grid grid-cols-1 md:grid-cols-2'>

        <div className='bg-white m-10 p-10 rounded-2xl flex justify-center items-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold text-[#c49a6c]  p-10 md:p-16'>
                Strategic <br/> Goals
            </h1>
        </div>

        <div className='text-white flex flex-col gap-6 text-lg font-semibold leading-relaxed m-10 p-10'>
            <p className="hover:text-yellow-100 transition duration-300">
                🌱 Recruit and retain a skilled team to lead regeneration efforts.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
                🏗️ Provide infrastructure to support sustainable growth and innovation.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
                ⚖️ Assess risks and implement mitigation plans effectively.
            </p>
            <p className="hover:text-yellow-100 transition duration-300">
                🌍 Enhance NORDREC’s local, national, and international reputation.
            </p>
        </div>


    </div>
  )
}

export default Goals