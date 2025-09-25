import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Links } from '../../constants/Constants'
import { FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="w-full bg-[#c49a6c] text-white text-center mt-10 p-4">
      
      <hr />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col items-center justify-center mt-6 p-6">
            <Image
              src='/logo.png'
              alt='NORDREC Logo'
                width={280}
                height={280}
                className='mix-blend-multiply'
            />
          <h1 className="text-xl font-semibold">
            NORTHERN DRYLAND RESOURCE CENTER (NORDREC)
          </h1>
        </div>

       
        <div className="flex flex-col items-center justify-center mt-6 p-6 space-y-2">
          {Links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="hover:text-yellow-100 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        
        <div className="flex flex-col items-center justify-center mt-6 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <FiMail size={20} />
            <span>northerndryland@gmail.com </span>
          </div>
          <div className="flex items-center gap-2">
            <FiPhone size={20} />
            <span>+2547 2150 5214 </span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} NORTHERN DRYLAND RESOURCE CENTER (NORDREC). All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
