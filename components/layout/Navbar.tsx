"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Mohammed Vepari
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="#experience" className="text-gray-600 hover:text-gray-800">Experience</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
          <Link href="#skills" className="text-gray-600 hover:text-gray-800">Skills</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
        <a href="mailto:mohammed.vepari@example.com" className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Get in Touch
        </a>
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
            </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="#experience" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Experience</Link>
            <Link href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            <Link href="#skills" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <a href="mailto:mohammed.vepari@example.com" className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mt-2">
                Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
