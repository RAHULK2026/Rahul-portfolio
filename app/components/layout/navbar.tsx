"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto mt-4 px-4">
        <div className="bg-white rounded-full px-6 py-4 flex justify-between items-center shadow">

          {/* Logo */}
          <div className="font-semibold text-lg">
            Monovo<sup>®</sup>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Work</Link>
            <Link href="#">Blog</Link>
          </nav>

          {/* Desktop Button */}
          <button className="hidden md:block bg-black text-white px-4 py-2 rounded-full text-sm">
            Let’s Talk
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white mt-3 rounded-xl p-6 space-y-4 shadow">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Work</Link>
            <Link href="#">Blog</Link>
            <button className="w-full bg-black text-white py-2 rounded-full">
              Let’s Talk
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
