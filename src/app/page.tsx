import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { FeatureCard } from "@/components/instantly/feature-card";
import { MobileMockup } from "@/components/instantly/mobile-mockup";
import { Camera, Truck, Smartphone } from "lucide-react";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="instantly-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div>
              <h1 className="text-[hsl(var(--instantly-text-dark))] mb-6">
                Empowering Independent Service Providers
              </h1>
              <p className="text-lg text-[hsl(var(--instantly-text-muted))] mb-8 leading-relaxed">
                Join our community of independent contractors offering live streaming services and instant local delivery.
                Take control of your work, schedule, and earnings with complete freedom and flexibility.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center bg-[hsl(var(--instantly-orange))] text-white px-8 py-4 rounded-lg font-semibold instantly-button-hover"
                >
                  Apply as Provider
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-[hsl(var(--instantly-navy))] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Find Services
                </Link>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Smartphone size={20} />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:opacity-80 transition-opacity"
                >
                  <Smartphone size={20} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 instantly-card-shadow">
                <div className="grid grid-cols-2 gap-4">
                  {/* Placeholder for diverse service providers */}
                  <div className="bg-[hsl(var(--instantly-navy))] rounded-xl aspect-square flex items-center justify-center text-white text-sm font-semibold p-4 text-center">
                    Handy Services
                  </div>
                  <div className="bg-[hsl(var(--instantly-orange))] rounded-xl aspect-square flex items-center justify-center text-white text-sm font-semibold p-4 text-center">
                    Food Delivery
                  </div>
                  <div className="bg-[hsl(var(--instantly-feature-blue))] rounded-xl aspect-square flex items-center justify-center text-[hsl(var(--instantly-text-dark))] text-sm font-semibold p-4 text-center border-2 border-[hsl(var(--instantly-navy))]">
                    Tech Support
                  </div>
                  <div className="bg-[hsl(var(--instantly-feature-green))] rounded-xl aspect-square flex items-center justify-center text-[hsl(var(--instantly-text-dark))] text-sm font-semibold p-4 text-center border-2 border-[hsl(var(--instantly-navy))]">
                    Moving Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[hsl(var(--instantly-bg-light))] py-20">
        <div className="instantly-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Camera className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Live Stream Services"
              description="Showcase your skills in real-time. Connect with customers through live streaming and build your personal brand while earning."
              bgColor="blue"
            />
            <FeatureCard
              icon={<Truck className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Instant Delivery"
              description="Accept local delivery jobs on your terms. Track deliveries in real-time and earn with complete flexibility."
              bgColor="green"
            />
            <FeatureCard
              icon={<Smartphone className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Community Mobile Apps"
              description="Manage everything on the go. Available on Google Play and the App Store with seamless cross-platform experience."
              bgColor="green"
            />
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section className="bg-white py-20">
        <div className="instantly-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-[hsl(var(--instantly-text-dark))] mb-6">
                Join Our Growing Network
              </h2>
              <p className="text-lg text-[hsl(var(--instantly-text-muted))] mb-6 leading-relaxed">
                Be part of a recession-resistant platform that puts contractors first.
                OAuth Gmail login makes getting started fast and secure.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--instantly-feature-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--instantly-text-dark))]">
                    <strong>Complete Freedom:</strong> Set your own schedule and rates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--instantly-feature-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--instantly-text-dark))]">
                    <strong>Instant Earnings:</strong> Get paid immediately for your work
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--instantly-feature-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[hsl(var(--instantly-text-dark))]">
                    <strong>Community Support:</strong> Connect with other providers and grow together
                  </span>
                </li>
              </ul>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center bg-[hsl(var(--instantly-navy))] text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Apply as Messenger or Provider
              </Link>
            </div>

            {/* Right: Mobile Mockup */}
            <div className="flex justify-center">
              <MobileMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[hsl(var(--instantly-navy))] text-white py-20">
        <div className="instantly-container text-center">
          <h2 className="text-white mb-6">
            Equal Opportunity, Maximum Flexibility
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Instantly Inc. is committed to bringing control, freedom, and flexibility back to independent contractors.
            Our platform creates recession-resistant demand through interactive commerce and seamless technology,
            empowering you to build the career you deserve.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
