"use client";

import Link from "next/link";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--instantly-navy))] text-white py-12 mt-20">
      <div className="instantly-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[hsl(var(--instantly-orange))]">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
              </svg>
              Instantly Inc.
            </div>
            <p className="text-sm text-white/70">
              Empowering independent service providers through live streaming and instant delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
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
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
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
          <div>
            <h4 className="font-semibold mb-4">Download Our App</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
              >
                <Smartphone size={20} />
                <span className="text-sm">Google Play</span>
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg"
              >
                <Smartphone size={20} />
                <span className="text-sm">App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Instantly Inc. All rights reserved. Equal Opportunity Employer.</p>
          <p className="mt-2">Email: info@instantly-inc.com | Phone: 1-800-INSTANT</p>
        </div>
      </div>
    </footer>
  );
}
