"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/locations", label: "Areas Served" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--navy)] text-white shadow-md">
      {/* Top utility bar */}
      <div className="hidden md:block bg-[var(--navy-darker)] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 text-gray-200">
            <a href="tel:+17277094141" className="hover:text-white">
              Tampa: <span className="font-semibold">(727) 709-4141</span>
            </a>
            <a href="tel:+17277094141" className="hover:text-white">
              Sarasota: <span className="font-semibold">(727) 709-4141</span>
            </a>
            <a href="mailto:info@titanhomesgroup.com" className="hidden lg:inline hover:text-white">
              info@titanhomesgroup.com
            </a>
          </div>
          <div className="text-gray-300">License #CBC1264713</div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="bg-white text-[var(--navy)] font-extrabold text-lg px-2.5 py-1 rounded tracking-wider">
              TITAN
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-base sm:text-lg tracking-tight">Titan Homes Group</span>
              <span className="hidden sm:block text-white/70 text-[11px] font-medium tracking-widest uppercase">
                Tampa&apos;s Trusted Remodelers
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/90 hover:text-white text-[15px] font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary !py-2.5 !px-5 !min-h-0 text-sm">
              Free Consultation
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+17277094141"
              className="bg-[var(--lavender)] text-[var(--navy)] px-3 h-11 rounded font-bold text-sm flex items-center"
              aria-label="Call Tampa"
            >
              Call
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white w-11 h-11 flex items-center justify-center rounded hover:bg-white/10"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-5 border-t border-white/15 pt-3 -mx-4 px-4 sm:-mx-6 sm:px-6">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white text-base font-medium py-3 border-b border-white/10"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 flex flex-col gap-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  Free Consultation
                </Link>
                <a href="tel:+17277094141" className="btn-outline-white w-full">
                  Tampa: (727) 709-4141
                </a>
                <a href="tel:+17277094141" className="btn-outline-white w-full">
                  Sarasota: (727) 709-4141
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
