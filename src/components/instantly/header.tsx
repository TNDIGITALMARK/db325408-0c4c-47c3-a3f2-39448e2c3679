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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Find Services
            </Link>
            <Link href="/live-streaming" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Live Streams
            </Link>
            <Link href="/community" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Community
            </Link>
            <Link href="/dashboard" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              Dashboard
            </Link>
            <Link href="/about" className="hover:text-[hsl(var(--instantly-orange))] transition-colors">
              About
            </Link>
            <Link
              href="/apply"
              className="bg-[hsl(var(--instantly-orange))] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now
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
              href="/services"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Services
            </Link>
            <Link
              href="/live-streaming"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Live Streams
            </Link>
            <Link
              href="/community"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/dashboard"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-[hsl(var(--instantly-orange))] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/apply"
              className="py-2 bg-[hsl(var(--instantly-orange))] text-white px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
