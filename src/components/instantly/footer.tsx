"use client";

import Link from "next/link";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--instantly-navy))] text-white py-8 md:py-12 mt-12 md:mt-20">
      <div className="instantly-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-lg md:text-xl font-bold mb-3 md:mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6 text-[hsl(var(--instantly-orange))]">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
              Instantly Inc.
            </div>
            <p className="text-xs md:text-sm text-white/70">
              Empowering independent service providers through live streaming and instant delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Quick Links</h4>
            <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm">
              <Link href="/" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                About Us
              </Link>
              <Link href="/apply" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Apply
              </Link>
              <Link href="/live-streaming" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Live Streaming
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Legal</h4>
            <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm">
              <Link href="/terms" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Contact
              </Link>
              <Link href="/donate" className="text-white/70 hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile Apps */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4">Download Our App</h4>
            <div className="flex flex-col gap-2 md:gap-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 md:px-4 py-2 rounded-lg"
              >
                <Smartphone size={18} className="md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">Google Play</span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-3 md:px-4 py-2 rounded-lg"
              >
                <Smartphone size={18} className="md:w-5 md:h-5" />
                <span className="text-xs md:text-sm">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 md:pt-6 text-center text-xs md:text-sm text-white/70">
          <p>© {new Date().getFullYear()} Instantly Inc. All rights reserved. Equal Opportunity Employer.</p>
          <p className="mt-1 md:mt-2">Email: info@instantly-inc.com | Phone: 1-800-INSTANT</p>
        </div>
      </div>
    </footer>
  );
}
