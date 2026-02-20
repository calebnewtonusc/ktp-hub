"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#818cf8]/15 bg-[#0d112b]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#818cf8]/10 border border-[#818cf8]/20 flex items-center justify-center overflow-hidden">
            <Image
              src="/ktp-logo.png"
              alt="KTP"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-white tracking-wide">
              ktp
            </span>
            <span className="text-[10px] text-indigo-400/60 tracking-widest uppercase">
              USC
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
          >
            Projects
          </a>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#818cf8]/25 bg-[#818cf8]/8 text-[#a5b4fc] text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Spring 2026
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#818cf8]/10 bg-[#0d112b]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          <a
            href="#projects"
            className="text-sm text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#818cf8]/25 bg-[#818cf8]/8 text-[#a5b4fc] text-xs font-semibold w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Spring 2026
          </div>
        </div>
      )}
    </header>
  );
}
