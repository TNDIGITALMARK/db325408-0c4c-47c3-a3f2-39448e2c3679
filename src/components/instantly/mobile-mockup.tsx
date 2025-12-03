"use client";

export function MobileMockup() {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative w-[280px] h-[560px] bg-[hsl(var(--instantly-navy))] rounded-[40px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[hsl(var(--instantly-navy))] rounded-b-2xl z-10"></div>

        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
          {/* Mobile Screen Content - Miniature version of hero */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="bg-[hsl(var(--instantly-navy))] text-white p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[hsl(var(--instantly-orange))]">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="currentColor" />
                </svg>
                <span className="text-xs font-bold">Instantly Inc.</span>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 p-4 overflow-hidden">
              <h2 className="text-[hsl(var(--instantly-text-dark))] text-sm font-bold mb-2 leading-tight">
                Empowering Independent Service Providers
              </h2>

              <div className="mb-4">
                <div className="bg-gray-200 rounded-lg h-20 mb-2"></div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-[hsl(var(--instantly-orange))] text-white text-xs font-semibold py-2 rounded-lg">
                  Apply as Provider
                </button>
                <button className="w-full bg-[hsl(var(--instantly-navy))] text-white text-xs font-semibold py-2 rounded-lg">
                  Find Services
                </button>
              </div>

              {/* Join Network Section */}
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Join Our Growing Network
                </p>
                <div className="flex justify-center gap-2">
                  <div className="bg-gray-300 rounded w-16 h-6"></div>
                  <div className="bg-gray-300 rounded w-16 h-6"></div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[hsl(var(--instantly-navy))] p-2 flex justify-around">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
