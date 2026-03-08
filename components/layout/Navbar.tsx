"use client";

import Link from "next/link";
import { useState } from "react";
import { profileData } from "@/content/profile";

const navLinks = [
  { href: "/#featured-systems", label: "Flagship" },
  { href: "/#projects", label: "Projects" },
  { href: "/#runbooks", label: "Runbooks" },
  { href: "/#recruiter-index", label: "Recruiter Index" },
  { href: "/#improvements", label: "Improvements" },
  { href: "/blog", label: "Blog" },
  { href: "/#role-fit", label: "Role Fit" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/80 bg-black/70 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-lg font-semibold uppercase tracking-[0.2em] text-neutral-100">
          {profileData.name}
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-neutral-400 transition hover:text-emerald-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-neutral-700 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-300 transition hover:border-emerald-500/60 hover:text-emerald-200"
          >
            Resume
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="rounded border border-emerald-500/40 px-3 py-2 text-[10px] uppercase tracking-widest text-emerald-300 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            Email
          </a>
        </div>

        <button
          type="button"
          className="rounded border border-neutral-700 px-2 py-1 text-[10px] uppercase tracking-widest text-neutral-300 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-neutral-900 bg-black md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded px-3 py-2 text-xs uppercase tracking-widest text-neutral-300 transition hover:bg-neutral-900 hover:text-emerald-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded border border-neutral-700 px-3 py-2 text-xs uppercase tracking-widest text-neutral-300"
            >
              Resume
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="mt-1 rounded border border-emerald-500/40 px-3 py-2 text-xs uppercase tracking-widest text-emerald-300"
            >
              Email
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
