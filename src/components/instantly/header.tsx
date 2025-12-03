"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[hsl(var(--instantly-navy))] text-white sticky top-0 z-50 shadow-md">
      <div className="instantly-container">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[hsl(var(--instantly-orange))]">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
            </svg>
            Instantly Inc.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              About Us
            </Link>
            <Link href="/apply" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Apply
            </Link>
            <Link href="/live-streaming" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Live Streaming
            </Link>
            <Link href="/contact" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--instantly-navy))] border-t border-white/10">
          <nav className="instantly-container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/apply"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply
            </Link>
            <Link
              href="/live-streaming"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Live Streaming
            </Link>
            <Link
              href="/contact"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
