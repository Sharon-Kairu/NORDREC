import React from 'react'
import Image from 'next/image'

const Implementation = () => {
  return (
    <div id='implementation' className='w-full bg-[#c49a6c] grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center'>
            <h1 className='text-4xl md:text-5xl font-extrabold p-10 md:p-16 text-white'>
                Strategic <br/> Implementation
            </h1>
        </div>

        <div className="flex justify-center items-center w-full bg-[#c49a6c] py-4">
            <Image
                src="/implementation.jpeg"
                alt="Strategic Goals"
                width={500}       
                height={350}  
                className="object-contain rounded-lg w-full max-w-[500px] h-auto"
            />
        </div>

        


    </div>
  )
}

export default Implementation