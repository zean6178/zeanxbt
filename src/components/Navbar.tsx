"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] px-6 md:px-12 lg:px-16 py-7 flex items-center justify-between bg-gradient-to-b from-black/90 to-transparent backdrop-blur-[2px]">
      <a href="#" className="font-[var(--font-michroma)] text-[16px] tracking-[0.12em] text-metallic">
        zXBT
      </a>

      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-underline relative font-[var(--font-rajdhani)] text-[12px] font-medium tracking-[0.15em] uppercase text-[rgba(200,212,224,0.5)] no-underline transition-colors duration-300 hover:text-chrome"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-[1px] bg-[var(--silver)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
        <span className={`w-5 h-[1px] bg-[var(--silver)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`w-5 h-[1px] bg-[var(--silver)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-[rgba(200,212,224,0.04)] px-6 py-8 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[var(--font-rajdhani)] text-[13px] font-medium tracking-[0.15em] uppercase text-[rgba(200,212,224,0.5)] hover:text-chrome transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
