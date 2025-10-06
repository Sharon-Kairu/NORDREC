import React from 'react'
import Image from 'next/image'

const Objectives = () => {
  return (
    <div id='objectives' className='w-full flex flex-col items-center justify-center mt-5'>
      
      <div className='p-4 text-center'>
        <h1 className='text-3xl font-bold leading-tight text-green-700'>
          Our Objectives
        </h1>
        <div className='mt-4 w-32 h-2 mx-auto rounded-2xl bg-green-700'></div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-10 py-20 bg-cover bg-center'>

        {/* Card 1 */}
        <div className='m-8 flex flex-col gap-8 items-center px-10 py-20 bg-[#f3e9e4] rounded-2xl shadow-lg'>
          <h1 className='text-3xl font-bold leading-tight text-green-700'>1</h1>
          <div className='h-48 w-full relative flex justify-center items-center'>
            <Image 
              src="/Reclamation.jpeg" 
              alt="Objective 1" 
              fill 
              className='object-contain mix-blend-multiply'
            />
          </div>
          <p className='text-lg leading-relaxed text-justify'>
            Empower rural communities to reclaim degraded lands
          </p>
        </div>

        {/* Card 2 */}
        <div className='m-8 flex flex-col gap-8 items-center px-10 py-20 bg-[#f3e9e4] rounded-2xl shadow-lg'>
          <h1 className='text-3xl font-bold leading-tight text-green-700'>2</h1>
          <div className='h-48 w-full relative flex justify-center items-center'>
            <Image 
              src="/agric_practices.jpeg" 
              alt="Objective 2" 
              fill
              className='object-contain mix-blend-multiply'
            />
          </div>
          <p className='text-lg leading-relaxed text-justify'>
            Develop and promote sustainable agricultural practices
          </p>
        </div>

        {/* Card 3 */}
        <div className='m-8 flex flex-col gap-8 items-center px-10 py-20 bg-[#f3e9e4] rounded-2xl shadow-lg'>
          <h1 className='text-3xl font-bold leading-tight text-green-700'>3</h1>
          <div className='h-48 w-full relative flex justify-center items-center'>
            <Image 
              src="/comm_resilience.jpeg" 
              alt="Objective 3" 
              fill
              className='object-contain mix-blend-multiply'
            />
          </div>
          <p className='text-lg leading-relaxed text-justify'>
            Enhance community resilience to climate change
          </p>
        </div>

      </div>
    </div>
  )
}

export default Objectives
