import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { FeatureCard } from "@/components/instantly/feature-card";
import { MobileMockup } from "@/components/instantly/mobile-mockup";
import { Camera, Truck, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[hsl(var(--instantly-feature-blue))] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[hsl(var(--instantly-feature-green))] rounded-full opacity-20 blur-3xl"></div>

        <div className="instantly-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-[hsl(var(--instantly-navy))] mb-4 md:mb-6">
                Empowering Independent Service Providers
              </h1>
              <p className="text-base md:text-lg text-[hsl(var(--instantly-text-muted))] mb-6 md:mb-8 leading-relaxed">
                Join our community of independent contractors offering live streaming services and instant local delivery.
                Take control of your work, schedule, and earnings with complete freedom and flexibility.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
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
              <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg hover:opacity-80 transition-opacity w-full sm:w-auto justify-center"
                >
                  <Smartphone size={18} className="md:w-5 md:h-5" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg hover:opacity-80 transition-opacity w-full sm:w-auto justify-center"
                >
                  <Smartphone size={18} className="md:w-5 md:h-5" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative instantly-image-float mt-8 lg:mt-0">
              <div className="instantly-gradient-overlay rounded-2xl overflow-hidden instantly-card-shadow">
                <Image
                  src="/generated/hero-providers.png"
                  alt="Diverse group of independent service providers"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating service icons */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 instantly-card-shadow">
                <Image
                  src="/generated/service-handy.png"
                  alt="Handyman services"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl md:rounded-2xl shadow-lg p-2 md:p-4 instantly-card-shadow">
                <Image
                  src="/generated/service-food.png"
                  alt="Food delivery services"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[hsl(var(--instantly-bg-light))] py-12 md:py-20 relative">
        {/* Section Header */}
        <div className="instantly-container mb-8 md:mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[hsl(var(--instantly-text-dark))] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-[hsl(var(--instantly-text-muted))] leading-relaxed">
              Our platform provides all the tools and support to help you thrive as an independent service provider
            </p>
          </div>
        </div>

        <div className="instantly-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <FeatureCard
              icon={<Camera className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Live Stream Services"
              description="Showcase your skills in real-time. Connect with customers through live streaming and build your personal brand while earning."
              bgColor="blue"
              image="/generated/live-streaming-service.png"
            />
            <FeatureCard
              icon={<Truck className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Instant Delivery"
              description="Accept local delivery jobs on your terms. Track deliveries in real-time and earn with complete flexibility."
              bgColor="green"
              image="/generated/delivery-service.png"
            />
            <FeatureCard
              icon={<Smartphone className="text-[hsl(var(--instantly-navy))]" size={32} />}
              title="Community Mobile Apps"
              description="Manage everything on the go. Available on Google Play and the App Store with seamless cross-platform experience."
              bgColor="blue"
              image="/generated/mobile-app-showcase.png"
            />
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-white py-12 md:py-20">
        <div className="instantly-container">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-[hsl(var(--instantly-text-dark))] mb-4">
              Explore the Platform
            </h2>
            <p className="text-lg text-[hsl(var(--instantly-text-muted))] leading-relaxed">
              Discover all the features designed to empower your independent business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Provider Dashboard */}
            <Link
              href="/dashboard"
              className="group bg-gradient-to-br from-[hsl(var(--instantly-feature-blue))] to-[hsl(var(--instantly-feature-green))] rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[hsl(var(--instantly-navy))]">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-[hsl(var(--instantly-navy))] transition-colors">
                Provider Dashboard
              </h3>
              <p className="text-sm md:text-base text-[hsl(var(--instantly-text-dark))]">
                Track earnings, manage jobs, view analytics, and control your business
              </p>
            </Link>

            {/* Profile Management */}
            <Link
              href="/dashboard/profile"
              className="group bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-purple-600 transition-colors">
                Profile Management
              </h3>
              <p className="text-sm md:text-base text-[hsl(var(--instantly-text-dark))]">
                Build your profile with skills, certifications, portfolio, and pricing
              </p>
            </Link>

            {/* Job Management */}
            <Link
              href="/dashboard/jobs"
              className="group bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[hsl(var(--instantly-orange))]">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-[hsl(var(--instantly-orange))] transition-colors">
                Job Management
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Accept jobs, track deliveries with GPS, and manage your workload
              </p>
            </Link>

            {/* Earnings Dashboard */}
            <Link
              href="/dashboard/earnings"
              className="group bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-600">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-green-600 transition-colors">
                Earnings & Payouts
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Cash out instantly, track transactions, and manage payment methods
              </p>
            </Link>

            {/* Streaming Studio */}
            <Link
              href="/dashboard/streaming"
              className="group bg-gradient-to-br from-red-100 to-pink-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polygon points="10,8 16,12 10,16" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-red-600 transition-colors">
                Streaming Studio
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Go live, share your expertise, earn tips, and build your audience
              </p>
            </Link>

            {/* Community Hub */}
            <Link
              href="/community"
              className="group bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-yellow-600">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-yellow-600 transition-colors">
                Community Hub
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Join leaderboards, discussions, events, and connect with providers
              </p>
            </Link>

            {/* Find Services */}
            <Link
              href="/services"
              className="group bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-blue-600 transition-colors">
                Find Services
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Browse providers by category, rating, location, and availability
              </p>
            </Link>

            {/* Live Streams */}
            <Link
              href="/live-streaming"
              className="group bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-pink-600">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-pink-600 transition-colors">
                Watch Live Streams
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Watch providers showcase their skills and learn from experts
              </p>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="group bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 md:p-8 instantly-card-shadow hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mb-3 md:mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-indigo-600">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2 group-hover:text-indigo-600 transition-colors">
                About Instantly
              </h3>
              <p className="text-[hsl(var(--instantly-text-dark))]">
                Learn about our mission, values, and commitment to providers
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Network Section */}
      <section className="bg-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/generated/pattern-background.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="instantly-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Text */}
            <div className="text-center lg:text-left">
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

            {/* Right: Community Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-2xl overflow-hidden instantly-card-shadow">
                <Image
                  src="/generated/community-providers.png"
                  alt="Community of service providers"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--instantly-orange))] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[hsl(var(--instantly-feature-blue))] to-[hsl(var(--instantly-feature-green))] py-12 md:py-20">
        <div className="instantly-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 instantly-card-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src="/generated/success-metrics.png"
                  alt="Success metrics"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-[hsl(var(--instantly-navy))] mb-2">10,000+</div>
              <div className="text-[hsl(var(--instantly-text-muted))] font-semibold">Active Providers</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 instantly-card-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src="/generated/instant-earnings.png"
                  alt="Instant earnings"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-[hsl(var(--instantly-orange))] mb-2">$5M+</div>
              <div className="text-[hsl(var(--instantly-text-muted))] font-semibold">Earnings Paid Out</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-8 instantly-card-shadow text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src="/generated/service-tech.png"
                  alt="Services completed"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="text-4xl font-bold text-[hsl(var(--instantly-navy))] mb-2">50,000+</div>
              <div className="text-[hsl(var(--instantly-text-muted))] font-semibold">Services Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[hsl(var(--instantly-navy))] text-white py-12 md:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/generated/pattern-background.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="instantly-container text-center relative z-10">
          <h2 className="text-white-heading mb-6">
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
