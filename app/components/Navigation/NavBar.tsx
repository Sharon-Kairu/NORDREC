'use client'
import React from 'react'
import {Links} from '../../constants/Constants'
import { Link } from 'react-scroll'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HiBars3BottomRight } from "react-icons/hi2";

type Props={
  openNav: ()=> void
};

const NavBar = ({openNav}: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handlescroll=() => {
        if(window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }}
    window.addEventListener("scroll", handlescroll);
     return () => {
        window.removeEventListener("scroll", handlescroll);
     }
    });


  return (
    <div className={`w-full flex flex-row justify-between items-center 
         ${isScrolled? "bg-[#e4ad71] shadow-lg"
         :"bg-transparent"} p-6 fixed top-0 z-50`}>
            <div className='flex flex-row justify-center items-center gap-2 p-4'>
              <Image
                  src='/logo-removebg-preview.png'
                  alt='NORDREC Logo'
                    width={100}
                    height={100}
                    className='mix-blend-multiply'
              />
            <h1 className='text-2xl text-white font-bold p-4'>NORDREC</h1>
          </div>
       

       <div 
        className={`hidden md:flex flex=row justify-center items-center gap-8 p-4 mr-10 
            ${isScrolled
            ? "text-amber-900  font-bold"
            : "text-white"
        }`}>
          {Links.map((link)=>(
              <Link
              key={link.id}
              to={link.url}
              smooth={true}        
              duration={800}       
              offset={-70}          
              spy={true}
              activeClass="active-link" 
              className="cursor-pointer hover:text-green-700 transition duration-300" 
              
              >
                  {link.label}
              </Link>

          ))}
       </div>

       <HiBars3BottomRight
         onClick={openNav}
         className='w-8 h-8 cursor-pointer ml-auto lg:hidden'/>


    </div>
  )
}

export default NavBar