import React from 'react'

const Mission = () => {
  return (
    <div id='mission-vision' className='grid  grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center px-10 py-20 bg-cover bg-center'>

        <div  className='m-8 flex flex-col gap-8 items-center justify-items-center px-10 py-20  bg-[#f3e9e4] rounded-2xl shadow-lg'>

            <div className='bg-brown-200 w-full flex flex-col items-center justify-center p-4'>
                <h1 className='text-3xl font-bold leading-tight text-green-700'>
                    Our Mission
                </h1>
                <div className='mt-4 w-30 h-2 rounded-2xl bg-green-700'></div>
            </div>

            <div className='flex flex-col space-y-4 '>
                <p className='text-lg leading-relaxed text-justify'>
                    To empower dryland agro-pastoralists and farmers' cooperatives with knowledge and skills for
                    Sustainable farming and ecosystem regeneration
                </p>
            </div>
        </div>

        <div id='mission' className='m-8 flex flex-col gap-8 items-center justify-items-center px-10 py-20 bg-[#f3e9e4] rounded-2xl shadow-lg '>

            <div className='w-full flex flex-col items-center justify-center p-4'>
                <h1 className='text-3xl font-bold leading-tight text-green-700'>
                    Our Vision
                </h1>
                <div className='mt-4 w-30 h-2 rounded-2xl bg-green-700'></div>
            </div>

            <div className='flex flex-col space-y-4 '>
                <p className='text-lg leading-relaxed text-justify'>
                    To be a leading resource center for dryland regeneration across Northern Kenya, promoting sustainable
                    and regenerative agriculture through education, research, and partnerships.

                </p>
            </div>
        </div>

        
    </div>
  )
}

export default Mission