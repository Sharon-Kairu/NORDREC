import React from 'react'
import Image from 'next/image'

const Areas = () => {
  return (
    <div id='areas' className='m-10'>
        <div className='flex flex-col justify-center items-center gap-4 my-20'>
            <h1 className='text-4xl text-green-700 font-bold'>Thematic Areas</h1>
            <div className='h-2 w-20 bg-green-700 rounded-2xl'></div>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 pt-2 m-4 '>
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area1.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Training & Capacity Building</h1>
                <p className='text-xl font-semibold '>Hands-on training in sustainable land management, soil conservation,
                  water management, and agroforestry.
                </p>
            </div>
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area2.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Sustainable Food Supplies:</h1>
                <p className='text-xl font-semibold '>Promote soil health, rainwater harvesting, crop diversity, and droughtresistant farming practices.
                </p>
            </div>
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area3.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Rainwater Harvesting</h1>
                <p className='text-xl font-semibold '>Support reliable water sources through efficient collection and storage
                   methods
                </p>
            </div>
            
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area4.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Biodiversity</h1>
                <p className='text-xl font-semibold '>Advocate for preserving ecosystems critical for food security, climate stability, and
                   economic growth.
                </p>
            </div>
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area5.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Land Regeneration:</h1>
                <p className='text-xl font-semibold '>Implement regenerative agriculture to rebuild soil health, enhance water retention,and sequester carbon.
                   methods
                </p>
            </div>
            <div className='bg-[#f3e9e4] flex flex-col gap-6 items-center justify-center p-10 rounded-2xl shadow-lg text-center'>
                <div className='bg-green-700 rounded-full w-16 h-16'>
                    <Image 
                      src="/area6.png" 
                      alt="Area 1" 
                      width={64} 
                      height={64} 
                      className='p-3'
                      />
                </div>

                <h1 className='text-green-700 text-3xl font-bold'>Dryland Strategies::</h1>
                <p className='text-xl font-semibold '>Promote soil tillage, windbreaks, and mulching to conserve water and improve crop resilience.

                </p>
            </div>

        </div>
    </div>
  )
}

export default Areas