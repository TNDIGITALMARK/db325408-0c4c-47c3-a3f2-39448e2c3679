import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Target, Users, Shield, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--instantly-navy))] text-white py-20">
        <div className="instantly-container text-center">
          <h1 className="text-white-heading mb-6">About Instantly Inc.</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering independent service providers through technology, community, and instant opportunities
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="instantly-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[hsl(var(--instantly-text-dark))] mb-6">Our Mission</h2>
              <p className="text-lg text-[hsl(var(--instantly-text-muted))] leading-relaxed">
                Instantly Inc. is dedicated to bringing control, freedom, and flexibility back to independent contractors.
                We believe that every service provider deserves to work on their own terms, earn what they're worth,
                and be part of a supportive community that helps them thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[hsl(var(--instantly-feature-blue))] rounded-xl p-8 instantly-card-shadow">
                <Target className="text-[hsl(var(--instantly-navy))] mb-4" size={40} />
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">Our Vision</h3>
                <p className="text-[hsl(var(--instantly-text-muted))]">
                  To create a recession-resistant platform where independent contractors can build sustainable
                  careers with complete autonomy, supported by cutting-edge technology and a thriving community.
                </p>
              </div>

              <div className="bg-[hsl(var(--instantly-feature-green))] rounded-xl p-8 instantly-card-shadow">
                <Shield className="text-[hsl(var(--instantly-navy))] mb-4" size={40} />
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">Our Commitment</h3>
                <p className="text-[hsl(var(--instantly-text-muted))]">
                  We are committed to equal opportunity, transparent practices, and continuous innovation.
                  Every feature we build is designed to put more power in the hands of service providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[hsl(var(--instantly-bg-light))] py-20">
        <div className="instantly-container">
          <div className="text-center mb-12">
            <h2 className="text-[hsl(var(--instantly-text-dark))] mb-4">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">Community First</h3>
              <p className="text-[hsl(var(--instantly-text-muted))]">
                We build features based on what our community needs, not what makes us the most money.
                Your success is our success.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-navy))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">Trust & Safety</h3>
              <p className="text-[hsl(var(--instantly-text-muted))]">
                Robust verification processes, secure payments, and transparent ratings protect both
                providers and customers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-orange))] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-3">Continuous Growth</h3>
              <p className="text-[hsl(var(--instantly-text-muted))]">
                We invest in tools, training, and resources that help service providers expand their
                skills and grow their businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="instantly-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[hsl(var(--instantly-text-dark))] mb-4">How Instantly Inc. Works</h2>
              <p className="text-lg text-[hsl(var(--instantly-text-muted))]">
                A revolutionary platform combining live streaming and instant delivery
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[hsl(var(--instantly-orange))] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Sign Up & Get Verified</h3>
                  <p className="text-[hsl(var(--instantly-text-muted))]">
                    Quick OAuth Gmail login gets you started in minutes. Complete verification to build trust
                    with customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[hsl(var(--instantly-orange))] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Choose Your Services</h3>
                  <p className="text-[hsl(var(--instantly-text-muted))]">
                    Offer live streaming services to showcase your skills, accept instant delivery jobs,
                    or do both. You're in complete control.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[hsl(var(--instantly-orange))] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Connect & Earn</h3>
                  <p className="text-[hsl(var(--instantly-text-muted))]">
                    Go live to demonstrate your expertise, accept jobs on your schedule, and build your
                    reputation through customer reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[hsl(var(--instantly-orange))] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Get Paid Instantly</h3>
                  <p className="text-[hsl(var(--instantly-text-muted))]">
                    Receive payment immediately after completing jobs. No waiting periods, no hidden fees.
                    Your money, your time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[hsl(var(--instantly-navy))] text-white py-20">
        <div className="instantly-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--instantly-orange))] mb-2">10K+</div>
              <div className="text-white/80">Active Providers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--instantly-orange))] mb-2">50K+</div>
              <div className="text-white/80">Jobs Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--instantly-orange))] mb-2">4.9★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--instantly-orange))] mb-2">24/7</div>
              <div className="text-white/80">Platform Available</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
