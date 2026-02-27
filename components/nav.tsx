"use client";

import Image from "next/image";
import { useEffect, useReducer } from "react";

type NavState = { isHidden: boolean; mobileOpen: boolean };
type NavAction =
  | { type: "SET_HIDDEN"; payload: boolean }
  | { type: "TOGGLE_MOBILE" }
  | { type: "CLOSE_MOBILE" };

function navReducer(state: NavState, action: NavAction): NavState {
  switch (action.type) {
    case "SET_HIDDEN":
      return { ...state, isHidden: action.payload };
    case "TOGGLE_MOBILE":
      return { ...state, mobileOpen: !state.mobileOpen };
    case "CLOSE_MOBILE":
      return { ...state, mobileOpen: false };
    default:
      return state;
  }
}

const initialState: NavState = { isHidden: true, mobileOpen: false };

export default function Nav() {
  const [state, dispatch] = useReducer(navReducer, initialState);
  const { isHidden, mobileOpen } = state;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const footerThreshold = docHeight - windowHeight - 200;
      const scrollThreshold = 50;

      const shouldHide = scrollY < scrollThreshold || scrollY > footerThreshold;
      dispatch({ type: "SET_HIDDEN", payload: shouldHide });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ transform: isHidden ? "translateY(-110%)" : "translateY(0)" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-18 py-3 flex items-center justify-between">
        {/* KTP Logo — links out to main KTP site */}
        <a
          href="https://ktp-website-2026.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div
            className="w-11 h-11 rounded-xl bg-[#818cf8]/10 border border-[#818cf8]/20 flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105"
            style={{ boxShadow: "0 0 20px rgba(129,140,248,0.12)" }}
          >
            <Image
              src="/ktp-logo.png"
              alt="KTP"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold text-white tracking-wide">
              ktp
            </span>
            <span className="text-[11px] text-indigo-400/60 tracking-widest uppercase">
              USC
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#projects"
            className="text-base text-slate-400 hover:text-white transition-colors duration-200 font-medium"
          >
            Projects
          </a>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#818cf8]/25 bg-[#818cf8]/8 text-[#a5b4fc] text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Spring 2026
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors"
          onClick={() => dispatch({ type: "TOGGLE_MOBILE" })}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
            className="text-base text-slate-300 hover:text-white transition-colors font-medium"
            onClick={() => dispatch({ type: "CLOSE_MOBILE" })}
          >
            Projects
          </a>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#818cf8]/25 bg-[#818cf8]/8 text-[#a5b4fc] text-sm font-semibold w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Spring 2026
          </div>
        </div>
      )}
    </header>
  );
}
