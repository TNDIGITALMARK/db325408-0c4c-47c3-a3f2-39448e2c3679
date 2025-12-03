"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Heart, Users, Zap, Gift } from "lucide-react";
import { useState } from "react";

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<number | ''>('');
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const presets = [10, 25, 50, 100, 250];

  const handlePresetClick = (amount: number) => {
    setDonationAmount(amount);
    setSelectedPreset(amount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (donationAmount) {
      alert(`Thank you for your generous donation of $${donationAmount}! You'll be redirected to our secure payment processor.`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-[hsl(var(--instantly-orange))] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-white" size={40} />
            </div>
            <h1 className="text-[hsl(var(--instantly-text-dark))] mb-4">Support Our Community</h1>
            <p className="text-lg text-[hsl(var(--instantly-text-muted))] max-w-2xl mx-auto">
              Help us empower more independent service providers by contributing to our mission of creating
              economic opportunities and building stronger communities.
            </p>
          </div>

          {/* Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Provider Training</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Fund training programs that help providers develop new skills
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Platform Innovation</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Support development of new features that benefit the community
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Community Support</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Help providers facing hardship get back on their feet
              </p>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-xl p-8 instantly-card-shadow">
            <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-6 text-center">
              Make a Donation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Preset Amounts */}
              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-3">
                  Select an Amount
                </label>
                <div className="grid grid-cols-5 gap-3">
                  {presets.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handlePresetClick(amount)}
                      className={`py-3 rounded-lg font-semibold transition-colors ${
                        selectedPreset === amount
                          ? 'bg-[hsl(var(--instantly-navy))] text-white'
                          : 'bg-[hsl(var(--instantly-bg-light))] text-[hsl(var(--instantly-text-dark))] hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label htmlFor="customAmount" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--instantly-text-muted))] text-lg font-semibold">
                    $
                  </span>
                  <input
                    type="number"
                    id="customAmount"
                    min="1"
                    step="1"
                    value={donationAmount}
                    onChange={(e) => {
                      setDonationAmount(e.target.value ? parseFloat(e.target.value) : '');
                      setSelectedPreset(null);
                    }}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent text-lg"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Donation Type */}
              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="p-4 border-2 border-[hsl(var(--instantly-navy))] bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))] rounded-lg font-semibold"
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    className="p-4 border-2 border-gray-300 text-[hsl(var(--instantly-text-muted))] rounded-lg font-semibold hover:border-gray-400"
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Anonymous Option */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="w-4 h-4 text-[hsl(var(--instantly-navy))] border-gray-300 rounded focus:ring-[hsl(var(--instantly-navy))]"
                />
                <label htmlFor="anonymous" className="text-sm text-[hsl(var(--instantly-text-dark))]">
                  Make this donation anonymous
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!donationAmount}
                className="w-full bg-[hsl(var(--instantly-orange))] text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Heart size={20} />
                Donate {donationAmount ? `$${donationAmount}` : ''}
              </button>

              <p className="text-xs text-center text-[hsl(var(--instantly-text-muted))]">
                Your donation is tax-deductible. You'll receive a receipt via email.
              </p>
            </form>
          </div>

          {/* Impact Statement */}
          <div className="mt-12 bg-[hsl(var(--instantly-navy))] text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Every Donation Makes a Difference</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              100% of donations go directly to supporting our community of independent service providers.
              Together, we're creating economic opportunities and building a more flexible, inclusive future of work.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
