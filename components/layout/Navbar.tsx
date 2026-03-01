"use client";

import Link from "next/link";
import { useState } from "react";
import { profileData } from "@/content/profile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          {profileData.name}
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          <Link href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="#experience" className="text-gray-600 hover:text-gray-800">
            Experience
          </Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-800">
            Projects
          </Link>
          <Link href="#skills" className="text-gray-600 hover:text-gray-800">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
          >
            Resume
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
          >
            Get in Touch
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="bg-white md:hidden">
          <div className="flex flex-col items-center space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800"
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800"
            >
              Contact
            </Link>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700"
            >
              Resume
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="mt-2 rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
