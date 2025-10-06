'use client'
import React, { useEffect, useState } from 'react'
import { Links } from '../../constants/Constants'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void
}

const NavBar = ({ openNav }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full flex flex-row justify-between items-center fixed top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-[#e4ad71]/90 shadow-lg backdrop-blur-md' : 'bg-transparent'} 
        px-4 md:px-10 py-4`}
    >
      {/* Left Section: Logo + Title */}
      <div className="flex items-center gap-3 md:gap-4">
        <Image
          src="/logo-removebg-preview.png"
          alt="NORDREC Logo"
          width={80}
          height={80}
          className="mix-blend-multiply w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-all duration-300"
        />
        <h1
          className={`font-extrabold tracking-wide transition-all duration-300
            ${isScrolled ? 'text-amber-900' : 'text-white'} 
            text-2xl sm:text-3xl md:text-4xl`}
        >
          NORDREC
        </h1>
      </div>

      {/* Center: Navigation Links */}
      <div
        className={`hidden md:flex items-center gap-8 font-semibold 
          ${isScrolled ? 'text-amber-900' : 'text-white'}`}
      >
        {Links.map((link) => (
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

      {/* Mobile Menu Icon */}
      <HiBars3BottomRight
        onClick={openNav}
        className={`w-8 h-8 cursor-pointer md:hidden transition-all duration-300 
          ${isScrolled ? 'text-amber-900' : 'text-white'}`}
      />
    </div>
  )
}

export default NavBar
