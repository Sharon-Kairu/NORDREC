'use client'
import React from 'react'
import {Links} from '../../constants/Constants'
import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const NavBar = () => {
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
                src='/logo.png'
                alt='NORDREC Logo'
                  width={180}
                  height={180}
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
            href={link.url}
            >
                {link.label}
            </Link>

        ))}
       </div>


    </div>
  )
}

export default NavBar