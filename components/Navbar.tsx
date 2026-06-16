'use client';

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-tight">Iliya Svirsky</div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <a href="#contact" className="hidden md:block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition flex items-center gap-2">
          Hire Me 
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 py-8">
          <div className="flex flex-col items-center gap-8 text-lg">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-white text-black px-10 py-3.5 rounded-full">Hire Me</a>
          </div>
        </div>
      )}
    </nav>
  );
}